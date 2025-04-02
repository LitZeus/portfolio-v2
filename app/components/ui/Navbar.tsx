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

  const isActive = (url: string) => {
    if (url === "/" && pathname === "/") return true;
    if (url !== "/" && pathname?.startsWith(url)) return true;
    return false;
  };

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
              "mt-6",
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
              "font-medium",
              "items-center",
              "hover:text-opacity-80",
            ],
          }}
          isBlurred
        >
          <NavbarContent className="sm:flex gap-4" justify="center">
            {routes.map((section: routeProps) => {
              const active = isActive(section.url);
              return (
                <NavbarItem 
                  key={section.url}
                  isActive={active}
                >
                  <Link
                    className={`px-3 py-1.5 rounded-lg transition-colors ${
                      active
                        ? "bg-white/10 text-white font-semibold"
                        : "text-[#71717A] hover:text-white"
                    }`}
                    href={section.url}
                  >
                    {section.label}
                  </Link>
                </NavbarItem>
              );
            })}
          </NavbarContent>
        </Navbar>
      </motion.div>
      {/* Space below the navbar for consistent layout */}
      <div className="pt-[80px]"></div>
    </div>
  );
};
