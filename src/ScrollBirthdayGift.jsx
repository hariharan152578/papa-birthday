 import React, { useEffect, useRef } from "react";

import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";



gsap.registerPlugin(ScrollTrigger);



const ScrollBirthdayGift = () => {

const containerRef = useRef(null);

const videoRef = useRef(null);

const textRef = useRef(null);



useEffect(() => {

const video = videoRef.current;

if (!video) return;



// Ensure video is ready

const setupAnimation = () => {

if (!video.duration) return;



const tl = gsap.timeline({

scrollTrigger: {

trigger: containerRef.current,

start: "top top",

end: "+=4000", // Increased for a more luxurious scroll feel

scrub: 1, // Smooths out the "choppiness" of video seeking

pin: true,

anticipatePin: 1,

},

});



// 1. Scrub video from start to finish

tl.to(video, {

currentTime: video.duration,

ease: "none",

duration: 2,

});



// 2. Reveal Birthday text (starts slightly before video ends)

tl.to(textRef.current, {

opacity: 1,

y: -40,

scale: 1,

duration: 0.5,

ease: "back.out(1.7)",

}, "-=0.3");



// 3. Final Fade out to transition to the next section

tl.to([video, textRef.current], {

opacity: 0,

scale: 0.95,

filter: "blur(20px)",

duration: 0.4,

}, "+=0.2"); // Small pause at the end before fading

};



const ctx = gsap.context(() => {

if (video.readyState >= 2) {

setupAnimation();

} else {

video.addEventListener("loadedmetadata", setupAnimation);

}

}, containerRef);



return () => {

video.removeEventListener("loadedmetadata", setupAnimation);

ctx.revert();

};

}, []);



return (

<div className="bg-[#fce7e9]"> {/* Slightly softer pink */}

{/* Intro Section */}

<div className="h-screen flex flex-col items-center justify-center px-6 text-center">

{/* The Heartfelt Quote */}

<h1 className="text-3xl md:text-4xl font-serif italic text-[#4a4a4a] mb-4">

"To the rest of the world, she’s just a sister. <br />

<span className="text-[#e95e86] font-bold not-italic">To me, she is the whole world."</span>

</h1>

<h2 className="text-xl md:text-2xl text-gray-500 mb-8">

Happy Birthday, my World 🎉<br/>

🌠🌄☁️🧿🐒🦧💓💞☀️⭐🫂🌍

</h2>



{/* The Call to Action */}

<div className="mt-8 flex flex-col items-center gap-2">

<p className="text-[#e95e86] font-semibold animate-pulse text-sm tracking-[0.2em] uppercase">

Scroll to open your gift

</p>

<span className="text-[#e95e86] text-2xl animate-bounce">↓</span>

</div>

</div>



{/* Animation Section */}

<div

ref={containerRef}

className="relative w-full h-screen flex items-center justify-center overflow-hidden"

>

<video

ref={videoRef}

src="/video-1026342457228321.mp4"

preload="auto"

muted

playsInline

webkit-playsinline="true"

className="w-full h-full object-cover md:object-contain max-w-[1200px]"

/>



{/* Final Text Overlay */}

<div

ref={textRef}

className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none opacity-0 translate-y-10 scale-90"

>

<h1 className="text-white text-6xl md:text-9xl font-black drop-shadow-[0_10px_10px_rgba(0,0,0,0.3)] text-center leading-none">

HAPPY <br /> <span className="text-[#ff4d8d]">BIRTHDAY!</span>

</h1>



<p className="text-[#e95e86] text-xl mt-8 font-bold bg-white px-10 py-4 rounded-full shadow-2xl border-2 border-pink-200">

I HAVE A SURPRISE FOR YOU 🎁

</p>

</div>

</div>



{/* Ending Section */}

<div className="h-screen bg-white flex flex-col items-center justify-center p-10 text-center">

<h2 className="text-4xl font-bold text-pink-500 mb-4">Surprise!</h2>

<p className="text-gray-500 text-xl max-w-md">

You've reached the end of the reveal. Check your inbox for the actual tickets!

</p>

</div>

</div>

);

};



export default ScrollBirthdayGift;