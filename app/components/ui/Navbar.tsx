"use client";
import { Navbar, NavbarContent, NavbarItem } from "@heroui/navbar";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface routeProps {
  label: string;
  url: string;
}

const routes: routeProps[] = [
  {
    label: "Home",
    url: "/",
  },
  {
    label: "Projects",
    url: "/projects",
  },
  {
    label: "Contact",
    url: "/contact",
  },
];

export const NavbarSection = () => {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div className="h-[80px]">
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-0 left-0 w-full z-50"
      >
        <Navbar
          classNames={{
            wrapper: [
              "bg-content2",
              "rounded-xl",
              "h-11",
              "mt-6", // Increased gap above the navbar
              "flex",
              "justify-center",
              "w-auto",
              "px-2",
              "shadow-md",
            ],
            item: [
              "transition-all",
              "flex",
              "relative",
              "text-sm",
              "text-default-500",
              "font-medium",
              "items-center",
              "hover:text-opacity-60",
              "data-[active=true]:after:content-['']",
              "data-[active=true]:after:absolute",
              "data-[active=true]:after:bottom-[-4px]",
              "data-[active=true]:after:left-0",
              "data-[active=true]:after:right-0",
              "data-[active=true]:after:h-[2px]",
              "data-[active=true]:after:rounded-[2px]",
              "data-[active=true]:after:bg-accent",
              "data-[active=true]:text-default-foreground",
              "data-[active=true]:dark:bg-default rounded-lg",
            ],
          }}
          isBlurred
        >
          <NavbarContent className="sm:flex gap-4" justify="center">
            {routes.map((section: routeProps) => (
              <NavbarItem key={section.url} isActive={pathname === section.url}>
                <Link
                  className="px-3 py-1.5 rounded-lg"
                  color="foreground"
                  href={section.url}
                >
                  {section.label}
                </Link>
              </NavbarItem>
            ))}
          </NavbarContent>
        </Navbar>
      </motion.div>
      {/* Space below the navbar for consistent layout */}
      <div className="pt-[80px]"></div>
    </div>
  );
};
