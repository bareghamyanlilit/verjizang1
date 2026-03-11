import { program } from "@/data/data";
import Image from "next/image";
import { CiLocationOn } from "react-icons/ci";

export function Program() {
  return (
    <section className="p-7">
      {program.map((item, i) => (
        <ProgramItem key={i} {...item} />
      ))}
    </section>
  );
}

const ProgramItem = ({ time, title, address, img }: any) => {
  return (
    <div className="FontArmDecorativeU italic my-8 flex flex-col items-center text-2xl text-center">
      <h3 >{title}</h3>
      <p>{time}</p>

      <Image
        src="/icon3.png"
        alt="icon3"
        width={500}
        height={500}
        className=" w-25 -rotate-90 m-7"
      />

      <Image
        src={img}
        alt="icon1"
        width={500}
        height={500}
        className="w-full rounded-2xl"
      />

      {address != "" && (
        <a
          href={`https://www.google.com/maps/search/${address}`}
          target="_blank"
          className="inline-flex items-center gap-2 mt-2 px-4 py-1.5 text-sm underline"
        >
          <CiLocationOn />
          Քարտեզ
        </a>
      )}
    </div>
  );
};
