"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

const PricingSection = () => {
  return (
    <section className="w-full bg-gradient-to-r from-[#6366f1] to-[#9333ea] py-12 md:py-24 lg:py-32 text-white">
      <div className="container px-4 md:px-6 space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Pricing Plans to Fit Your Needs
          </h2>
          <p className="max-w-[700px] mx-auto text-gray-200 md:text-xl">
            Choose the plan that works best for your business and unlock the power of our AI tools.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="bg-white text-[#6366f1]">
            <CardContent className="p-6 space-y-4">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Starter</h3>
                <p className="text-gray-500 dark:text-gray-400">Perfect for individuals and small teams.</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold">$9</span>
                  <span className="text-gray-500 dark:text-gray-400">/month</span>
                </div>
                <p className="text-gray-500 dark:text-gray-400">Billed annually or $12/month</p>
              </div>
              <ul className="space-y-2 text-gray-500 dark:text-gray-400">
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4 text-[#6366f1]" />
                  Access to all AI tools
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4 text-[#6366f1]" />
                  5 GB storage
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4 text-[#6366f1]" />
                  Basic support
                </li>
              </ul>
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-[#6366f1] px-8 text-sm font-medium text-white shadow transition-colors hover:bg-[#4f46e5] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#4f46e5] disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Start Free Trial
              </Link>
            </CardContent>
          </Card>
          <Card className="bg-[#6366f1] text-white">
            <CardContent className="p-6 space-y-4">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Premium</h3>
                <p>Ideal for growing businesses and teams.</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold">$29</span>
                  <span>/month</span>
                </div>
                <p>Billed annually or $39/month</p>
              </div>
              <ul className="space-y-2">
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                  Access to all AI tools
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                  20 GB storage
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                  Priority support
                </li>
              </ul>
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-[#6366f1] shadow transition-colors hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Start Free Trial
              </Link>
            </CardContent>
          </Card>
          <Card className="bg-white text-[#6366f1]">
            <CardContent className="p-6 space-y-4">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Enterprise</h3>
                <p className="text-gray-500 dark:text-gray-400">Comprehensive solution for large organizations.</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold">$99</span>
                  <span className="text-gray-500 dark:text-gray-400">/month</span>
                </div>
                <p className="text-gray-500 dark:text-gray-400">Billed annually or $120/month</p>
              </div>
              <ul className="space-y-2 text-gray-500 dark:text-gray-400">
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4 text-[#6366f1]" />
                  Access to all AI tools
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4 text-[#6366f1]" />
                  100 GB storage
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4 text-[#6366f1]" />
                  Dedicated support
                </li>
              </ul>
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-[#6366f1] px-8 text-sm font-medium text-white shadow transition-colors hover:bg-[#4f46e5] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#4f46e5] disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Start Free Trial
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}
