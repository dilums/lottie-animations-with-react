import lottie, { AnimationItem } from "lottie-web";
import { useEffect, memo, useRef } from "react";

type Props = {
  className: string;
  path: string;
};

const LottieAnimation = ({ className, path }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<AnimationItem>();

  useEffect(() => {
    const container = containerRef.current;
    const previousAnimation = animationRef.current;

    if (container) {
      if (previousAnimation) {
        // Stop and destroy previous animation
        previousAnimation.stop();
        previousAnimation.destroy();
      }

      // Load new animation
      const newAnimation = lottie.loadAnimation({
        container,
        renderer: "svg",
        loop: true,
        autoplay: true,
        path,
      });

      animationRef.current = newAnimation;
    }

    // Cleanup function to stop and destroy animation when component unmounts
    return () => {
      if (animationRef.current) {
        animationRef.current.stop();
        animationRef.current.destroy();
      }
    };
  }, [path]);

  return <div className={className} ref={containerRef} />;
};

export default memo(LottieAnimation);
