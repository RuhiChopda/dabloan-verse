import { Wallet, Upload, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Wallet,
    number: "01",
    title: "Connect Your Wallet",
    description: "Link your Web3 wallet securely to access the lending platform",
  },
  {
    icon: Upload,
    number: "02",
    title: "Deposit Assets",
    description: "Choose your preferred cryptocurrency and deposit to start earning or use as collateral",
  },
  {
    icon: TrendingUp,
    number: "03",
    title: "Earn or Borrow",
    description: "Earn interest on deposits or borrow against your collateral instantly",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 px-4 bg-gradient-accent">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground">
            Get started in three simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                {/* Connecting Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
                )}
                
                <div className="relative bg-card/80 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 text-center space-y-4 hover:border-primary/40 transition-all duration-300">
                  {/* Number Badge */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-lg font-bold">
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-16 h-16 mx-auto rounded-full bg-gradient-accent flex items-center justify-center">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-bold">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
