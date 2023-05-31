import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

export default function Role() {

  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.create({});

  return (
    <div className="flex h-screen flex-col items-center justify-center overflow-hidden">
      <div className="flex w-full items-center justify-center space-x-20 px-10">
        <h1 className="text-heading-1 font-medium text-secondary-400 leading-tight">
        I create elevating digital experiences that connect with people through development and design.
        </h1>
      </div>
    </div>
  );
}