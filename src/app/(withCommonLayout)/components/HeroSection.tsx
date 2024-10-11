import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <header className="mx-auto flex max-w-7xl">
      {/* info */}
      <div className="flex w-[55%] flex-col justify-center">
        <h2 className="text-5xl font-medium text-slate-700">Main HeadLine</h2>
        <h2 className="mt-3 text-3xl font-medium text-slate-700">
          2nd HeadLine
        </h2>
        <p className="my-10 leading-7 text-slate-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A dolores,
          maiores repudiandae fuga suscipit vel delectus voluptas, mollitia
          consectetur in ducimus eaque eos. Eius harum consequuntur cum
          distinctio, maxime quibusdam?
        </p>
        <div className="space-x-5">
          <Button>Button1</Button>
          <Button variant="outline">Button2</Button>
        </div>
      </div>
      {/* image */}
      <div className="w-[45%]">
        <Image src="/hero.svg" alt="" height={500} width={600} />
      </div>
    </header>
  );
};

export default HeroSection;
