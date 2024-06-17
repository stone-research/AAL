import { NextRequest, NextResponse } from "next/server";
import Replicate from "replicate";
import { writeFile } from "fs/promises";
import path from "path";

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN!,
});

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return new NextResponse("No files received.", { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const filename = file.name.replaceAll(" ", "_");
    const absolutePath = path.join(process.cwd(), "public/assets/" + filename);

    await writeFile(absolutePath, buffer);

    // Use a public URL for testing
    const fileURL = `https://your-public-url/assets/${filename}`;

    const input = {
      image: fileURL,
    };

    const response = await replicate.run(
      "cjwbw/rembg:fb8af171cfa1616ddcf1242c093f9c46bcada5ad4cf6f2fbe8b81b330ec5c003",
      { input }
    );

    return NextResponse.json({ result: response });
  } catch (error) {
    console.log('[BACKGROUND_REMOVE_ERROR]', error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
