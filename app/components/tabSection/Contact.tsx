"use client";
import { contactData } from "@/app/utils";
import { Card, CardBody } from "@heroui/card";
import { useEffect } from "react";
import contactAnimation from "../../utils/contactSectionAnimations";
import { Form } from "../Form";
import { GithubSVG, LinkedInSVG, MailSVG } from "../ui/icons";

export const Contact = () => {
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    if (!mq.matches) return contactAnimation.mobileAnimation();

    contactAnimation.emailAnimation();
    contactAnimation.githubAnimation();
    contactAnimation.linkedInAnimation();
    contactAnimation.formAnimation();
  }, []);

  return (
    <div className="flex flex-col gap-6">
      <Card className="opacity-0 mobile-animation contactCard">
        <CardBody className="gap-4">
          <div className="text-3xl font-bold">Get in Touch</div>
          <div className="text-lg text-gray-400">
            Let&apos;s connect! Feel free to reach out for collaborations or just a friendly chat.
          </div>
        </CardBody>
      </Card>

      <Card className="opacity-0 mobile-animation contactFormCard">
        <CardBody className="gap-4">
          <Form />
        </CardBody>
      </Card>

      <Card className="opacity-0 mobile-animation contactLinksCard">
        <CardBody className="gap-4">
          <div className="text-3xl font-bold">Connect with Me</div>
          <div className="flex flex-wrap gap-4">
            <a
              href={`mailto:${contactData.email}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue hover:text-blue/80 transition-colors"
            >
              <MailSVG />
              <span>Email</span>
            </a>
            <a
              href={contactData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue hover:text-blue/80 transition-colors"
            >
              <GithubSVG />
              <span>GitHub</span>
            </a>
            <a
              href={contactData.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue hover:text-blue/80 transition-colors"
            >
              <LinkedInSVG />
              <span>LinkedIn</span>
            </a>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};
