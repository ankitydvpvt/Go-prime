"use client";

import React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import PillNav from "@/components/Universal/PillNav";

const Navigation = () => {
  return (
    <>
      {/* Mobile Navigation */}
      <div className="flex bg-white h-15 w-15 rounded-full p-4 md:hidden lg:hidden">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent hover:bg-transparent">
                <Menu />
              </NavigationMenuTrigger>

              <NavigationMenuContent className="bg-[#026aa2] text-white p-4 space-y-2">
                <NavigationMenuLink
                  asChild
                  className="block px-4 py-2 rounded-md hover:bg-white hover:text-[#284022]"
                >
                  <Link href="/">Home</Link>
                </NavigationMenuLink>

                <NavigationMenuLink
                  asChild
                  className="block px-4 py-2 rounded-md hover:bg-white hover:text-[#284022]"
                >
                  <Link href="/services">Services</Link>
                </NavigationMenuLink>

                <NavigationMenuLink
                  asChild
                  className="block px-4 py-2 rounded-md hover:bg-white hover:text-[#284022]"
                >
                 <Link href="/contact">Contact</Link>
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex lg:flex justify-center pt-6">
        <PillNav
          logo="/logo.png"
          items={[
            { label: "Home", href: "/" },
            { label: "About", href: "/about" },
            { label: "Services", href: "/services" },
            { label: "Contact", href: "/contact" },
          ]}
          activeHref="/"
          className="custom-nav w-1/2 justify-center"
          ease="power2.easeOut"
          baseColor="#ffffff"
          pillColor="#026aa2"
          hoveredPillTextColor="#000000"
          pillTextColor="#ffffff"
        />
      </div>
    </>
  );
};

export default Navigation;
