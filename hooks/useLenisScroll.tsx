import Lenis from "lenis";
import { useEffect } from "react";

const useLenisScroll = () => {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis();

    lenis.on("scroll", () => {
      // console.log(e);
    });

    // Use requestAnimationFrame to continuously update the scroll
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // cleanup ketika komponen unmount
    return () => {
      lenis.destroy();
    };
  }, []);
};

export default useLenisScroll;
