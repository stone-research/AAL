"use client";

import { ArrowRight, BotIcon, MoveVertical, PencilLine, SwitchCamera, FileText, Scissors } from "lucide-react";
import { Card } from "@/components/ui/card";
import clsx from "clsx";
import Link from 'next/link';

const tools = [
  {
    label: "AI Agent",
    icon: BotIcon,
    color: "text-orange-500",
    bgColor: "bg-gray-100",
    href: "/chatagent"
  },
  {
    label: "AI Logo Creator",
    icon: PencilLine,
    color: "text-purple-500",
    bgColor: "bg-gray-100",
    href: "/logodesigner"
  },
  {
    label: "AI Image Creator",
    icon: SwitchCamera,
    color: "text-yellow-500",
    bgColor: "bg-gray-100",
    href: "/imagecreator"
  },
  {
    label: "AI Photo Upscaler",
    icon: MoveVertical,
    color: "text-green-500",
    bgColor: "bg-gray-100",
    href: "/imageupscaler"
  },
  {
    label: "AI PDF Analyzer",
    icon: FileText,
    color: "text-blue-500",
    bgColor: "bg-gray-100",
    href: "/pdfanalyzer"
  },
  {
    label: "AI Background Remover",
    icon: Scissors,
    color: "text-red-500",
    bgColor: "bg-gray-100",
    href: "/backgroundremove"
  }
];

const DashboardPage = () => {
  return (
    <div className="bg-white text-gray-800">
      <div className="mb-8 space-y-4">
        <h2 className="text-xl md:text-2xl font-bold text-center">
          Discover our agents and other AI-tools.
        </h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
          Artificial intelligence revolutionized the way we live and work.
        </p>
      </div>
      <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {tools.map((tool) => (
          <Link href={tool.href} key={tool.href} legacyBehavior>
            <a className="block">
              <Card
                className="p-4 border-gray-200 flex items-center justify-between hover:shadow-md transition cursor-pointer"
              >
                <div className="flex items-center gap-x-4">
                  <div className={clsx("p-2 w-fit rounded-md", tool.bgColor)}>
                    <tool.icon className={clsx("w-8 h-8", tool.color)} />
                  </div>
                  <div className="font-semibold">
                    {tool.label}
                  </div>
                </div>
                <ArrowRight className="w-5 h-5" />
              </Card>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
