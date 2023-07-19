import HomePage from "@/components/HomePage";
import NewArrivals from "@/components/NewArivals";
import BestSeller from "@/components/BestSellers";
import SocialMedia from "@/components/SocialMedia";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <HomePage />
      <NewArrivals />
      <BestSeller />
      <SocialMedia />
      <Footer />
    </>
  );
}
