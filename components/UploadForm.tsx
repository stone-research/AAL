// components/UploadForm.tsx
import { useState, FormEvent } from 'react';

type SentimentResult = {
  neg: number;
  neu: number;
  pos: number;
  compound: number;
};

export default function UploadForm() {
  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState<SentimentResult | null>(null);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (!file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = async () => {
      const base64String = reader.result!.toString().split(',')[1];

      const res = await fetch('/api/pdfanalyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ pdfBase64: base64String }),
      });

      const data: SentimentResult = await res.json();
      setResult(data);
    };
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          accept="application/pdf"
          onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)}
        />
        <button type="submit">Upload and Analyze</button>
      </form>
      {result && <pre>{JSON.stringify(result, null, 2)}</pre>}
    </div>
  );
}
