"use client";

import { useState } from 'react';
import { Heading } from "@/components/heading";
import { Button } from "@/components/ui/button";
import axios from 'axios';
import Image from 'next/image';
import Loader from "@/components/loader";
import { Empty } from "@/components/ui/empty";
import { MoveVertical } from 'lucide-react';

const BackgroundRemovePage = () => {
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [resultImage, setResultImage] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleBackgroundRemove = async () => {
    if (!image) return;
    setLoading(true);
    setResultImage(null);

    try {
      const formData = new FormData();
      formData.append('file', image);

      const response = await axios.post('/api/backgroundremove', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      const imageUrl = response.data.result;
      setResultImage(imageUrl);
    } catch (error) {
      console.error('Error removing background:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Heading 
        title="Background Remover"
        description="Remove the background from your images easily."
        icon={MoveVertical}
        iconColor="text-violet-500"
        bgColor="bg-black-500/10"
      />
      <div className="px-4 lg:px-8">
        <div className="rounded-lg border w-full p-4 md:p-6 focus-within:shadow-sm grid grid-cols-12 gap-2">
          <input 
            type="file" 
            onChange={handleFileChange} 
            className="col-span-12 mb-4" 
            disabled={loading}
          />
          {preview && (
            <div className="col-span-12 flex justify-center mb-4">
              <Image src={preview} alt="Preview" width={300} height={300} className="object-contain" />
            </div>
          )}
          <Button 
            onClick={handleBackgroundRemove} 
            disabled={!image || loading} 
            className="col-span-12 lg:col-span-2 w-full mb-4"
          >
            {loading ? <Loader /> : 'Remove Background'}
          </Button>
          {resultImage && (
            <div className="col-span-12 flex justify-center mt-4">
              <Image src={resultImage} alt="Result" width={300} height={300} className="object-contain" />
              <div className="mt-2 w-full flex justify-center">
                <Button onClick={() => window.open(resultImage, '_blank')} variant="secondary">
                  Download
                </Button>
              </div>
            </div>
          )}
          {!resultImage && !loading && !preview && (
            <Empty label="No image selected." />
          )}
        </div>
      </div>
    </div>
  );
};

export default BackgroundRemovePage;
