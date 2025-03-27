"use client";
import { useEffect } from "react";

import { Card, CardBody } from "@heroui/card";

import { contactData } from "@/app/utils";
import contactAnimation from "../../utils/contactSectionAnimations";
import Form from "../Form";
import { GithubSVG, LinkedInSVG, MailSVG } from "../ui/icons";

export const Contact = () => {
  const { email, github, linkedIn } = contactData;
  const mq = window.matchMedia("(min-width: 1024px)");

  useEffect(() => {
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
            {contactData.description}
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
            {contactData.socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue hover:text-blue/80 transition-colors"
              >
                {link.name === "GitHub" ? (
                  <GithubSVG />
                ) : link.name === "LinkedIn" ? (
                  <LinkedInSVG />
                ) : (
                  <MailSVG />
                )}
                <span>{link.name}</span>
              </a>
            ))}
          </div>
        </CardBody>
      </Card>
    </div>
  );
};
