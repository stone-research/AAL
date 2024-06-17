declare module 'pdf-parse' {
    interface PDFInfo {
      Title: string;
      Author: string;
      Subject: string;
      Keywords: string;
      Creator: string;
      Producer: string;
      CreationDate: string;
      ModDate: string;
      Tagged: boolean;
      Pages: number;
      Encrypted: boolean;
      PageSize: string;
      FileSize: number;
      Optimized: boolean;
      PDFFormatVersion: string;
      IsAcroFormPresent: boolean;
      IsXFAPresent: boolean;
    }
  
    interface PDFMeta {
      info: PDFInfo;
      metadata: any;
    }
  
    interface PDFText {
      numrender: number;
      numpage: number;
      text: string;
      num: number;
    }
  
    interface PDFParseResult {
      numpages: number;
      numrender: number;
      info: PDFInfo;
      metadata: any;
      text: string;
      version: string;
    }
  
    function pdf(dataBuffer: Buffer): Promise<PDFParseResult>;
  
    export = pdf;
  }
  