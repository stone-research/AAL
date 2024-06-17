"use client";

import React from "react";
import Link from "next/link";
import Navbar from "@/app/(landing)/navbar/page";
import FirstSection from "@/app/(landing)/first-section/page";
import FourthSection from "@/app/(landing)/fourth-section/page";
import Pricing from "@/app/(landing)/pricingSection/page";
import FifthSection from "@/app/(landing)/fifth-section/page";
import "@/app/globals.css";

import { Card, CardContent } from "@/components/ui/card";

const LandingPage = (): JSX.Element => (
  <div>
    <Navbar />
    <FirstSection />
    <HeroSection />
    <FeaturesSection />
    <FourthSection />
    <Pricing />
    <FifthSection />
  </div>
);

function HeroSection() {
  return (
    <section
      id="hero-section"
      className="w-full bg-gradient-to-r from-[#6366f1] to-[#9333ea] py-24 md:py-32 lg:py-40 xl:py-48"
    >
      <div className="container px-4 md:px-6 text-white text-center space-y-6">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl xl:text-7xl">
          Transform Your Business with Cutting-Edge AI Tools
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl">
          Unlock the power of AI to streamline your workflows, boost
          productivity, and drive innovation.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row justify-center">
          <div>
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md bg-white text-[#6366f1] px-8 text-sm font-medium shadow transition-colors hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Start Free Trial
            </Link>
          </div>
          <div>
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md border border-white px-8 text-sm font-medium text-white shadow-sm transition-colors hover:bg-white hover:text-[#6366f1] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const features = [
    {
      title: "Chat Agent",
      description:
        "Engage in natural conversations and get instant responses to your queries.",
      icon: BotIcon,
    },
    {
      title: "PDF Analyzer",
      description:
        "Extract key information, summarize content, and automate document processing.",
      icon: FileScanIcon,
    },
    {
      title: "Image Upscaler",
      description:
        "Enhance image quality and resolution with our advanced AI-powered upscaling.",
      icon: ImageUpIcon,
    },
    {
      title: "Background Remover",
      description:
        "Easily remove backgrounds from images with our powerful AI-driven tool.",
      icon: EraserIcon,
    },
    {
      title: "Image Generator",
      description:
        "Create unique, high-quality images from text prompts using advanced AI models.",
      icon: ImageIcon,
    },
    {
      title: "Logo Generator",
      description:
        "Effortlessly create professional-looking logos for your business or brand.",
      icon: BarcodeIcon,
    },
  ];

  return (
    <section
      id="features-section"
      className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-[#6366f1] to-[#9333ea] text-white"
    >
      <div className="container px-4 md:px-6 space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Powerful AI Tools at Your Fingertips
          </h2>
          <p className="max-w-[700px] mx-auto text-gray-200 md:text-xl">
            Streamline your workflows, boost productivity, and drive innovation
            with our cutting-edge AI tools.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white text-[#6366f1]">
              <CardContent className="flex flex-col items-center justify-center gap-4 p-6">
                <feature.icon className="w-12 h-12" />
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-center">
                  {feature.description}
                </p>
                <Link
                  href="#"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-[#6366f1] px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-[#4f46e5] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#4f46e5] disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Try Now
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

type IconProps = React.SVGProps<SVGSVGElement>;

function BotIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 8V4H8" />
      <rect width="16" height="12" x="4" y="8" rx="2" />
      <path d="M2 14h2" />
      <path d="M20 14h2" />
      <path d="M15 13v2" />
      <path d="M9 13v2" />
    </svg>
  );
}

function FileScanIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10V7l-5-5H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h4" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M16 14a2 2 0 0 0-2 2" />
      <path d="M20 14a2 2 0 0 1 2 2" />
      <path d="M20 22a2 2 0 0 0 2-2" />
      <path d="M16 22a2 2 0 0 1-2-2" />
    </svg>
  );
}

function ImageUpIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21" />
      <path d="m14 19.5 3-3 3 3" />
      <path d="M17 22v-5.5" />
      <circle cx="9" cy="9" r="2" />
    </svg>
  );
}
function EraserIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21" />
      <path d="M22 21H7" />
      <path d="m5 11 9 9" />
    </svg>
  );
}

function BarcodeIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 5v14" />
      <path d="M8 5v14" />
      <path d="M12 5v14" />
      <path d="M17 5v14" />
      <path d="M21 5v14" />
    </svg>
  );
}

function ImageIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <circle cx="9" cy="9" r="2" />
      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
    </svg>
  );
}

export default LandingPage;
