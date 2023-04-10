import { useLottie } from "lottie-react";
import orbitAnimation from "../data/lottie/orbit.json";
import walkCycleAnimation from "../data/lottie/walk-cycle.json";
import { cleanupStyle } from "../.tina/cleanupStyle";


export const LottieAnimation = ({ slug, lottieStyle, speed = 1, ...rest }) => {
  const animations = {
    orbit: orbitAnimation,
    walkCycle: walkCycleAnimation,
  }
  const style = cleanupStyle(lottieStyle);

  if (!animations[slug]) {
    console.warn(`No animation found for slug: ${slug}`);
    return <div>NO ANIMATION FOR PROVIDED SLUG</div>
  }

  const options = {
    animationData: animations[slug] ?? animations.orbit,
    loop: true,
    autoplay: true,
  };
  const { View, setSpeed } = useLottie(options, style);
  speed !== 1 && setSpeed(speed);
  return <>{View}</>;
};
