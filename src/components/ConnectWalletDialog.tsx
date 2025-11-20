import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Wallet, Mail, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useWallet } from "@/contexts/WalletContext";
import { useNavigate } from "react-router-dom";

interface ConnectWalletDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ConnectWalletDialog = ({ open, onOpenChange }: ConnectWalletDialogProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const { connectWallet } = useWallet();
  const navigate = useNavigate();

  const handleWalletConnect = async (walletType: string) => {
    setIsLoading(true);
    
    // Simulate wallet connection and generate mock address
    setTimeout(() => {
      const mockAddress = `0x${Math.random().toString(16).substr(2, 40)}`;
      connectWallet(mockAddress);
      
      toast({
        title: "Wallet Connected!",
        description: `Successfully connected to ${walletType}`,
      });
      setIsLoading(false);
      onOpenChange(false);
      navigate("/dashboard");
    }, 1500);
  };

  const handleEmailSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate account creation
    setTimeout(() => {
      const mockAddress = `0x${Math.random().toString(16).substr(2, 40)}`;
      connectWallet(mockAddress);
      
      toast({
        title: "Account Created!",
        description: "Welcome to DeFi Lend. You can now start lending.",
      });
      setIsLoading(false);
      onOpenChange(false);
      setEmail("");
      setPassword("");
      navigate("/dashboard");
    }, 1500);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl">Get Started</DialogTitle>
          <DialogDescription>
            Connect your wallet or create an account to start lending
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="wallet" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="wallet">
              <Wallet className="w-4 h-4 mr-2" />
              Connect Wallet
            </TabsTrigger>
            <TabsTrigger value="email">
              <Mail className="w-4 h-4 mr-2" />
              Create Account
            </TabsTrigger>
          </TabsList>

          <TabsContent value="wallet" className="space-y-4 mt-4">
            <Button
              onClick={() => handleWalletConnect("MetaMask")}
              disabled={isLoading}
              className="w-full justify-between"
              variant="outline"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center">
                  <Wallet className="w-4 h-4" />
                </div>
                <span>MetaMask</span>
              </div>
              <ArrowRight className="w-4 h-4" />
            </Button>

            <Button
              onClick={() => handleWalletConnect("WalletConnect")}
              disabled={isLoading}
              className="w-full justify-between"
              variant="outline"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center">
                  <Wallet className="w-4 h-4" />
                </div>
                <span>WalletConnect</span>
              </div>
              <ArrowRight className="w-4 h-4" />
            </Button>

            <Button
              onClick={() => handleWalletConnect("Coinbase Wallet")}
              disabled={isLoading}
              className="w-full justify-between"
              variant="outline"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center">
                  <Wallet className="w-4 h-4" />
                </div>
                <span>Coinbase Wallet</span>
              </div>
              <ArrowRight className="w-4 h-4" />
            </Button>

            <p className="text-xs text-muted-foreground text-center pt-2">
              By connecting, you agree to our Terms of Service
            </p>
          </TabsContent>

          <TabsContent value="email" className="space-y-4 mt-4">
            <form onSubmit={handleEmailSignup} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Create a strong password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength={8}
                />
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full"
                variant="hero"
              >
                {isLoading ? "Creating Account..." : "Create Account"}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                Already have an account?{" "}
                <button
                  type="button"
                  className="text-primary hover:underline"
                  onClick={() => {
                    toast({
                      title: "Sign In",
                      description: "Sign in functionality coming soon!",
                    });
                  }}
                >
                  Sign In
                </button>
              </p>
            </form>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default ConnectWalletDialog;
