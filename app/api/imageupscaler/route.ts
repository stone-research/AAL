import { auth } from "@clerk/nextjs";
import { NextRequest, NextResponse } from "next/server";
import Replicate from 'replicate';
import { writeFile } from "fs/promises";
import path from "path";
import { v4 as uuidv4 } from "uuid";  // Correct import statement

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN!,
});

export const POST = async (req: NextRequest) => {
  try {
    // Authenticate the user
    const { userId } = auth(req);
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Extract form data and file
    const formData = await req.formData();
    const file = formData.get("file");
    if (!file || !(file instanceof Blob)) {
      return NextResponse.json({ error: "No valid files received." }, { status: 400 });
    }

    // Save the file to the public/assets directory
    const buffer = Buffer.from(await file.arrayBuffer());
    const filename = `${uuidv4()}.jpg`;
    const absolutePath = path.join(process.cwd(), "public/assets", filename);

    await writeFile(absolutePath, buffer);

    // Generate the file URL
    const fileURL = `https://${process.env.VPS_HOSTNAME}/assets/${filename}`;
    const input = { image: fileURL };

    // Call the Replicate API
    const response = await replicate.run(
      "philz1337x/clarity-upscaler:f11a4727f8f995d2795079196ebda1bcbc641938e032154f46488fc3e760eb79",
      { input }
    );

    return NextResponse.json(response);
  } catch (error) {
    console.error('[IMAGE_UPSCALE_ERROR]', error);
    return new NextResponse("Internal Error", { status: 500 });
  }
};
