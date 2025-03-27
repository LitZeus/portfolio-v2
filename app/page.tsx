"use client";
import { iconType } from "@/app/types";
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
import { ScrollToTop } from "./components/ui/ScrollToTop";
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
    <main className="p-4 pb-12 max-w-6xl m-auto overflow-hidden 2xl:overflow-visible relative min-h-screen">
      <ScrollToTop />
      <div className="w-full md:w-[90%] max-w-[80%] md:max-w-[74%] mx-auto grid grid-cols-4 lg:grid-cols-3 gap-5">
        {/* Mobile Hero Section */}
        <div className="lg:hidden col-span-full flex flex-col items-center gap-6">
          <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-blue/20">
            <Avatar
              name="Tejas Profile"
              src="https://files.catbox.moe/uvfpfd.jpg"
              className="w-full h-full text-large brightness-90"
            />
          </div>
          <div className="text-center space-y-2">
            <h1 className="text-4xl font-bold">{fullName}</h1>
            <div className="text-xl text-blue/80">{profession}</div>
          </div>
          <SocialLinks />
          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-2 px-6 py-3 bg-blue text-white rounded-full hover:bg-blue/90 transition-colors"
          >
            <FaDownload />
            Download Resume
          </a>
        </div>

        {/* Who Am I - Mobile */}
        <Card className="lg:hidden col-span-full opacity-0 mobile-animation whoAmICard">
          <CardBody className="gap-4 p-6">
            <div className="text-3xl font-bold">Who am I?</div>
            <div className="text-lg text-gray-400 leading-relaxed">{whoAmI}</div>
          </CardBody>
        </Card>

        {/* Technologies - Mobile */}
        <Card className="lg:hidden col-span-full opacity-0 mobile-animation technologyIconList">
          <CardBody className="gap-4 p-4">
            <h2 className="text-2xl font-bold text-center">
              Technologies
            </h2>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
              {techonologyIconList.map(({ name, icon }: iconType) => (
                <Tooltip key={`technology-item-${name}`} content={name}>
                  <div className="flex flex-col items-center gap-1 p-2 rounded-lg bg-blue/5 hover:bg-blue/10 transition-colors">
                    <IconComponent icon={icon} />
                    <span className="text-xs font-medium">{name}</span>
                  </div>
                </Tooltip>
              ))}
            </div>
          </CardBody>
        </Card>

        {/* Professional Highlights - Mobile */}
        <Card className="lg:hidden col-span-full opacity-0 mobile-animation highlightContent">
          <CardBody className="gap-4 p-6">
            <h2 className="text-3xl font-bold">Professional Highlights</h2>
            <div className="flex flex-col gap-4">
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
          <CardBody className="justify-center items-center">
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
              Technologies I have worked with
            </h2>
            <div className="flex flex-wrap justify-center lg:justify-center gap-x-10 gap-y-6">
              {techonologyIconList.map(({ name, icon }: iconType) => (
                <Tooltip key={`technology-item-${name}`} content={name}>
                  <IconComponent icon={icon} />
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
