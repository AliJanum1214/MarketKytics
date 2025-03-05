import React from "react";

const HeroSec = () => {
  return (
    <section
      className="wavo-column-gap-no elementor-section elementor-top-section elementor-section-full_width elementor-section-height-min-height elementor-section-height-default elementor-section-items-middle"
      data-wavo-bg-video='{"provider":"youtube","video_id":"lRTtMcx6rSM"}'
    >
      <div className="elementor-background-video-container h-screen">
        <iframe
          className="elementor-background-video-embed h-screen"
          frameBorder="0"
          allowFullScreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          title="Rounded Neon Multicolored lines Animation Background Video | Footage | Screensaver"
          width="640"
          height="360"
          src="https://www.youtube.com/embed/lRTtMcx6rSM?controls=0&rel=0&playsinline=1&enablejsapi=1"
          id="widget2"
          style={{ width: "100%", height: "auto" }}
        ></iframe>
      </div>
    </section>
  );
};

export default HeroSec;
