"use client";

import Image from "next/image";
import { TimeBox } from "./TimeBox";
import { Calendar } from "./Calendar";
import { Program } from "./Program";
import { MusicPlayer } from "./music";
import { useState } from "react";
import { FaMusic } from "react-icons/fa";

export function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div>
      {/* music button */}
      <div>
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="fixed z-10 rounded-2xl bg-[#000000] text-[#fdf8f5] right-8 top-8 w-12  h-12 flex justify-center items-center"
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
        <h3 className="text-xl px-7 mt-3">
          Ամեն սկիզբ ունի ավարտ, <br />
          Ամեն ավարտ մի նոր սկիզբ է․․․
        </h3>
        <Image
          src="/icon1.png"
          alt="icon1"
          width={500}
          height={500}
          className="w-full"
        />
        <h3 className="text-2xl px-7">Մեր միջոցառմանը մնաց</h3>
        <TimeBox />
      </div>

      <p className="FontArmDecorativeU italic text-xl p-7 text-center">
        Սիրով հրավիրում ենք Ձեզ <br /> ներկա գտնվելու մեր <br /> ՎԵՐՋԻՆ ԶԱՆԳ{" "}
        <br />
        հանդիսավոր միջոցառմանը։
        <br /> 23 Մայիսի, 2026 <br /> Ժամը՝ 10:00 <br /> Մեր հարազատ դպրոցում
      </p>

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
        <p className="text-center">Սիրով սպասում ենք</p>
        <hr className="w-40 my-4 m-auto" />
        <p className="text-center">Պահպանիր Օրը</p>
        <Calendar year={2026} month={3} highlightDay={20} />
      </div>

      <Program />
    </div>
  );
}
