import React from "react";
import ScrollBirthdayGift from "./ScrollBirthdayGift";
import MemoriesSection from "./MemoriesSection";
import ReasonsSection from "./ReasonsSection"; 

export const App = () => {
  return (
    <main className="relative bg-[#fce7e9] selection:bg-pink-200 overflow-x-hidden">
      {/* 1. The Video Reveal */}
      <ScrollBirthdayGift />

      {/* 2. The Photo Gallery (Middle) */}
      <section className="w-full min-h-screen">
        <MemoriesSection />
      </section>

      {/* 3. The 30 Reasons (Pinned Scroll) */}
      <ReasonsSection />

      {/* 4. The Final Message */}
      {/* Changed h-screen to min-h-screen and added responsive padding */}
      <footer className="min-h-screen bg-stone-950 flex flex-col items-center justify-center py-20 px-6 md:px-12 lg:px-24">
        
        <div className="max-w-4xl w-full space-y-8 text-center">
          {/* Quote Section */}
          <p className="text-stone-400 text-xl md:text-2xl lg:text-3xl font-serif italic mb-4">
            "To the one who has been there since day one."
          </p>
          
          {/* Main Letter - Responsive Text Sizes */}
          <div className="font-serif text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-stone-300 italic space-y-6 md:space-y-8">
            <p>
              Growing up with you has been the greatest privilege of my life. From the
              trouble we used to get into as kids to our adult dreams, you’ve been the
              one constant that makes everything else make sense.
            </p>
            <p>
              I don't say it enough, but I am so incredibly proud of the woman you are becoming.
              You carry so much light in your heart, and I’m lucky enough to be the person
              who gets to walk beside you. You may not be my sister by blood, but you are
              absolutely my sister by choice.
            </p>
            <p>
              No matter where life takes us, remember that my door (and my heart) is always
              open for you. I’ll always be your protector, your listener, and your biggest fan.
            </p>
          </div>
        </div>

        {/* Closing Emoji Section - Responsive Width & Leading */}
        <div className="mt-16 text-center max-w-2xl border-t border-stone-800 pt-8">
          <p className="text-stone-500 text-[10px] sm:text-xs tracking-[0.15em] md:tracking-[0.3em] uppercase leading-loose">
            With love, always.<br/>
            I hope this gift brings you joy and reminds you how much you are loved.<br/>
            <span className="text-stone-400 text-sm block my-2">
              Happy Birthday, my World 🎉🌠🌄☁️🧿🐒🦧💓💞☀️⭐🫂🌍
            </span>
            I can't wait to see what the next chapter holds for you. Here's to many more years of laughter, love, and unforgettable memories together.<br/>
            I love you more than words can express, and I'm so grateful to have you in my life. <br/>
            <span className="text-stone-300 font-bold mt-2 block text-sm sm:text-base">
              Happy Birthday, Sis! 🎂🎉
            </span>
          </p>
        </div>
      </footer>
    </main>
  );
};