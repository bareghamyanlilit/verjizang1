"use client";

import Image from "next/image";
import { TimeBox } from "./TimeBox";
import { Calendar } from "./Calendar";
import { Program } from "./Program";
import { MusicPlayer } from "./music";
import { useState } from "react";
import { FaMusic } from "react-icons/fa";
import { motion } from "framer-motion";
import { anim } from "@/data/data";

export function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div>
      {/* music button */}
      <div>
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="fixed z-10 text-2xl  rounded-2xl bg-[#1e1e1e] opacity-95 text-[#fdf8f5] right-7 top-7 w-15  h-15 flex justify-center items-center"
        >
          <FaMusic />
        </button>

        <MusicPlayer isPlaying={isPlaying} />
      </div>

      <div
        className="FontArmAllegroU tracking-0 h-screen bg-cover bg-center flex flex-col justify-between text-white p-7 text-3xl"
        style={{ backgroundImage: "url('/img1.jpg')" }}
      >
        <div>
          <p className="max-inline-min">Ավարտական Հանդես</p>
          <h1 className="FontArmDecorativeU text-[#F8F8F836] mt-7 text-8xl max-inline-min ">
            12 Ա
          </h1>
        </div>
        <p className="text-end">Վերջին զանգ</p>
      </div>

      <div className="FontArmDecorativeU italic text-center py-7 bg-[#EFEFEF]">
        <motion.h3 {...anim} className="text-xl px-7 mt-3">
          Ամեն սկիզբ ունի ավարտ, <br />
          Ամեն ավարտ մի նոր սկիզբ է․․․
        </motion.h3>
        <Image
          src="/icon1.png"
          alt="icon1"
          width={500}
          height={500}
          className="w-full"
        />
        <motion.h3 {...anim} className="text-2xl px-7">Մեր միջոցառմանը մնաց</motion.h3>
        <TimeBox />
      </div>

      <motion.p {...anim} className="FontArmDecorativeU italic text-xl p-7 text-center">
        Սիրով հրավիրում ենք Ձեզ <br /> ներկա գտնվելու մեր <br /> ՎԵՐՋԻՆ ԶԱՆԳ{" "}
        <br />
        հանդիսավոր միջոցառմանը։
        <br /> 23 Մայիսի, 2026 <br /> Ժամը՝ 10:00 <br /> Մեր հարազատ դպրոցում
      </motion.p>

<div className="p-7 bg-[#EFEFEF]">

      <Image
        src="/img2.jpg"
        alt="icon1"
        width={500}
        height={500}
        className=" w-full rounded-2xl "
        />
        </div>

      <div className="FontArmDecorativeU text-xl italic p-7 grid gap-2">
        <motion.p {...anim} className="text-center">Սիրով սպասում ենք</motion.p>
        <hr className="w-40 my-4 m-auto" />
        <motion.p {...anim} className="text-center">Պահպանիր Օրը</motion.p>
        <Calendar year={2026} month={3} highlightDay={20} />
      </div>

      <Program />
    </div>
  );
}
