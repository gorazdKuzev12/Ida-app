import HomePage from "@/components/HomePage";
import NewArrivals from "@/components/NewArivals";
import BestSeller from "@/components/BestSellers";
import SocialMedia from "@/components/SocialMedia";
import Footer from "@/components/Footer";
import VinylRecord from "@/components/Record";

export default function Home() {
  return (
    <>
      <HomePage />
      <VinylRecord />

      <NewArrivals />
      <BestSeller />

      <SocialMedia />

      <Footer />
    </>
  );
}
