import { Shield, Zap, TrendingUp, Lock, DollarSign, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: Shield,
    title: "Secure & Trustless",
    description: "Smart contracts audited by leading security firms. Your assets remain under your control at all times.",
  },
  {
    icon: Zap,
    title: "Instant Settlement",
    description: "Borrow or lend crypto instantly with automated smart contract execution on the blockchain.",
  },
  {
    icon: TrendingUp,
    title: "Competitive Yields",
    description: "Earn attractive interest rates on your deposits with dynamic rates based on supply and demand.",
  },
  {
    icon: Lock,
    title: "Non-Custodial",
    description: "You maintain full control of your private keys. We never have access to your funds.",
  },
  {
    icon: DollarSign,
    title: "Low Fees",
    description: "Transparent fee structure with minimal overhead costs thanks to decentralized infrastructure.",
  },
  {
    icon: Users,
    title: "Community Governed",
    description: "Protocol decisions are made by token holders through decentralized governance mechanisms.",
  },
];

const Features = () => {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Why Choose Our Platform
          </h2>
          <p className="text-xl text-muted-foreground">
            Experience the future of finance with our decentralized lending protocol
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="border-primary/20 bg-card/50 backdrop-blur-sm hover:border-primary/40 transition-all duration-300 hover:shadow-glow-accent"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-accent flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
