import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GsapFromTo = () => {
  useGSAP(() => {
    gsap.fromTo(
      "#red-box",
      {
        x: 0,
        rotation: 0,
        borderRadius: "0%",
      },
      {
        x: 170,
        y: -70,
        repeat: -2,
        yoyo: true,
        rotate: 660,
        borderRadius: "60%",
        duration: 2,
        scale: 3,
        ease: "power1.inOut",
      }
    );
  }, []);
  return (
    <div className="mt-20">
      <div id="red-box" className="w-20 h-20 bg-red-500 rounded-lg">
        .
      </div>
    </div>
  );
};

export default GsapFromTo;
