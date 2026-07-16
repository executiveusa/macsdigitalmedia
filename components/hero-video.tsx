"use client";

import { useEffect, useRef, useState } from "react";
import { useSitePreferences } from "@/components/site-preferences";

const videoSource =
  "https://www.macsdigitalmedia.com/wp-content/uploads/2025/04/6015791_Business_Office_1280x720.webm";
const posterSource = "/media/macs-hero-poster.svg";

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { copy } = useSitePreferences();
  const [playing, setPlaying] = useState(false);
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReduceMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);
    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (reduceMotion || failed) {
      video.pause();
      return;
    }

    if (ready) {
      void video.play().catch(() => setPlaying(false));
    }
  }, [failed, ready, reduceMotion]);

  function togglePlayback() {
    const video = videoRef.current;
    if (!video || reduceMotion || failed) return;

    if (video.paused) {
      void video.play().catch(() => setPlaying(false));
    } else {
      video.pause();
    }
  }

  const videoHidden = reduceMotion || failed || !ready;

  return (
    <>
      <div className="hero__poster" aria-hidden="true" />
      <video
        id="macs-hero-video"
        ref={videoRef}
        className={`hero__video${videoHidden ? " hero__video--hidden" : ""}`}
        autoPlay={!reduceMotion}
        muted
        loop
        playsInline
        preload={reduceMotion ? "none" : "metadata"}
        poster={posterSource}
        aria-hidden="true"
        onCanPlay={() => {
          setReady(true);
          setFailed(false);
        }}
        onError={() => {
          setFailed(true);
          setReady(false);
          setPlaying(false);
        }}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      >
        <source src={videoSource} type="video/webm" />
      </video>

      {!reduceMotion && !failed ? (
        <button
          className="hero-video-control"
          type="button"
          aria-controls="macs-hero-video"
          aria-pressed={!playing}
          onClick={togglePlayback}
        >
          <span className="hero-video-control__icon" aria-hidden="true">
            {playing ? "Ⅱ" : "▶"}
          </span>
          <span>{playing ? copy.common.pauseVideo : copy.common.playVideo}</span>
        </button>
      ) : null}

      {failed ? (
        <span className="sr-only" role="status">
          {copy.common.videoUnavailable}
        </span>
      ) : null}
    </>
  );
}
