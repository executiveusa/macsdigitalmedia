"use client";

import { useEffect, useRef, useState } from "react";

const videoSource =
  "https://www.macsdigitalmedia.com/wp-content/uploads/2025/04/6015791_Business_Office_1280x720.webm";

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const video = videoRef.current;

    if (mediaQuery.matches && video) {
      video.pause();
      setPlaying(false);
    }
  }, []);

  function togglePlayback() {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      void video.play();
    } else {
      video.pause();
    }
  }

  return (
    <>
      <video
        id="macs-hero-video"
        ref={videoRef}
        className="hero__video"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      >
        <source src={videoSource} type="video/webm" />
      </video>
      <button
        className="hero-video-control"
        type="button"
        aria-controls="macs-hero-video"
        aria-pressed={!playing}
        onClick={togglePlayback}
      >
        {playing ? "Pause background video" : "Play background video"}
      </button>
    </>
  );
}
