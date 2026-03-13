"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { anim } from "@/data/data";

export function Calendar({ year = 2025, month = 9, highlightDay = 8 }) {
  const weekDays = ["Երկ", "Երք", "Չրք", "Հնգ", "Ուրբ", "Շբթ", "Կիր"];

  const firstDayRaw = new Date(year, month - 1, 1).getDay();
  const firstDay = (firstDayRaw + 6) % 7;
  
  const daysInMonth = new Date(year, month, 0).getDate();

  const calendarDays = [];

  for (let i = 0; i < firstDay; i++) calendarDays.push(null);
  for (let i = 1; i <= daysInMonth; i++) calendarDays.push(i);

  return (
    <motion.div {...anim} className="FontArmAllegroU text-black text-center mt-7">
      <div className="FontArmDecorativeU grid grid-cols-7  text-base  text-black">
        {weekDays.map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-2 text-sm">
        {calendarDays.map((day, idx) =>
          day ? (
            <div
              key={idx}
              className=" relative py-2 rounded-full  text-3xl font-semibold flex items-center justify-center "
            >
              {day === highlightDay && (
                <Image
                  src="/icon2.png"
                  alt="icon1"
                  width={500}
                  height={500}
                  className="w-8 absolute -right-2 top-1 rotate-20"
                />
              )}
              <p>{day}</p>
            </div>
          ) : (
            <div key={idx}></div>
          ),
        )}
      </div>
    </motion.div>
  );
}
