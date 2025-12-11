"use client";

import "keen-slider/keen-slider.min.css";
import { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import { useTranslation } from "next-i18next";

function Stars({ value }) {
  const rating = Number(value) || 0;
  const stars = Array.from({ length: 5 }, (_, i) => i + 1 <= Math.round(rating));
  return (
    <div className="flex gap-1 text-yellow-500">
      {stars.map((filled, idx) => (
        <span key={idx}>{filled ? "★" : "☆"}</span>
      ))}
    </div>
  );
}

function ReviewCard({ review }) {
  const initials = review?.author_name
    ?.split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
  const date = review?.time
    ? new Date(review.time * 1000).toLocaleDateString()
    : "";

  return (
    <div className="border border-gray-200 rounded-lg p-4 shadow-sm bg-white">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-sm font-semibold text-gray-700">
          {initials || "G"}
        </div>
        <div className="flex flex-col text-left">
          <span className="text-sm font-semibold text-gray-900">
            {review?.author_name || "Google User"}
          </span>
          <Stars value={review?.rating} />
        </div>
      </div>
      <p className="text-sm text-gray-700 text-left line-clamp-5">
        {review?.text || ""}
      </p>
      <div className="text-xs text-gray-500 mt-2 text-left">{date}</div>
    </div>
  );
}

export default function ReviewsSection() {
  const { t } = useTranslation("home");
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [sliderRef, sliderInstanceRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1,
      spacing: 16,
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 2.2, spacing: 16 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3.1, spacing: 24 },
      },
    },
  });

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch("/api/google-reviews");
        const json = await res.json();
        if (!res.ok) {
          setError(json?.error || "Unable to load reviews.");
          return;
        }
        setData(json);
      } catch (err) {
        setError("Unable to load reviews.");
      }
    };
    load();
  }, []);

  const reviews = data?.reviews || [];
  const placeId = process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID || "";

  if (error) {
    return (
      <section className="bg-[#f7f6f2] px-6 py-10">
        <div className="max-w-6xl mx-auto text-center text-sm text-gray-500">
          {error}
        </div>
      </section>
    );
  }

  if (!data) {
    return (
      <section className="bg-[#f7f6f2] px-6 py-10">
        <div className="max-w-6xl mx-auto text-center text-sm text-gray-500">
          Loading reviews...
        </div>
      </section>
    );
  }

  return (
    <section className="bg-[#f7f6f2] px-6 py-12">
      <div className="max-w-6xl mx-auto text-center mb-8">
        <h2 className="text-2xl md:text-3xl text-black font-serif font-medium">
          {t("reviews.title", { defaultValue: "What Our Patients Say" })}
        </h2>
        <p className="text-gray-600 mt-1">
          {t("reviews.subtitle", {
            defaultValue: "Verified reviews from clients who trust us.",
          })}
        </p>
        <p className="text-gray-700 mt-2">
          {t("reviews.rating", {
            defaultValue: "Google rating {{rating}}/5 ({{total}} reviews)",
            rating: data.rating ?? "–",
            total: data.total ?? 0,
          })}
        </p>
        <div className="mt-1 text-xs text-gray-500">
          {t("reviews.powered", { defaultValue: "Powered by Google" })}
        </div>
        <div className="mt-4 flex items-center justify-center">
          <a
            href={`https://search.google.com/local/writereview?placeid=${placeId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#1a73e8] text-white text-sm font-medium px-4 py-2 rounded-full shadow hover:bg-[#155fc1] transition"
          >
            <span>G</span>
            <span>
              {t("reviews.button", {
                defaultValue: "Review us on Google",
              })}
            </span>
          </a>
        </div>
      </div>

      {reviews.length > 0 ? (
        <div className="flex justify-center">
          {/* Inner wrapper controls width and arrow positioning */}
          <div className="relative w-full max-w-[1100px]">
            <div
              ref={sliderRef}
              className="keen-slider overflow-hidden w-full"
            >
              {reviews.map((rev, idx) => (
                <div
                  key={idx}
                  className="keen-slider__slide px-2 flex justify-center"
                >
                  <div className="w-[300px] sm:w-[320px] md:w-[340px] lg:w-[360px]">
                    <ReviewCard review={rev} />
                  </div>
                </div>
              ))}
            </div>

            {reviews.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={() => sliderInstanceRef.current?.prev()}
                  className="
                    absolute
                    -left-4 md:-left-6
                    top-1/2 -translate-y-1/2
                    bg-white border border-gray-300 text-gray-700
                    rounded-full shadow px-3 py-2 hover:bg-gray-100 z-20
                  "
                >
                  ‹
                </button>
                <button
                  type="button"
                  onClick={() => sliderInstanceRef.current?.next()}
                  className="
                    absolute
                    -right-4 md:-right-6
                    top-1/2 -translate-y-1/2
                    bg-white border border-gray-300 text-gray-700
                    rounded-full shadow px-3 py-2 hover:bg-gray-100 z-20
                  "
                >
                  ›
                </button>
              </>
            )}
          </div>
        </div>
      ) : (
        <div className="text-center text-sm text-gray-500">
          No reviews available right now.
        </div>
      )}

      <div className="text-center mt-6">
        <a
          href={`https://search.google.com/local/reviews?placeid=${placeId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm underline text-black hover:text-[#731a2f]"
        >
          {t("reviews.viewAll", { defaultValue: "View all on Google" })}
        </a>
      </div>
    </section>
  );
}