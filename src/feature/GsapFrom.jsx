import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GsapFrom = () => {
  useGSAP(() => {
    gsap.from("#green-box", {
      x: 250,
      repeat: -1,
      yoyo: true,
      rotate: 1260,
      duration: 2,
      ease: "elastic.inOut",
    });
  }, []);

  return (
    <div className="mt-20">
      <div id="green-box" className="w-20 h-20 bg-green-500 rounded-lg">
        .
      </div>
    </div>
  );
};

export default GsapFrom;
