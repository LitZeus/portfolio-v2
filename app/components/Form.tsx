"use client";
import emailjs from "@emailjs/browser";
import React, { useState } from "react";

// Initialize EmailJS with public key
emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!);

export function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSuccess(false);

    try {
      if (!process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || !process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID) {
        throw new Error("EmailJS configuration is missing");
      }

      const formData = {
        from_name: name,
        from_email: email,
        message: message
      };

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formData
      );

      setSuccess(true);
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
      setError("Failed to send message. Please try again or contact directly via email.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mt-16">
      <h1 className="text-3xl font-bold mb-2">Let&apos;s get in touch ;)</h1>
      <p className="text-gray-400 mb-4">You can also get in touch with me through this form below.</p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 opacity-0 mobile-animation form">
        {error && (
          <div className="bg-red-500/10 border border-red-500/50 text-red-500 px-4 py-2 rounded-md text-sm">
            {error}
          </div>
        )}
        {success && (
          <div className="bg-green-500/10 border border-green-500/50 text-green-500 px-4 py-2 rounded-md text-sm">
            Message sent successfully! I&apos;ll get back to you as soon as possible.
          </div>
        )}
        <div className="relative">
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder=" "
            className="peer w-full px-4 pt-7 pb-2 bg-zinc-700/50 text-white rounded-md focus:outline-none transition-all duration-300 ease-in-out hover:bg-zinc-600/50 focus:bg-zinc-600/50"
          />
          <label
            htmlFor="name"
            className="absolute text-base left-4 top-4 text-gray-400 transition-all duration-300 ease-in-out 
            peer-focus:text-[11px] peer-focus:top-2 peer-focus:-translate-x-1 peer-focus:text-white
            peer-[&:not(:placeholder-shown)]:text-[11px] peer-[&:not(:placeholder-shown)]:top-2 peer-[&:not(:placeholder-shown)]:-translate-x-1 peer-[&:not(:placeholder-shown)]:text-white"
          >
            Name
          </label>
        </div>

        <div className="relative">
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder=" "
            className="peer w-full px-4 pt-7 pb-2 bg-zinc-700/50 text-white rounded-md focus:outline-none transition-all duration-300 ease-in-out hover:bg-zinc-600/50 focus:bg-zinc-600/50"
          />
          <label
            htmlFor="email"
            className="absolute text-base left-4 top-4 text-gray-400 transition-all duration-300 ease-in-out 
            peer-focus:text-[11px] peer-focus:top-2 peer-focus:-translate-x-1 peer-focus:text-white
            peer-[&:not(:placeholder-shown)]:text-[11px] peer-[&:not(:placeholder-shown)]:top-2 peer-[&:not(:placeholder-shown)]:-translate-x-1 peer-[&:not(:placeholder-shown)]:text-white"
          >
            Email
          </label>
        </div>

        <div className="relative">
          <label
            htmlFor="message"
            className="absolute text-[13px] left-4 top-1.5 text-gray-400"
          >
            Message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={6}
            className="w-full px-4 pt-6 pb-3 bg-zinc-700/50 text-white rounded-md focus:outline-none resize-none transition-all duration-300 ease-in-out hover:bg-zinc-600/50 focus:bg-zinc-600/50"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3 bg-zinc-700/50 text-white rounded-md transition-all duration-300 ease-in-out hover:bg-zinc-600/50 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}