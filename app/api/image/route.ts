import fs from 'fs';
import path from 'path';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (request: NextRequest) => {
  const searchParams = request.nextUrl.searchParams;
  const imageName = searchParams.get("imageName");
  console.log(imageName);

  if (!imageName) {
    return NextResponse.json({ message: 'Image name is required' }, { status: 400 });
  }

  const imagePath = path.join(process.cwd(), 'public', 'assets', `${imageName}`);

  try {
    const image = fs.readFileSync(imagePath);
    const contentType = path.extname(imagePath).substring(1);
    const response = new NextResponse(image, {
      headers: {
        'Content-Type': `image/${contentType}`,
      },
    });
    return response;
  } catch (error) {
    return NextResponse.json({ message: "Oops! File Not Found", error }, { status: 404 });
  }
};
