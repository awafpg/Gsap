import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Gsapto = () => {
  useGSAP(() => {
    gsap.to("#blue-box", {
      x: 250,
      repeat: -1,
      yoyo: true,
      rotate: 1360,
      duration: 2,
      ease: "back.inOut",
    });
  }, []);

  return (
    <div className="mt-20">
      <div id="blue-box" className="w-20 h-20 bg-blue-500 rounded-lg">
        .
      </div>
    </div>
  );
};

export default Gsapto;
