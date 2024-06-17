"use client";

import { useState, useEffect } from "react";
import { AlignJustify } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";

const ActionButtons = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div>
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <button className="p-2">
              <AlignJustify className="w-6 h-6" />
            </button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetDescription>
                <div className="flex flex-col space-y-4 items-start w-full text-lg text-black mt-10">
                  <Link href="/sign-in" passHref>
                    <Button as="a" className="w-full">LOGIN</Button>
                  </Link>
                  <Link href="/sign-up" passHref>
                    <Button as="a" className="w-full">SIGN UP</Button>
                  </Link>
                  {/* Add links for Pricing, Contact, and About as needed */}
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>

      <div className="hidden md:flex md:space-x-4">
        <Link href="/sign-in" passHref>
          <Button as="a" className="text-md" variant="ghost">
            Login
          </Button>
        </Link>
        <Link href="/sign-up" passHref>
          <Button as="a" className="text-md bg-white-500">Sign up</Button>
        </Link>
        {/* Add links for other buttons as needed */}
      </div>
    </div>
  );
};

export default ActionButtons;
