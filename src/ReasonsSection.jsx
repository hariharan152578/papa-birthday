import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const reasons = [
  "You've been my built-in best friend since the very beginning.",
  "You're the only person who truly understands our family's 'crazy'.",
  "You still remember the childhood stories I've long forgotten.",
  "No matter how much we argue, I know you always have my back.",
  "You've seen me at my worst and still think I'm the best.",
  "You were my first-ever partner in crime.",
  "You listen to my rants without ever judging me.",
  "You’ve become the person I look up to, even if I'm taller now.",
  "You make home feel like home, no matter where we are.",
  "You're the keeper of all our childhood secrets.",
  "You always know exactly what I’m thinking with just a look.",
  "You’ve taught me more about kindness than anyone else.",
  "You still laugh at my terrible jokes.",
  "You're the first person I want to call when something big happens.",
  "You believe in me even when I don’t believe in myself.",
  "You've protected me in ways I probably don't even know.",
  "Growing up with you was the greatest adventure of my life.",
  "You bring out the softer, better side of me.",
  "You're the bridge between our past and our future.",
  "You remember the little details that matter to me.",
  "Even when we're miles apart, we're never truly separated.",
  "You’ve handled my moods with more patience than I deserve.",
  "You're the strongest person I know.",
  "You make the hard times feel a little bit lighter.",
  "You are the most honest person in my life.",
  "Life is just better knowing I have a sister like you.",
  "You are my oldest friend and my forever protector.",
  "You make me proud to be your brother every single day.",
  "To the world you are a sister, but to me you are the whole world.",
  "Simply put, I wouldn't be who I am today without you."
];

const ReasonsSection = () => {
  const sectionRef = useRef();
  const progressRef = useRef();

  useGSAP(() => {
    const cards = gsap.utils.toArray(".reason-item");

    // Main Scroll Timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: `+=${reasons.length * 200}%`,
        pin: true,
        scrub: 1.2,
      }
    });

   cards.forEach((card, i) => {
      const number = card.querySelector(".reason-num");
      const text = card.querySelector(".reason-text");

      tl.fromTo(card, 
        { 
          y: 100, 
          opacity: 0, 
          scale: 0.9, 
          filter: "blur(15px)",
          visibility: "hidden" // Ensure it's hidden before animation
        },
        { 
          y: 0, 
          opacity: 1, 
          scale: 1, 
          filter: "blur(0px)",
          visibility: "visible",
          duration: 1,
          ease: "power3.out"
        }
      )
      .from([number, text], {
        y: 20,
        opacity: 0,
        stagger: 0.1, // Slightly faster stagger for better flow
        duration: 0.5
      }, "-=0.6")
      // Hold: The duration here determines how long the text stays readable
      .to(card, { opacity: 1, duration: 2 }) 
      .to(card, {
        y: -100,
        opacity: 0,
        scale: 1.05,
        filter: "blur(10px)",
        duration: 1,
        ease: "power3.in",
        visibility: "hidden" // Hide again after it leaves
      });
    });

    // Animate the progress bar based on scroll
    gsap.to(progressRef.current, {
      scaleX: 1,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: `+=${reasons.length * 200}%`,
        scrub: 0.5,
      }
    });
  }, { scope: sectionRef });

  return (
    <section 
      ref={sectionRef} 
      className="relative h-screen w-full bg-[#fce7e9] overflow-hidden flex items-center justify-center"
    >
{/* Background Subtle Text Update */}
<div className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none text-center">
  <h1 className="text-[25vw] font-serif italic text-white leading-none">
    Sister
  </h1>
</div>

      {/* Cards Container */}
      <div className="relative w-[90%] max-w-2xl h-96 flex items-center justify-center">
        {reasons.map((reason, i) => (
          <div
            key={i}
            className="reason-item absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-0"
          >
            <span className="reason-num text-pink-500/40 font-serif italic text-3xl md:text-5xl mb-6">
              {i + 1 < 10 ? `0${i + 1}` : i + 1}
            </span>
            <h3 className="reason-text text-pink-500 text-2xl md:text-4xl font-serif leading-relaxed tracking-tight">
              "{reason}"
            </h3>
            
            {/* Aesthetic flourish */}
            <div className="mt-10 flex gap-2">
                {[...Array(3)].map((_, dot) => (
                    <div key={dot} className="w-1 h-1 rounded-full bg-stone-700" />
                ))}
            </div>
          </div>
        ))}
      </div>
      {/* Grainy Texture Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </section>
  );
};

export default ReasonsSection;