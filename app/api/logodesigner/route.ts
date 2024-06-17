import { NextResponse } from "next/server";
import Replicate from "replicate";
import { auth } from "@clerk/nextjs";

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

export async function POST(req: Request) {
  const { userId } = auth();
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { prompt, amount, resolution, negative_prompt } = await req.json();

  try {
    const input = {
      width: parseInt(resolution.split('x')[0]),
      height: parseInt(resolution.split('x')[1]),
      prompt: prompt,
      refine: "expert_ensemble_refiner",
      apply_watermark: false,
      num_inference_steps: 30,
    };

    const output = await replicate.run(
      "fofr/sdxl-abstract:a28d461dc16846310d03d12f8cbc31c5ef487356aa7b48ac1709969418768a03",
      { input }
    );

    return NextResponse.json(output);
  } catch (error: any) {
    console.error("[LOGO_DESIGNER_ERROR]", error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
