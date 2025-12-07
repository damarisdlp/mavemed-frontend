"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslation } from "next-i18next";
import Link from "next/link";

export default function InstagramFeed() {
  const { t, ready } = useTranslation("home");
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const res = await fetch("/api/instagram");
        const data = await res.json();
        if (!res.ok) {
          setError(data?.error || data?.detail || "Error loading feed");
          return;
        }
        if (!Array.isArray(data?.data) || data.data.length === 0) {
          setError("No posts available right now.");
          return;
        }
        const filtered = data.data.filter(
          (item) =>
            item.media_type === "IMAGE" ||
            item.media_type === "CAROUSEL_ALBUM" ||
            item.media_type === "VIDEO"
        );
        setPosts(filtered);
      } catch (err) {
        setError("Error loading feed");
      }
    };
    loadPosts();
  }, []);

  if (!ready) return null;

  const scroll = (direction) => {
    if (!sliderRef.current) return;
    const cardWidth = sliderRef.current.firstChild?.getBoundingClientRect().width || 260;
    sliderRef.current.scrollBy({
      left: direction * (cardWidth + 12),
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-white px-6 text-center">
      <h2 className="text-2xl md:text-3xl text-black font-serif font-medium py-3 flex items-center justify-center gap-2">
        <span>{t("instagram.title")}</span>
      </h2>
      <p className="text-gray-600 mb-3">{t("instagram.subtitle")}</p>
      <p className="text-gray-600 mb-3">
        <a
          href="https://www.instagram.com/mavemedicalspa"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          @mavemedicalspa
        </a>
      </p>

      {posts.length > 0 ? (
        <div className="relative">
          <div
            ref={sliderRef}
            className="flex gap-3 md:gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-2"
          >
          {posts.map((post) => {
            const imageSrc =
              post.media_type === "VIDEO" ? post.thumbnail_url || post.media_url : post.media_url;
            return (
                <a
                  key={post.id}
                  href={post.permalink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex-shrink-0 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/4 xl:basis-1/5 min-w-[160px] max-w-[260px] snap-start block overflow-hidden rounded-lg border border-gray-200 hover:shadow-md transition"
                >
                  <div className="aspect-[3/4] bg-gray-100 relative">
                    <img
                      src={imageSrc}
                      alt={post.caption || "Instagram post"}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/55 opacity-0 group-hover:opacity-100 transition flex flex-col justify-end p-3 text-left text-white">
                      <div className="text-sm mb-1">
                        ❤️ {post.like_count ?? "—"}
                      </div>
                      <div className="text-sm line-clamp-5">
                        {post.caption || ""}
                      </div>
                    </div>
                  </div>
                </a>
            );
          })}
          </div>
        </div>
      ) : (
        <div className="text-sm text-gray-500">
          {error ? (
            <p>
              {t("instagram.error", { defaultValue: "Unable to load Instagram feed right now." })}
              {typeof error === "string" ? ` (${error})` : null}
            </p>
          ) : (
            <p>{t("instagram.loading", { defaultValue: "Loading feed..." })}</p>
          )}
        </div>
      )}
    </section>
  );
}
