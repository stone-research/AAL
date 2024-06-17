"use client";

import { usePathname } from 'next/navigation';
import { cn } from "@/lib/utils";
import { LayoutDashboard, Bot, SwitchCamera, Pencil, MoveVertical, FileText, Scissors, Settings, Smile } from "lucide-react";
import { Roboto_Slab } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const Roboto = Roboto_Slab({ 
    weight: "900", 
    subsets: ["greek"] 
});

const routes = [
    {
        label: "Dashboard",
        icon: Smile,
        href: "/dashboard",
        color: "text-white",
    },
    {
        label: 'AI Agent',
        icon: Bot,
        href: '/chatagent',
        color: "text-gray-400",
    },
    {
        label: 'AI Logo Creator',
        icon: Pencil,
        href: '/logodesigner',
        color: "text-gray-400",
    },
    {
        label: 'AI Image Creator',
        icon: SwitchCamera,
        href: '/imagecreator',
        color: "text-gray-400",
    },
    {
        label: 'AI Photo Upscaler',
        icon: MoveVertical,
        href: '/imageupscaler',
        color: "text-gray-400",
    },
    {
        label: 'AI PDF Analyzer',
        icon: FileText,
        href: '/pdfanalyzer',
        color: "text-gray-400",
    },
    {
        label: 'AI Background Remover',
        icon: Scissors,
        href: '/backgroundremove',
        color: "text-gray-400",
    },
    {
        label: 'Settings',
        icon: Settings,
        href: '/settings',
        color: "text-gray-400",
    },
];

const Sidebar = () => {
    const pathname = usePathname();

    return (
        <div className="space-y-1 py-4 flex flex-col h-full bg-[#111827] text-white">
            <div className="px-3 py-1 flex-5">
                <Link href="/dashboard" className="flex items-center pl-9 mb-10">
                    <div className="relative w-20 h-20 mr-4">
                        <Image
                            fill
                            alt="Logo"
                            src="/logo.svg"
                        />
                    </div>
                   
                </Link>
                <div className="space-y-1">
                    {routes.map((route) => (
                        <Link href={route.href} key={route.href}>
                            <div className={cn("text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-blue-500 hover:bg-gray-800 rounded-lg transition",
                                pathname === route.href ? "text-white-500 bg-purple-800" :
                                    "text-gray-400"
                            )}>
                                <div className="flex items-center flex-1">
                                    <route.icon className={cn("h-5 w-7 mr-3", route.color)} />
                                    {route.label}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
