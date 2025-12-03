"use client";

import { useEffect } from "react";

export default function InstagramFeed() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section className="bg-white px-6 text-center">
      <h2 className="text-2xl md:text-3xl text-black font-serif font-medium py-5">
        <a
          href="https://www.instagram.com/mavemedicalspa"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          @mavemedicalspa
        </a>
      </h2>
      <p className="text-gray-600 mb-6">
        Follow us on Instagram to stay up to date and see the latest trends.
      </p>

      <div
        className="elfsight-app-aaeae60b-b880-4154-b707-c3372df8a845"
        data-elfsight-app-lazy
      ></div>
    </section>
  );
}