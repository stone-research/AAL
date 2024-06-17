'use client';

import * as React from 'react';
import Link from 'next/link';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import ListItem from '@/components/ui/ListItem';
import Logo from "./logo";

const components = [
  {
    title: 'AI Agent',
    description: 'AI-enhanced tools for your creative work.',
    href: '/chatagent',
  },
  {
    title: 'AI Logo Creator',
    description: 'Create stunning logos or trademark symbols for your running brand or project.',
    href: '/logodesigner',
  },
  {
    title: 'AI Image Creator',
    description: 'Create stunning high-resolution images to use in your content or advertising.',
    href: '/imagecreator',
  },
  {
    title: 'AI Photo Upscaler',
    description: 'Upscale your low-resolution images and get the best out of them.',
    href: '/imageupscaler',
  },
  {
    title: 'AI PDF Analyzer',
    description: 'Get a summary or review of your documents, chat to your pdf-document and ask questions about the content.',
    href: '/pdfanalyzer',
  },
  {
    title: 'AI Background Remover',
    description: 'Remove backgrounds from your images with ease.',
    href: '/backgroundremove',
  },
];

export function NavigationMenuBar() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="hidden md:flex md:space-x-4">
        <NavigationMenuItem>
          <NavigationMenuTrigger>Find out more</NavigationMenuTrigger>
          <NavigationMenuContent className="bg-white shadow-lg rounded-md">
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <Logo />
                    <div className="mb-2 mt-4 text-lg font-medium">AAL</div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      AI-enhanced tools for your creative work.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem title="Documentary" href="#">
                Learn all the features of our powerful applications.
              </ListItem>
              <ListItem title="API" href="#">
                How to connect via API in seconds.
              </ListItem>
              <ListItem title="Community" href="#">
                Join our community via our Discord Channel. Ask questions and receive feedback on all our applications.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Tools</NavigationMenuTrigger>
          <NavigationMenuContent className="bg-white shadow-lg rounded-md">
            <ul className="grid w-[400px] gap-5 p-4 md:w-[500px] md:grid-cols-3 lg:w-[800px]">
              {components.map((component) => (
                <ListItem key={component.title} title={component.title} href={component.href}>
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className="font-medium">API</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className="font-medium">Pricing</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
