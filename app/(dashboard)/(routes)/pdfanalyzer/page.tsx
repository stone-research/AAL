"use client";

import { useState } from 'react';
import { Heading } from "@/components/heading";
import { Button } from "@/components/ui/button";
import axios from 'axios';
import Loader from "@/components/loader";
import { Empty } from "@/components/ui/empty";
import { FileText } from 'lucide-react';
import { marked } from 'marked';

const PdfAnalyzerPage = () => {
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [text, setText] = useState<string | null>(null);
  const [sentiment, setSentiment] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [viewMode, setViewMode] = useState<'plain' | 'markdown' | 'html'>('plain');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type === 'application/pdf') {
      setPdfFile(file);
    } else {
      alert("Please upload a valid PDF file.");
    }
  };

  const handleAnalyzePdf = async () => {
    if (!pdfFile) return;
    setLoading(true);
    setText(null);
    setSentiment(null);

    try {
      const reader = new FileReader();
      reader.readAsDataURL(pdfFile);

      reader.onload = async () => {
        const base64File = reader.result?.toString().split(',')[1];
        try {
          const response = await axios.post('/api/pdfanalyze', { pdfBase64: base64File });
          setText(response.data.text);
          setSentiment(response.data.sentiment);
          setLoading(false);
        } catch (error) {
          console.error('Error analyzing PDF:', error);
          alert('Failed to analyze PDF. Please try again.');
          setLoading(false);
        }
      };

      reader.onerror = (error) => {
        console.error('Error reading file:', error);
        setLoading(false);
      };
    } catch (error) {
      console.error('Error analyzing PDF:', error);
      setLoading(false);
    }
  };

  const renderText = () => {
    if (!text) return null;

    if (viewMode === 'markdown') {
      return <div dangerouslySetInnerHTML={{ __html: marked(text) }} />;
    } else if (viewMode === 'html') {
      return <div dangerouslySetInnerHTML={{ __html: text }} />;
    } else {
      return <pre className="bg-gray-100 p-4 rounded-md whitespace-pre-wrap">{text}</pre>;
    }
  };

  const renderSentiment = () => {
    if (!sentiment) return null;

    return (
      <div className="mt-4">
        <h3 className="text-lg font-semibold">Sentiment Analysis</h3>
        <pre className="bg-gray-100 p-4 rounded-md whitespace-pre-wrap">{JSON.stringify(sentiment, null, 2)}</pre>
      </div>
    );
  };

  return (
    <div>
      <Heading
        title="PDF Analyzer"
        description="Analyze and extract text from your PDF files."
        icon={FileText}
        iconColor="text-blue-500"
        bgColor="bg-black-500/10"
      />
      <div className="px-4 lg:px-8">
        <div className="rounded-lg border w-full p-4 md:p-6 focus-within:shadow-sm grid grid-cols-12 gap-2">
          <input
            type="file"
            accept="application/pdf"
            onChange={handleFileChange}
            className="col-span-12 mb-4"
            disabled={loading}
          />
          <Button
            onClick={handleAnalyzePdf}
            disabled={!pdfFile || loading}
            className="col-span-12 lg:col-span-2 w-full mb-4"
          >
            {loading ? <Loader /> : 'Analyze PDF'}
          </Button>
          {text && (
            <div className="col-span-12 mt-4">
              <div className="mb-4">
                <Button onClick={() => setViewMode('plain')} className="mr-2">Plain Text</Button>
                <Button onClick={() => setViewMode('markdown')} className="mr-2">Markdown</Button>
                <Button onClick={() => setViewMode('html')} className="mr-2">HTML</Button>
              </div>
              {renderText()}
              {renderSentiment()}
            </div>
          )}
          {!text && !loading && !pdfFile && (
            <Empty label="No PDF selected." />
          )}
        </div>
      </div>
    </div>
  );
};

export default PdfAnalyzerPage;
