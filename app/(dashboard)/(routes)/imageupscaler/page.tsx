"use client";

import { useForm } from "react-hook-form";
import { Heading } from "@/components/heading";
import { useRouter } from "next/navigation";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import { Download, MoveVerticalIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardFooter } from "@/components/ui/card";
import { Empty } from "@/components/ui/empty";
import Loader from "@/components/loader";

const ImageUpscalePage = () => {
  const [image, setImage] = useState({ preview: '', data: '' });
  const [upscaledImages, setUpscaledImages] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImage({
        preview: URL.createObjectURL(file),
        data: file,
      });
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setUpscaledImages([]);
    try {
      const formData = new FormData();
      formData.append('file', image.data);
      const response = await axios.post('/api/imageupscale', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setUpscaledImages(response.data);
    } catch (error) {
      console.error('Error upscaling image:', error);
    } finally {
      setIsLoading(false);
      router.refresh();
    }
  };

  return (
    <div>
      <Heading
        title="AI Photo Upscaler"
        description="Give us an image and get an stunning Up-scaled one"
        icon={MoveVerticalIcon}
        iconColor="text-violet-500"
        bgColor="bg-black-500/10"
      />
      <div className="px-4 lg:px-8">
        <form onSubmit={handleSubmit} className="rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2" encType="multipart/form-data">
          <div className="col-span-12 lg:col-span-11">
            <input
              type="file"
              name="image"
              id="imageInput"
              accept="image/*"
              disabled={isLoading}
              onChange={handleFileChange}
              className="w-full py-2 px-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <Button type="submit" className="col-span-12 lg:col-span-1 w-full" disabled={isLoading}>
            Up Scale
          </Button>
        </form>
        <div className="space-y-4 mt-4">
          {isLoading && (
            <div className="p-20">
              <Loader />
            </div>
          )}
          {upscaledImages.length === 0 && !isLoading && (
            <Empty label="No images generated." />
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-8">
            {upscaledImages.map((src, index) => (
              <Card key={index} className="rounded-lg overflow-hidden">
                <div className="relative aspect-square">
                  <Image
                    fill
                    alt="Upscaled"
                    src={src}
                  />
                </div>
                <CardFooter className="p-2">
                  <Button onClick={() => window.open(src)} variant="secondary" className="w-full">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageUpscalePage;
