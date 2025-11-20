import { Button } from "@/components/ui/button";
import { Wallet } from "lucide-react";
import { useState } from "react";
import ConnectWalletDialog from "./ConnectWalletDialog";

interface HeaderProps {
  walletAddress?: string;
  onDisconnect?: () => void;
}

const Header = ({ walletAddress, onDisconnect }: HeaderProps) => {
  const [isConnectDialogOpen, setIsConnectDialogOpen] = useState(false);

  const truncateAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="/" className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              DeFi Lend
            </a>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <a href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Home
              </a>
              <a href="/dashboard" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Dashboard
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Markets
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Governance
              </a>
            </nav>

            {/* Wallet Connection */}
            <div>
              {walletAddress ? (
                <div className="flex items-center gap-2">
                  <div className="px-4 py-2 rounded-lg bg-gradient-accent border border-primary/20 text-sm font-medium">
                    {truncateAddress(walletAddress)}
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={onDisconnect}
                  >
                    Disconnect
                  </Button>
                </div>
              ) : (
                <Button
                  variant="default"
                  size="sm"
                  onClick={() => setIsConnectDialogOpen(true)}
                >
                  <Wallet className="w-4 h-4 mr-2" />
                  Connect Wallet
                </Button>
              )}
            </div>
          </div>
        </div>
      </header>

      <ConnectWalletDialog 
        open={isConnectDialogOpen}
        onOpenChange={setIsConnectDialogOpen}
      />
    </>
  );
};

export default Header;
