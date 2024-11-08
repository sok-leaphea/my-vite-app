import HeroSection from "../components/HeroSection";

export default function Home() {
  return (
    <>
      <div className="h-screen">
        <HeroSection
          title="Pet Store & Beyond"
          description="This is a sample landing page, created with Figma and Anima. No coding involved."
          image="./images/cat-01.jpg"
          link="#"
        />
      </div>
    </>
  );
}
