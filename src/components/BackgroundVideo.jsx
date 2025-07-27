import React from 'react';

export default function BackgroundVideo() {
  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      className="fixed top-0 left-0 w-full h-full object-cover z-[-1]"
    >
      <source src="/assets/228982_medium.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
