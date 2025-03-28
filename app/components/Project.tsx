"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

import { Chip } from "@heroui/chip";
import { ProjectType, TechnologyType } from "../types";
import ProjectsSectionAnimations from "../utils/ProjectsSectionAnimations";
import { GithubSVG, LinkSVG } from "./ui/icons";

export const Project = (project: ProjectType) => {
  const {
    description,
    title,
    icon,
    imgUrl,
    videoUrl,
    technologies,
    githubUrl,
    websiteUrl,
  } = project;

  // Animation controls and scroll-triggered view
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    if (!mq.matches) return ProjectsSectionAnimations.mobileAnimation();

    ProjectsSectionAnimations.titleAnimation();
    ProjectsSectionAnimations.videoAnimation();
    ProjectsSectionAnimations.descriptionAnimation();
    ProjectsSectionAnimations.websiteUrlAnimation();
    ProjectsSectionAnimations.githubUrlAnimation();
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={fadeInUp}
      className="w-full max-w-[95%] md:max-w-[76%] lg:max-w-full mx-auto px-3 sm:px-6 md:px-10 py-4 sm:py-6"
    >
      <div className="flex flex-col gap-6 sm:gap-8 lg:grid lg:grid-cols-2">
        {/* Title (Visible first on small screens) */}
        <motion.h2
          variants={fadeInUp}
          className="text-2xl sm:text-3xl font-bold text-white mb-2 flex items-center gap-2 lg:hidden"
        >
          <span className="bg-[#303036] p-1.5 sm:p-2 rounded-md">{icon}</span>
          {title}
        </motion.h2>

        {/* Media (Video or Image) */}
        <motion.div
          variants={fadeInUp}
          className="relative w-full rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300"
        >
          {videoUrl ? (
            <video
              className="w-full h-full object-cover"
              autoPlay
              loop
              playsInline
              poster={imgUrl}
              src={videoUrl}
            />
          ) : (
            <Image
              src={imgUrl}
              alt={title}
              width={800}
              height={600}
              className="rounded-xl w-full object-cover"
              unoptimized
            />
          )}
        </motion.div>

        {/* Description Box */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-col justify-between bg-[#1E1E1E] p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          {/* Title (Hidden on small screens, shown on large screens) */}
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 flex items-center gap-2 hidden lg:flex">
            <span className="bg-[#303036] p-2 rounded-md">{icon}</span>
            {title}
          </h2>

          <p className="text-gray-400 text-base sm:text-lg">{description}</p>
          <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-3 sm:mt-4">
            {technologies.map(
              ({ name, color }: TechnologyType, index: number) => (
                <Chip
                  key={`technology-item-${index}`}
                  size="sm"
                  className="bg-[#2A2A2E] text-gray-300 hover:bg-[#3A3A3E] transition-colors"
                >
                  <span className="flex items-center gap-2">{name}</span>
                </Chip>
              )
            )}
          </div>

          <div className="mt-4 sm:mt-6 flex gap-3 sm:gap-4">
            {websiteUrl !== "NONE" && (
              <Link
                href={websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full bg-[#3B82F6] text-white py-1.5 sm:py-2 rounded-md hover:bg-[#2563EB] transition-colors text-sm sm:text-base"
              >
                <LinkSVG />
              </Link>
            )}

            <Link
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full bg-[#6B7280] text-white py-1.5 sm:py-2 rounded-md hover:bg-[#4B5563] transition-colors text-sm sm:text-base"
            >
              <GithubSVG />
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
