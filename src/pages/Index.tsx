import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useWallet } from "@/contexts/WalletContext";

const Index = () => {
  const { walletAddress, disconnectWallet } = useWallet();

  return (
    <div className="min-h-screen bg-background">
      <Header walletAddress={walletAddress || undefined} onDisconnect={disconnectWallet} />
      <Hero />
      <Features />
      <HowItWorks />
      <Footer />
    </div>
  );
};

export default Index;
