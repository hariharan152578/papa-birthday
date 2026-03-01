import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// Asset Imports
import img1 from "./assets/memories/1.jpg";
import img2 from "./assets/memories/2.jpg";
import img3 from "./assets/memories/3.jpg";
import img4 from "./assets/memories/4.jpg";
import img5 from "./assets/memories/5.jpg";
import img6 from "./assets/memories/6.jpg";
import img7 from "./assets/memories/7.jpg";
import img8 from "./assets/memories/8.jpg";
import img9 from "./assets/memories/9.jpg";
import img10 from "./assets/memories/10.jpg";
import img11 from "./assets/memories/11.jpg";

gsap.registerPlugin(ScrollTrigger);

const memories = [
  { id: 1, src: img1, label: "The day you entered my world" },
  { id: 2, src: img2, label: "Partner in crime since '95" }, // Adjust year as needed!
  { id: 3, src: img3, label: "You always had the better style" },
  { id: 4, src: img4, label: "Defending you was my first job" },
  { id: 5, src: img5, label: "Our secret handshakes and codes" },
  { id: 6, src: img6, label: "The one who knows my real story" },
  { id: 7, src: img7, label: "Through every high and every low" },
  { id: 8, src: img8, label: "My lifelong protector & friend" },
  { id: 9, src: img9, label: "The 'responsible' one (allegedly)" },
  { id: 10, src: img10, label: "Just like mom, but cooler" },
  { id: 11, src: img11, label: "To infinity and beyond, together" },
];

const MemoriesSection = () => {
  const triggerRef = useRef();
  const contentRef = useRef();

  useGSAP(() => {
    const frames = gsap.utils.toArray(".photo-card");

    gsap.set(frames, { transformPerspective: 1000, force3D: true });
    // Initial state set to hidden to allow smooth transition from Video
    gsap.set(contentRef.current, { opacity: 0, y: 30 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top top",
        end: `+=${memories.length * 1000}`,
        pin: true,
        scrub: 1,
        anticipatePin: 1,
      }
    });

    // 1. Fade in the content (The Handshake)
    tl.to(contentRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
    });

    // 2. The Stack Animation
    frames.forEach((frame, i) => {
      if (i !== frames.length - 1) {
        tl.to(frame, {
          xPercent: i % 2 === 0 ? -130 : 130,
          rotateZ: i % 2 === 0 ? -30 : 30,
          scale: 0.6,
          opacity: 0,
          duration: 2,
          ease: "power2.in"
        }, `card-${i}`)

          .from(frames[i + 1], {
            scale: 1.3,
            opacity: 0,
            z: -400,
            rotateX: -20,
            duration: 1.5,
            ease: "back.out(1.1)"
          }, `card-${i}+=0.5`);
      }
    });

    // 3. Mouse Parallax
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 40;
      const y = (clientY / window.innerHeight - 0.5) * 40;

      gsap.to(".parallax-container", {
        x, y,
        duration: 2,
        ease: "power3.out",
        overwrite: "auto"
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, { scope: triggerRef });

  return (
    <div ref={triggerRef} className="bg-[#fce7e9] relative">
      <div ref={contentRef} className="w-full h-screen overflow-hidden">

        {/* Unified Pink Glow */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-[#e95e86]/5 rounded-full blur-[120px]" />
        </div>

        <div className="parallax-container relative h-full w-full flex items-center justify-center z-10">

          {/* Typography matched to Video Section style */}
          {/* Typography update in MemoriesSection.jsx */}
          <div className="absolute top-12 left-8 md:top-20 md:left-20 z-50 pointer-events-none">
            <p className="text-[#e95e86]/60 uppercase tracking-[0.8em] text-[10px] mb-4 font-bold">
              Growing Up Together
            </p>
            <h2 className="text-white/10 text-6xl md:text-8xl font-serif italic leading-none">
              Our <br /> <span className="ml-12 md:ml-24 text-white/5">Chapters</span>
            </h2>
          </div>

          {/* Polaroid Stack */}
          <div className="relative w-[300px] h-[400px] md:w-[480px] md:h-[620px]">
            {memories.map((mem, i) => (
              <div
                key={mem.id}
                className="photo-card absolute inset-0 will-change-transform"
                style={{ zIndex: memories.length - i }}
              >
                <div className="p-4 pb-12 md:p-6 md:pb-16 bg-[#1a1a1a] border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.8)] rounded-sm">
                  <div className="relative w-full h-[280px] md:h-[480px] overflow-hidden bg-black">
                    <img
                      src={mem.src}
                      alt={mem.label}
                      className="w-full h-full object-cover sepia-[20%] brightness-75 transition-all duration-1000"
                    />
                  </div>
                  <div className="mt-6 text-center">
                    <p className="text-stone-500 font-serif text-lg italic tracking-wide">
                      {mem.label}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="absolute bottom-10 flex flex-col items-center">
            <span className="text-white/20 text-[9px] uppercase tracking-[1em] mb-4">Keep Scrolling</span>
            <div className="w-[1px] h-10 bg-gradient-to-b from-[#e95e86]/50 to-transparent" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemoriesSection;