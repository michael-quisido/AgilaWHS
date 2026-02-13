import Link from "next/link";
import Image from "next/image";
import React from "react";
import Particles from "./components/particles";


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <div className="absolute top-6 left-6">
        <Image
          src="/agila-whs-final.png"
          alt="Logo"
          width={260}
          height={0}
          sizes="(max-width: 640px) 180px, (max-width: 768px) 220px, 260px"
          className="object-contain h-auto w-[100px] sm:w-[180px] md:w-[220px] lg:w-[260px] animate-fade-in-slow"
          unoptimized
        />
      </div>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <h1 className="py-3.5 px-0.5 z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        AGILA WHS
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-sm text-zinc-500 ">
          Your Web Hosting Solution. We provide reliable and secure web hosting services to help you establish your online presence with ease. <br /> Agila WHS is funded and owned by KMCQ Company.
        </h2>
      </div>
    </div>
  );

}