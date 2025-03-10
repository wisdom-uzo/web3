"use client"

import { useRouter } from 'next/navigation';



import { ChartBarIcon, CurrencyDollarIcon, CubeIcon, ShieldCheckIcon, BeakerIcon } from '@heroicons/react/24/outline';

export default function Dashboard() {
  const router = useRouter();

  // Static data
  const user = {
    username: 'Ogunfodunrin Ibrahim ayobola  ID- 23010231154',
    id: '23010231154',
    wallet: '23010231154',
    balance: '4.721 ETH',
    usdValue: '$15,432.80'
  };

  const stats = [
    { name: 'NFTs Held', value: '12', icon: CubeIcon },
    { name: 'Transactions', value: '84', icon: ChartBarIcon },
    { name: 'Gas Used', value: '3.2 ETH', icon: BeakerIcon },
    { name: 'Security Score', value: '98/100', icon: ShieldCheckIcon },
  ];

  const transactions = [
    { hash: '0x4a3b...c2d1', type: 'Received', amount: '+1.2 ETH', date: '2023-08-15' },
    { hash: '0x8f2e...9a4b', type: 'Sent', amount: '-0.5 ETH', date: '2023-08-14' },
    { hash: '0x1d7c...3e9f', type: 'Swap', amount: 'ETH → USDC', date: '2023-08-13' },
  ];

  const nfts = [
    { id: 1, name: 'CryptoPunk #1234', url: 'https://example.com/nft1.jpg' },
    { id: 2, name: 'Bored Ape #5678', url: 'https://example.com/nft2.jpg' },
    { id: 3, name: 'Art Blocks #9012', url: 'https://example.com/nft3.jpg' },
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[800px] h-[800px] bg-gradient-to-r from-purple-600/20 to-blue-500/20 rounded-full blur-3xl animate-spin-slow -top-64 -left-64" />
        <div className="absolute w-[700px] h-[700px] bg-gradient-to-r from-pink-600/20 to-purple-500/20 rounded-full blur-3xl animate-spin-slow-reverse bottom-0 right-0" />
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-4">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Web3 Dashboard
            </h1>
            <p className="text-gray-400 mt-2">Welcome back, {user.username}</p>
          </div>
          <div className="flex gap-4">
            <button className="bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-lg px-4 py-2 transition-all">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                {user.wallet}
              </span>
            </button>
            <button 
              onClick={() => router.push('/')}
              className="bg-red-600/20 hover:bg-red-600/30 border border-red-600/50 text-red-400 px-4 py-2 rounded-lg transition-all"
            >
              Logout
            </button>
          </div>
        </div>

        {/* Wallet Balance Card */}
        <div className="bg-gradient-to-br from-purple-600/30 to-blue-600/30 border border-purple-500/50 rounded-2xl p-8 mb-8 backdrop-blur-lg">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-white mb-2">Wallet Balance</h2>
              <p className="text-4xl font-bold text-white">{user.balance}</p>
              <p className="text-gray-300 mt-2">{user.usdValue}</p>
            </div>
            <CurrencyDollarIcon className="h-16 w-16 text-purple-400/50" />
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat) => (
            <div key={stat.name} className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:bg-gray-800/70 transition-all">
              <stat.icon className="h-8 w-8 text-purple-400 mb-4" />
              <h3 className="text-gray-400 text-sm mb-1">{stat.name}</h3>
              <p className="text-2xl font-semibold text-white">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Recent Transactions */}
          <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-6 backdrop-blur-lg">
            <h2 className="text-xl font-semibold text-white mb-6">Recent Transactions</h2>
            <div className="space-y-4">
              {transactions.map((tx) => (
                <div key={tx.hash} className="bg-gray-700/30 hover:bg-gray-700/50 border border-gray-600 rounded-lg p-4 transition-all">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium text-white">{tx.type}</p>
                      <p className="text-sm text-gray-400">{tx.hash}</p>
                    </div>
                    <div className="text-right">
                      <p className={tx.amount.startsWith('+') ? 'text-green-400' : 'text-red-400'}>
                        {tx.amount}
                      </p>
                      <p className="text-sm text-gray-400">{tx.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* NFT Gallery */}
          <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-6 backdrop-blur-lg">
            <h2 className="text-xl font-semibold text-white mb-6">NFT Collection</h2>
            <div className="grid grid-cols-2 gap-4">
              {nfts.map((nft) => (
                <div key={nft.id} className="group relative aspect-square bg-gray-700 rounded-xl overflow-hidden hover:ring-2 hover:ring-purple-500 transition-all">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                  <img 
                    src={nft.url} 
                    alt={nft.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                  <p className="absolute bottom-0 left-0 z-20 p-4 text-white text-sm font-medium">
                    {nft.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Network Status */}
        <div className="mt-12 bg-gray-800/50 border border-gray-700 rounded-2xl p-6 backdrop-blur-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="h-3 w-3 bg-green-500 rounded-full animate-pulse" />
              <div>
                <h3 className="text-white font-medium">Ethereum Mainnet</h3>
                <p className="text-gray-400 text-sm">Connected to blockchain</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-gray-400 text-sm">Block #17453219</p>
              <p className="text-gray-400 text-sm">Gas: 32 gwei</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-gray-400 text-sm">
          <p>Web3 Dashboard v1.0 • Powered by Next.js • {new Date().getFullYear()}</p>
        </div>
      </div>
    </div>
  );
}
