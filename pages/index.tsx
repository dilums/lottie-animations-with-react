import AnimatedLottie from "@/components/AnimatedLottie";
import SEO from "components/common/SEO";

// Awesome lottie animation by Mikhail Voloshin
// https://lottiefiles.com/32147-cute-cat-works
const LOTTIE_PATH = "https://assets.codepen.io/3685267/cute-cat-works.json";

export default function Home() {
  return (
    <>
      <SEO title="Lottie Animation" slug="/" />
      <div className="max-w-7xl mx-auto p-4 grid place-items-center h-screen">
        <AnimatedLottie path={LOTTIE_PATH} className="max-w-3xl" />
      </div>
    </>
  );
}
