import React, { useState, ChangeEvent } from 'react';
import axios from 'axios';
import { Button, Input, Alert } from '@shadcn/ui';

const FileUpload: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [message, setMessage] = useState<string>('');
  const [analysis, setAnalysis] = useState<any>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      setMessage('No file selected');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const uploadResponse = await axios.post('/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setMessage(uploadResponse.data.message);

      const analyzeResponse = await axios.post('/api/analyze', {
        filePath: uploadResponse.data.filePath,
      });
      setAnalysis(analyzeResponse.data.analysis);
    } catch (error) {
      setMessage('Failed to upload or analyze file');
    }
  };

  return (
    <div>
      <Input type="file" onChange={handleFileChange} />
      <Button onClick={handleUpload}>Upload</Button>
      {message && <Alert>{message}</Alert>}
      {analysis && (
        <div>
          <h2>Analysis Results</h2>
          <pre>{JSON.stringify(analysis, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
