"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { heroVideo } from "@/lib/images";

/**
 * Muted, looping landscape footage. The poster (the clip's first frame) renders
 * immediately; the video fades in once it can play. Not loaded at all for
 * reduced-motion or data-saver visitors.
 */
export function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData;
    if (reduced || saveData) return;

    video.src = window.innerWidth >= 768 ? heroVideo.desktop : heroVideo.mobile;
    video.defaultPlaybackRate = video.playbackRate = 0.8; // slower, calmer drift
    const play = () => {
      if (document.visibilityState === "visible") video.play().catch(() => {});
    };
    play();
    document.addEventListener("visibilitychange", play);
    return () => document.removeEventListener("visibilitychange", play);
  }, []);

  return (
    <>
      <Image
        src={heroVideo.poster.src}
        alt={heroVideo.poster.alt}
        fill
        preload
        quality={80}
        sizes="100vw"
        className="object-cover object-center"
      />
      <video
        ref={ref}
        muted
        loop
        playsInline
        autoPlay
        preload="none"
        aria-hidden
        onPlaying={() => setReady(true)}
        onTimeUpdate={ready ? undefined : () => setReady(true)}
        className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-[1500ms] ${
          ready ? "opacity-100" : "opacity-0"
        }`}
      />
    </>
  );
}
