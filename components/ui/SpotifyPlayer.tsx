"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play, Pause } from "lucide-react";
import { cn } from "@/lib/cn";

export function SpotifyPlayer() {
  const [playing, setPlaying] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const toggle = () => {
    if (!iframeRef.current) return;
    try {
      iframeRef.current.contentWindow?.postMessage(
        { command: playing ? "pause" : "play" },
        "https://open.spotify.com"
      );
    } catch {}
    setPlaying(!playing);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Hidden Spotify embed */}
      <iframe
        ref={iframeRef}
        src="https://open.spotify.com/embed/track/0UqHzMvRQnaOXEPKgFVhxN?utm_source=generator&theme=0"
        width="0"
        height="0"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media"
        loading="lazy"
        className="absolute opacity-0 pointer-events-none"
      />

      {/* Play/Pause button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggle}
        className={cn(
          "flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300",
          playing
            ? "bg-accent text-background"
            : "bg-surface border border-line text-foreground hover:border-muted"
        )}
        aria-label={playing ? "Pause" : "Play"}
      >
        {playing ? <Pause size={18} /> : <Play size={18} />}
      </motion.button>
    </div>
  );
}
