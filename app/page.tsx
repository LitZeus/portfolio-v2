"use client";
import { highlightsType } from "@/app/types/highlightsType";
import { techonologyIconList, whoAmIData } from "@/app/utils";
import aboutAnimation from "@/app/utils/aboutSectionAnimations";
import { highlightsList } from "@/app/utils/highlightsList";
import { Avatar } from "@heroui/avatar";
import { Card, CardBody } from "@heroui/card";
import { Tooltip } from "@heroui/tooltip";
import Image from "next/image";
import { useEffect } from "react";
import { FaDownload } from "react-icons/fa";
import { Highlights } from "./components/Highlights";
import IconComponent from "./components/ui/IconComponent";
import { SocialLinks } from "./components/ui/SocialLinks";

const { fullName, profession, whoAmI, quote } = whoAmIData;

export default function Home() {
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const handleMediaQuery = (e: MediaQueryListEvent | MediaQueryList) => {
      if (e.matches) {
        aboutAnimation.whoAmIAnimation();
        aboutAnimation.professionAnimation();
        aboutAnimation.quoteAnimation();
        aboutAnimation.techonologyIconListAnimation();
        aboutAnimation.verticalImageAnimation();
        aboutAnimation.highlightContentAnimation();
      } else {
        aboutAnimation.mobileAnimation();
      }
    };

    // Initial check
    handleMediaQuery(mq);

    // Add listener for changes
    mq.addListener(handleMediaQuery);

    return () => {
      mq.removeListener(handleMediaQuery);
    };
  }, []);

  return (
    <main className="p-1.5 sm:p-4 pb-6 sm:pb-12 max-w-6xl m-auto overflow-hidden 2xl:overflow-visible relative min-h-screen">
      <div className="w-full md:w-[90%] max-w-[95%] md:max-w-[74%] mx-auto grid grid-cols-4 lg:grid-cols-3 gap-2 sm:gap-5">
        {/* Mobile Hero Section */}
        <div className="lg:hidden col-span-full flex flex-col items-center">
          <div className="relative w-full h-[350px] sm:h-[400px] rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/80 z-10" />
            <Image
              src="https://images.unsplash.com/photo-1502581827181-9cf3c3ee0106?q=80&w=1576&auto=format&fit=crop"
              priority={true}
              alt="profile image"
              fill
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 z-20 flex flex-col justify-end p-4 sm:p-6 text-white">
              <div className="flex flex-col items-center text-center mb-4 sm:mb-6">
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-white/20 shadow-lg mb-3 sm:mb-4">
                  <Avatar
                    name="Tejas Profile"
                    src="https://files.catbox.moe/uvfpfd.jpg"
                    className="w-full h-full text-large brightness-90"
                  />
                </div>
                <h1 className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">{fullName}</h1>
                <div className="text-base sm:text-lg text-white/90 font-medium">{profession}</div>
              </div>
              <div className="flex justify-center gap-4 sm:gap-6 mb-4 sm:mb-6">
                <SocialLinks />
              </div>
              <a
                href="/resume.pdf"
                download
                className="flex items-center justify-center gap-2 w-full bg-white/20 backdrop-blur-md text-white py-2.5 sm:py-3 rounded-full hover:bg-white/30 transition-all text-sm sm:text-base font-medium shadow-lg"
              >
                <FaDownload className="text-base sm:text-lg" />
                Download Resume
              </a>
            </div>
          </div>
        </div>

        {/* Who Am I - Mobile */}
        <Card className="lg:hidden col-span-full opacity-0 mobile-animation whoAmICard">
          <CardBody className="gap-3 p-4 sm:p-6">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div className="text-xl sm:text-2xl font-bold">Who am I?</div>
            </div>
            <div className="text-sm sm:text-base text-gray-400 leading-relaxed pl-10 sm:pl-13">{whoAmI}</div>
          </CardBody>
        </Card>

        {/* Technologies - Mobile */}
        <Card className="lg:hidden col-span-full opacity-0 mobile-animation technologyIconList">
          <CardBody className="gap-3 p-4 sm:p-6">
            <div className="flex items-center gap-2 sm:gap-3 mb-2">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold">Technologies</h2>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 sm:gap-3">
              {techonologyIconList.map(({ name, icon, color }) => (
                <Tooltip key={`technology-item-${name}`} content={name}>
                  <div className="flex flex-col items-center gap-1.5 sm:gap-2 p-2 sm:p-3 rounded-lg sm:rounded-xl bg-blue/5 hover:bg-blue/10 transition-all hover:scale-105">
                    <IconComponent icon={icon} color={color} />
                    <span className="text-[10px] sm:text-xs font-medium">{name}</span>
                  </div>
                </Tooltip>
              ))}
            </div>
          </CardBody>
        </Card>

        {/* Professional Highlights - Mobile */}
        <Card className="lg:hidden col-span-full opacity-0 mobile-animation highlightContent">
          <CardBody className="gap-3 p-4 sm:p-6">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold">Professional Highlights</h2>
            </div>
            <div className="flex flex-col gap-3 sm:gap-4 pl-10 sm:pl-13">
              {highlightsList.map((highlight: highlightsType) => (
                <Highlights
                  key={`highlight-item-${highlight.highlight}`}
                  highlight={highlight.highlight}
                  years={highlight.years}
                  description={highlight.description}
                />
              ))}
            </div>
          </CardBody>
        </Card>

        {/* Desktop Layout - Unchanged */}
        {/* Avatar Card */}
        <Card className="hidden lg:block col-span-full lg:row-start-2 lg:row-span-2 lg:col-start-2 lg:col-span-1">
          <CardBody className="flex-col items-center justify-center gap-4">
            <Avatar
              name="Tejas Profile"
              src="https://files.catbox.moe/uvfpfd.jpg"
              className="w-24 h-24 text-large brightness-90"
            />
            <h1 className="text-4xl font-bold">{fullName}</h1>
            <div className="text-xl text-blue/80">{profession}</div>
            <SocialLinks />
            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 px-4 py-2 bg-blue text-white rounded-full hover:bg-blue/90 transition-colors"
            >
              <FaDownload />
              Download Resume
            </a>
          </CardBody>
        </Card>

        {/* Who Am I */}
        <Card className="hidden lg:block col-span-full lg:row-start-1 lg:row-span-1 lg:col-span-2 opacity-0 mobile-animation whoAmICard">
          <CardBody className="gap-2">
            <div className="text-3xl font-bold">Who am I?</div>
            <div className="text-lg text-gray-400">{whoAmI}</div>
          </CardBody>
        </Card>

        {/* Profession */}
        <Card className="hidden lg:block col-span-full lg:row-start-2 lg:col-start-1 lg:col-span-1 bg-blue opacity-0 mobile-animation professionCard">
          <CardBody className="h-full flex items-center justify-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-center">
              {profession}
            </h2>
          </CardBody>
        </Card>

        {/* Quote */}
        <Card className="hidden lg:flex col-span-2 lg:row-start-3 lg:row-span-1 lg:col-start-3 lg:col-span-1 bg-blue opacity-0 mobile-animation quoteCard">
          <CardBody className="justify-center items-center">
            <div className="text-3xl font-bold text-center">
              &#34;{quote}&#34;
            </div>
          </CardBody>
        </Card>

        {/* Technologies */}
        <Card className="hidden lg:block col-span-full lg:row-start-3 lg:row-span-2 lg:col-start-1 lg:col-span-1 opacity-0 mobile-animation technologyIconList">
          <CardBody className="gap-4">
            <h2 className="text-3xl font-bold">
              Technologies I have worked with:
            </h2>
            <div className="flex flex-wrap justify-center lg:justify-center gap-x-10 gap-y-6">
              {techonologyIconList.map(({ name, icon, color }) => (
                <Tooltip key={`technology-item-${name}`} content={name}>
                  <IconComponent icon={icon} color={color} />
                </Tooltip>
              ))}
            </div>
          </CardBody>
        </Card>

        {/* Vertical Image */}
        <div className="hidden lg:block lg:row-start-1 lg:row-span-2 lg:col-start-3 lg:h-[350px] rounded-xl relative opacity-0 mobile-animation verticalImage">
          <Image
            src="https://images.unsplash.com/photo-1502581827181-9cf3c3ee0106?q=80&w=1576&auto=format&fit=crop"
            priority={true}
            alt="profile image"
            fill
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        {/* Professional Highlights */}
        <Card className="hidden lg:block col-span-full lg:row-start-4 lg:row-span-1 lg:col-start-2 lg:col-span-2 opacity-0 mobile-animation highlightContent">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="hidden lg:block icon icon-tabler icon-tabler-timeline absolute top-0 -right-7"
            width="200"
            height="200"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="#232323"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M4 16l6 -7l5 5l5 -6"></path>
            <path d="M15 14m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
            <path d="M10 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
            <path d="M4 16m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
            <path d="M20 8m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
          </svg>
          <CardBody className="gap-2">
            <h2 className="text-3xl font-bold">Professional Highlights</h2>
            <div className="flex flex-col gap-2">
              {highlightsList.map((highlight: highlightsType) => (
                <Highlights
                  key={`highlight-item-${highlight.highlight}`}
                  highlight={highlight.highlight}
                  years={highlight.years}
                  description={highlight.description}
                />
              ))}
            </div>
          </CardBody>
        </Card>
      </div>
    </main>
  );
}
