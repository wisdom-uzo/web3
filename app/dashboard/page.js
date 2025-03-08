"use client"

import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const router = useRouter();

  // Static data
  const user = {
    username: 'DADA LUKMAN DAMILARE   ID- 23010231100',
    id: 'WEB3 23010231100',
    balance: '4.721 ETH',
    usdValue: '$14,382.76',
    network: 'Ethereum Mainnet'
  };

  const stats = [
    { title: 'Total Transactions', value: '1.2K', change: '+12.4%' },
    { title: 'NFT Holdings', value: '34', change: '+5.2%' },
    { title: 'DeFi Yield', value: '8.2%', change: '+1.1%' }
  ];

  const transactions = [
    { date: '2024-02-15', type: 'Sent', amount: '-0.5 ETH', status: 'Confirmed' },
    { date: '2024-02-14', type: 'Received', amount: '+1.2 ETH', status: 'Pending' },
    { date: '2024-02-13', type: 'Swap', amount: 'ETH → USDC', status: 'Completed' }
  ];

  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute w-[800px] h-[800px] bg-gradient-to-r from-purple-600/30 to-blue-500/30 rounded-full blur-3xl animate-spin-slow -top-64 -left-64"></div>
        <div className="absolute w-[600px] h-[600px] bg-gradient-to-r from-emerald-500/30 to-cyan-500/30 rounded-full blur-3xl animate-spin-slow-reverse bottom-0 right-0"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-500/30 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 5}s infinite`
            }}
          ></div>
        ))}
      </div>

      {/* Dashboard Content */}
      <div className="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Web3 Dashboard
            </h1>
            <p className="text-gray-400 mt-2">Connected as {user.username}</p>
          </div>
          <button
            onClick={() => router.push('/')}   
            className="bg-gradient-to-r from-purple-600 to-blue-500 text-white py-3 px-6 rounded-xl hover:from-purple-700 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Disconnect Wallet
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Balance Card */}
          <div className="bg-gray-800/50 backdrop-blur-md border border-gray-700 rounded-2xl p-6 shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-gray-400 text-sm">Total Balance</p>
                <p className="text-3xl font-bold text-white">{user.balance}</p>
                <p className="text-gray-400 text-sm mt-1">{user.usdValue}</p>
              </div>
              <div className="bg-purple-500/20 p-4 rounded-xl">
                <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                </svg>
              </div>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-green-400 flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                </svg>
                +24.5% last month
              </span>
              <button className="text-purple-400 hover:text-purple-300 transition-colors">
                View Details →
              </button>
            </div>
          </div>

          {/* Stats Cards */}
          {stats.map((stat, index) => (
            <div key={index} className="bg-gray-800/50 backdrop-blur-md border border-gray-700 rounded-2xl p-6 shadow-xl">
              <p className="text-gray-400 text-sm mb-2">{stat.title}</p>
              <div className="flex items-center justify-between">
                <p className="text-2xl font-bold text-white">{stat.value}</p>
                <span className="px-3 py-1 bg-green-900/30 text-green-400 rounded-full text-sm">
                  {stat.change}
                </span>
              </div>
              <div className="mt-4 h-1 bg-gray-700 rounded-full">
                <div className="h-full bg-gradient-to-r from-purple-500 to-blue-400 rounded-full w-2/3"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Activity Chart */}
          <div className="bg-gray-800/50 backdrop-blur-md border border-gray-700 rounded-2xl p-6 shadow-xl">
            <h2 className="text-xl font-semibold text-white mb-6">Activity Chart</h2>
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 h-80 relative">
              {/* Placeholder Chart */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                <svg className="w-20 h-20 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Recent Transactions */}
          <div className="bg-gray-800/50 backdrop-blur-md border border-gray-700 rounded-2xl p-6 shadow-xl">
            <h2 className="text-xl font-semibold text-white mb-6">Recent Transactions</h2>
            <div className="space-y-4">
              {transactions.map((txn, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-700/30 rounded-xl hover:bg-gray-700/50 transition-colors">
                  <div className="flex items-center space-x-4">
                    <div className={`p-2 rounded-lg ${
                      txn.type === 'Sent' ? 'bg-red-500/20' : 
                      txn.type === 'Received' ? 'bg-green-500/20' : 'bg-purple-500/20'
                    }`}>
                      <svg className={`w-6 h-6 ${
                        txn.type === 'Sent' ? 'text-red-400' : 
                        txn.type === 'Received' ? 'text-green-400' : 'text-purple-400'
                      }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {txn.type === 'Sent' ? (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                        ) : txn.type === 'Received' ? (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                        ) : (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/>
                        )}
                      </svg>
                    </div>
                    <div>
                      <p className="text-white font-medium">{txn.type}</p>
                      <p className="text-gray-400 text-sm">{txn.date}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-white">{txn.amount}</p>
                    <span className={`text-sm ${
                      txn.status === 'Confirmed' ? 'text-green-400' : 
                      txn.status === 'Pending' ? 'text-yellow-400' : 'text-purple-400'
                    }`}>
                      {txn.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* NFT Gallery */}
        <div className="mt-12 bg-gray-800/50 backdrop-blur-md border border-gray-700 rounded-2xl p-6 shadow-xl">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-white">NFT Collection</h2>
            <button className="text-purple-400 hover:text-purple-300 transition-colors">
              View All →
            </button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="aspect-square bg-gray-700/30 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 relative group">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="animate-pulse bg-gray-600/20 w-full h-full"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-white font-medium">NFT #{i + 1}</p>
                  <p className="text-gray-400 text-sm">Collection Name</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Network Status */}
        <div className="mt-8 bg-gray-800/50 backdrop-blur-md border border-gray-700 rounded-2xl p-6 shadow-xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <div>
                <p className="text-white">Connected to {user.network}</p>
                <p className="text-gray-400 text-sm">Last block: #15,842,103</p>
              </div>
            </div>
            <div className="flex space-x-4">
              <button className="px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors text-white">
                Switch Network
              </button>
              <button className="px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors text-white">
                Transaction History
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}