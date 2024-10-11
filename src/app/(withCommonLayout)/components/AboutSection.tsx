import { Button } from "@/components/ui/button";
import Image from "next/image";
import about from "../../../../public/about.svg";

const AboutSection = () => {
  return (
    <section className="flex">
      <div className="w-[40%]">
        <Image
          src={about}
          alt=""
          height={400}
          width={416}
          className="rounded-3xl"
        />
      </div>
      <div className="flex w-[60%] flex-col justify-center">
        <p className="text-2xl font-bold text-[#101010]">About Us</p>
        <h2 className="mt-10 text-3xl font-medium text-slate-700">
          Main HeadLine
        </h2>
        <h3 className="mt-3 text-xl font-medium text-slate-700">
          2nd HeadLine
        </h3>
        <p className="my-5 leading-7 text-slate-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, dolor
          ad amet id quae, accusantium provident fugit aut voluptatibus
          voluptate vitae fuga similique beatae quasi? Facere id aliquid dicta
          quo?
        </p>
        <div className="pt-5">
          <Button>Button</Button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
