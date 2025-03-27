import { FormEvent, useEffect, useState } from "react";

import { Button } from "@heroui/button";
import { Input, Textarea } from "@heroui/input";
import { toast, Toaster } from "sonner";

import emailjs from '@emailjs/browser';
import { CircleCheckSVG, CircleXSVG } from "./ui/icons";

// Initialize EmailJS with your public key
emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '');

interface FormData {
  from_name: string;
  from_email: string;
  message: string;
}

export const Form = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [isInvalidName, setIsInvalidName] = useState<boolean>(false);
  const [isInvalidEmail, setIsInvalidEmail] = useState<boolean>(false);
  const [isInvalidMessage, setIsInvalidMessage] = useState<boolean>(false);

  useEffect(() => {
    if (name !== "") setIsInvalidName(false);
    if (
      email.match(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      )
    )
      setIsInvalidEmail(false);
    if (message !== "") setIsInvalidMessage(false);
  }, [name, email, message]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (name === "") setIsInvalidName(true);
    if (email === "") setIsInvalidEmail(true);
    if (message === "") setIsInvalidMessage(true);

    if (!name || !email || !message || isSubmitting) {
      return;
    }

    setIsSubmitting(true);

    try {
      const templateParams: FormData = {
        from_name: name,
        from_email: email,
        message: message,
      };

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams
      );

      setName("");
      setEmail("");
      setMessage("");
      
      toast("Message sent successfully! I'll get back to you soon.", {
        className: "my-classname",
        duration: 3000,
        icon: <CircleCheckSVG />,
      });
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to send message';
      toast(errorMessage, {
        className: "my-classname",
        duration: 3000,
        icon: <CircleXSVG />,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={(e) => handleSubmit(e)}
    >
      <h2 className="text-3xl font-bold">Let's get in touch ;)</h2>
      <p className="text-lg text-gray-400">
        You can also get in touch with me through this form below.
      </p>
      <Input
        id="name"
        type="text"
        label="Name"
        placeholder=""
        isInvalid={isInvalidName}
        value={name}
        onChange={(e) => setName(e.target.value)}
        errorMessage={isInvalidName && "Please enter your name"}
        disabled={isSubmitting}
      />
      <Input
        type="email"
        name="email"
        id="email"
        label="Email"
        placeholder=""
        isInvalid={isInvalidEmail}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        errorMessage={isInvalidEmail && "Please enter a valid email"}
        disabled={isSubmitting}
      />
      <Textarea
        id="message"
        type="text"
        label="Message"
        placeholder="Enter your message here"
        minRows={4}
        isInvalid={isInvalidMessage}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        errorMessage={isInvalidMessage && "Please enter your message"}
        disabled={isSubmitting}
      />
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>

      <Toaster theme="dark" />
    </form>
  );
};
