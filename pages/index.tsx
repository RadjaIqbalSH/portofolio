import Navbar from "@/components/organisms/Navbar";
import MainSection from "@/components/templates/Main";
import SplashScreen from "@/components/templates/SplashScreen";

export default function Home() {
  return (
    <>
      <div className="bg-white w-screen h-auto relative">
        <SplashScreen />
        <MainSection />
        <Navbar />
        <div className="w-full h-dvh">a</div>
        <div className="w-full h-dvh">a</div>
        <div className="w-full h-dvh">a</div>
        <div className="w-full h-dvh">a</div>
      </div>
    </>
  );
}
