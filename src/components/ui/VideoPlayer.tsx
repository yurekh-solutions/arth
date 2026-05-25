"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import Image from "next/image";

interface VideoPlayerProps {
  videoUrl: string;
  thumbnail: string;
  title?: string;
  className?: string;
}

export default function VideoPlayer({
  videoUrl,
  thumbnail,
  title,
  className = "",
}: VideoPlayerProps) {
  const [playing, setPlaying] = useState(false);

  // Convert YouTube URLs to embed format
  const getEmbedUrl = (url: string) => {
    if (url.includes("youtube.com/watch")) {
      const id = new URL(url).searchParams.get("v");
      return `https://www.youtube.com/embed/${id}?autoplay=1`;
    }
    if (url.includes("youtu.be/")) {
      const id = url.split("youtu.be/")[1]?.split("?")[0];
      return `https://www.youtube.com/embed/${id}?autoplay=1`;
    }
    if (url.includes("vimeo.com/")) {
      const id = url.split("vimeo.com/")[1]?.split("?")[0];
      return `https://player.vimeo.com/video/${id}?autoplay=1`;
    }
    return url;
  };

  return (
    <div className={`glass-card overflow-hidden rounded-2xl ${className}`}>
      {!playing ? (
        <div className="relative aspect-video cursor-pointer group" onClick={() => setPlaying(true)}>
          <Image
            src={thumbnail}
            alt={title || "Video thumbnail"}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/30 transition-colors" />

          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-accent/90 flex items-center justify-center shadow-glass-glow group-hover:scale-110 transition-transform">
              <Play className="w-7 h-7 md:w-8 md:h-8 text-primary ml-1" fill="currentColor" />
            </div>
          </div>

          {/* Title */}
          {title && (
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-white font-medium text-sm md:text-base">{title}</p>
            </div>
          )}
        </div>
      ) : (
        <div className="relative aspect-video">
          <iframe
            src={getEmbedUrl(videoUrl)}
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={title || "Video player"}
          />
        </div>
      )}
    </div>
  );
}
