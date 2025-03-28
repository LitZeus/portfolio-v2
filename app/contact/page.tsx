"use client";
import Link from "next/link";
import { useEffect } from "react";

import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";

import { Form } from "@/app/components/Form";
import { GithubSVG, LinkedInSVG, MailSVG } from "@/app/components/ui/icons";
import { contactData } from "@/app/utils";
import contactAnimation from "@/app/utils/contactSectionAnimations";

export default function Contact() {
  const { email, github, linkedIn } = contactData;

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    if (!mq.matches) return contactAnimation.mobileAnimation();

    contactAnimation.emailAnimation();
    contactAnimation.githubAnimation();
    contactAnimation.linkedInAnimation();
    contactAnimation.formAnimation();
  }, []);

  return (
    <section className="p-2 sm:p-4 pb-8 sm:pb-12 w-full max-w-[95%] md:max-w-[72%] lg:max-w-full m-auto overflow-hidden 2xl:overflow-visible">
      <div className="grid grid-rows-2 grid-cols-2 gap-3 sm:gap-5 max-w-2xl mx-auto">
        <Card className="col-span-full lg:row-start-1 lg:row-span-1 lg:col-span-1 opacity-0 mobile-animation emailCard">
          <CardBody className="flex flex-row justify-center items-center gap-2 p-3 sm:p-4">
            <Button
              onClick={() =>
                (location.href = `mailto:${email}?subject=Mail from your Portfolio`)
              }
              startContent={<MailSVG />}
              className="text-sm sm:text-base"
            >
              {email}
            </Button>
          </CardBody>
        </Card>

        <Card
          isHoverable
          className="col-span-full lg:row-start-2 lg:row-span-1 lg:col-span-1 cursor-pointer opacity-0 mobile-animation linkedInCard"
        >
          <Link
            href={linkedIn}
            rel="noopener noreferrer"
            target="_blank"
            className="min-h-full flex justify-center items-center"
          >
            <CardBody
              className="flex justify-center items-center p-3 sm:p-4"
              onClick={() => window.open(`${linkedIn}`, "_blank")}
            >
              <div className="w-6 h-6 sm:w-8 sm:h-8">
                <LinkedInSVG />
              </div>
            </CardBody>
          </Link>
        </Card>

        <Card
          isHoverable
          className="col-span-full lg:row-start-1 lg:row-span-2 lg:col-start-2 cursor-pointer opacity-0 mobile-animation githubCard"
        >
          <Link
            href={github}
            rel="noopener noreferrer"
            target="_blank"
            className="min-h-full flex justify-center items-center"
          >
            <CardBody className="flex justify-center items-center gap-2 p-3 sm:p-4">
              <div className="w-6 h-6 sm:w-8 sm:h-8">
                <GithubSVG />
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold">Github Profile</h1>
              <p className="text-base sm:text-xl text-gray-400 text-center">
                Find more of my repositories
              </p>
            </CardBody>
          </Link>
        </Card>

        <div className="col-span-full mt-6 sm:mt-8">
          <Form />
        </div>
      </div>
    </section>
  );
}