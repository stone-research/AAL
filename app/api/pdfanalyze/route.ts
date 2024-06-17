import type { NextApiRequest, NextApiResponse } from 'next'
import { spawn } from 'child_process'
import path from 'path'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { pdfBase64 } = req.body;

    try {
      const pdfBuffer = Buffer.from(pdfBase64, 'base64');
      const tempPdfPath = path.join('/tmp', 'temp.pdf');

      require('fs').writeFileSync(tempPdfPath, pdfBuffer);

      const pythonProcess = spawn('python3', [path.join(__dirname, 'pdf-analyzer.py'), tempPdfPath]);

      let output = '';
      pythonProcess.stdout.on('data', (data) => {
        output += data.toString();
      });

      pythonProcess.stderr.on('data', (data) => {
        console.error('Error:', data.toString());
      });

      pythonProcess.on('close', (code) => {
        if (code === 0) {
          try {
            const result = JSON.parse(output);
            res.status(200).json(result);
          } catch (error) {
            res.status(500).json({ error: 'Invalid JSON response from Python script' });
          }
        } else {
          res.status(500).json({ error: 'Failed to analyze PDF.' });
        }
      });
    } catch (error) {
      console.error('Error analyzing PDF:', error);
      res.status(500).json({ error: 'Failed to analyze PDF.' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
