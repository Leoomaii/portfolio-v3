import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Typewriter, Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
type Props = {};

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, I'm Leo Mai!",
      "Love-solving-problems",
      "<AndAllAboutProduct/>",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-8 overflow-hidden text-center">
      <BackgroundCircles />
      <Image
        src="https://media-exp1.licdn.com/dms/image/C4D03AQHHOQUEs_Bb6Q/profile-displayphoto-shrink_800_800/0/1633324921981?e=1671062400&v=beta&t=8WyF7voQVy5FUaHo8cAwvSEe5_NrNeQ0-UQuaI1dl2o"
        height="128px"
        width="128px"
        className="relative mx-auto rounded-full object-cover"
      />
      <div className="z-20">
        <h2 className="pb-2 text-sm uppercase tracking-[15px] text-gray-500">
          Frontend Software Engineer
        </h2>
        <h1 className="px-10 text-5xl font-semibold lg:text-6xl">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#009DCF" />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="heroBtn">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroBtn">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroBtn">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroBtn">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
