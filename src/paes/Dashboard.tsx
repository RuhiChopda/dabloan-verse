import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowUpRight, ArrowDownRight, TrendingUp, Wallet as WalletIcon, DollarSign } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import { useWallet } from "@/contexts/WalletContext";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [lendAmount, setLendAmount] = useState("");
  const [borrowAmount, setBorrowAmount] = useState("");
  const { toast } = useToast();
  const { walletAddress, disconnectWallet } = useWallet();
  const navigate = useNavigate();

  // Redirect if not connected
  if (!walletAddress) {
    navigate("/");
    return null;
  }

  const handleLend = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Lending Successful!",
      description: `You've deposited ${lendAmount} ETH. Start earning interest now.`,
    });
    setLendAmount("");
  };

  const handleBorrow = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Borrow Successful!",
      description: `You've borrowed ${borrowAmount} USDC against your collateral.`,
    });
    setBorrowAmount("");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header walletAddress={walletAddress} onDisconnect={disconnectWallet} />
      <div className="pt-20">
        <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Welcome Back!</h1>
          <p className="text-muted-foreground">Manage your lending and borrowing activities</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="border-primary/20 bg-gradient-accent">
            <CardHeader className="pb-3">
              <CardDescription>Total Balance</CardDescription>
              <CardTitle className="text-3xl">$24,530.00</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center text-sm text-primary">
                <TrendingUp className="w-4 h-4 mr-1" />
                +12.5% this month
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardHeader className="pb-3">
              <CardDescription>Total Supplied</CardDescription>
              <CardTitle className="text-3xl">$18,200.00</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center text-sm text-muted-foreground">
                <ArrowUpRight className="w-4 h-4 mr-1" />
                4.5 ETH
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardHeader className="pb-3">
              <CardDescription>Total Borrowed</CardDescription>
              <CardTitle className="text-3xl">$6,330.00</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center text-sm text-muted-foreground">
                <ArrowDownRight className="w-4 h-4 mr-1" />
                6,330 USDC
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardHeader className="pb-3">
              <CardDescription>Net APY</CardDescription>
              <CardTitle className="text-3xl text-primary">8.42%</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-muted-foreground">
                Weighted average
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Action Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Lend Card */}
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ArrowUpRight className="w-5 h-5 text-primary" />
                Supply Assets
              </CardTitle>
              <CardDescription>
                Deposit your crypto to earn interest
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="eth" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-4">
                  <TabsTrigger value="eth">ETH</TabsTrigger>
                  <TabsTrigger value="usdc">USDC</TabsTrigger>
                  <TabsTrigger value="dai">DAI</TabsTrigger>
                </TabsList>

                <TabsContent value="eth">
                  <form onSubmit={handleLend} className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <Label htmlFor="lend-amount">Amount</Label>
                        <span className="text-muted-foreground">
                          Balance: 10.5 ETH
                        </span>
                      </div>
                      <div className="relative">
                        <Input
                          id="lend-amount"
                          type="number"
                          placeholder="0.00"
                          value={lendAmount}
                          onChange={(e) => setLendAmount(e.target.value)}
                          step="0.01"
                          required
                          className="pr-16"
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-2 top-1/2 -translate-y-1/2 h-7 text-xs"
                          onClick={() => setLendAmount("10.5")}
                        >
                          MAX
                        </Button>
                      </div>
                    </div>

                    <div className="rounded-lg bg-gradient-accent p-4 space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Supply APY</span>
                        <span className="text-primary font-semibold">4.25%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Collateral Factor</span>
                        <span className="font-medium">80%</span>
                      </div>
                    </div>

                    <Button type="submit" className="w-full" variant="hero">
                      Supply ETH
                    </Button>
                  </form>
                </TabsContent>

                <TabsContent value="usdc">
                  <div className="text-center py-8 text-muted-foreground">
                    USDC lending interface (similar to ETH)
                  </div>
                </TabsContent>

                <TabsContent value="dai">
                  <div className="text-center py-8 text-muted-foreground">
                    DAI lending interface (similar to ETH)
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Borrow Card */}
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ArrowDownRight className="w-5 h-5 text-primary" />
                Borrow Assets
              </CardTitle>
              <CardDescription>
                Borrow against your collateral
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="usdc" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-4">
                  <TabsTrigger value="usdc">USDC</TabsTrigger>
                  <TabsTrigger value="dai">DAI</TabsTrigger>
                  <TabsTrigger value="eth">ETH</TabsTrigger>
                </TabsList>

                <TabsContent value="usdc">
                  <form onSubmit={handleBorrow} className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <Label htmlFor="borrow-amount">Amount</Label>
                        <span className="text-muted-foreground">
                          Available: 12,000 USDC
                        </span>
                      </div>
                      <div className="relative">
                        <Input
                          id="borrow-amount"
                          type="number"
                          placeholder="0.00"
                          value={borrowAmount}
                          onChange={(e) => setBorrowAmount(e.target.value)}
                          step="0.01"
                          required
                          className="pr-16"
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-2 top-1/2 -translate-y-1/2 h-7 text-xs"
                          onClick={() => setBorrowAmount("8000")}
                        >
                          80%
                        </Button>
                      </div>
                    </div>

                    <div className="rounded-lg bg-gradient-accent p-4 space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Borrow APY</span>
                        <span className="text-destructive font-semibold">6.75%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Borrow Limit Used</span>
                        <span className="font-medium">52.75%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Liquidation Risk</span>
                        <span className="text-primary font-medium">Low</span>
                      </div>
                    </div>

                    <Button type="submit" className="w-full" variant="hero">
                      Borrow USDC
                    </Button>
                  </form>
                </TabsContent>

                <TabsContent value="dai">
                  <div className="text-center py-8 text-muted-foreground">
                    DAI borrowing interface (similar to USDC)
                  </div>
                </TabsContent>

                <TabsContent value="eth">
                  <div className="text-center py-8 text-muted-foreground">
                    ETH borrowing interface (similar to USDC)
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        {/* Active Positions */}
        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle>Your Active Positions</CardTitle>
            <CardDescription>View and manage your supplies and borrows</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* Supply Position */}
              <div className="flex items-center justify-between p-4 rounded-lg bg-gradient-accent">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <WalletIcon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">ETH Supply</div>
                    <div className="text-sm text-muted-foreground">4.5 ETH</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-semibold">$18,200.00</div>
                  <div className="text-sm text-primary">+4.25% APY</div>
                </div>
              </div>

              {/* Borrow Position */}
              <div className="flex items-center justify-between p-4 rounded-lg bg-gradient-accent">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <DollarSign className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">USDC Borrow</div>
                    <div className="text-sm text-muted-foreground">6,330 USDC</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-semibold">$6,330.00</div>
                  <div className="text-sm text-destructive">-6.75% APY</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
    </div>
  );
};

export default Dashboard;
