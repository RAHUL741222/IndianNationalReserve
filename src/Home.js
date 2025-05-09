import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-black text-white font-sans">
      <header className="p-6 flex justify-between items-center border-b border-purple-700">
        <h1 className="text-3xl font-bold tracking-wide">IndianNationalReserve TOKEN</h1>
        <a
          href="https://quickswap.exchange/#/swap?outputCurrency=0x0a552c6a9d224b54fe37c6b6c0a9e9e05dfca222"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-xl text-white font-semibold"
        >
          Buy Now
        </a>
      </header>

      <main className="px-6 py-16 max-w-5xl mx-auto space-y-24">
        <section className="text-center space-y-6">
          <h2 className="text-5xl font-extrabold text-purple-400">Empowering Decentralized Finance</h2>
          <p className="text-xl max-w-2xl mx-auto text-gray-300">
            IndianNationalReserve (INR) Token is a decentralized, Polygon-based utility token designed to revolutionize digital commerce in India.
          </p>
        </section>

        <section>
          <h3 className="text-3xl font-bold mb-4">About INR</h3>
          <p className="text-gray-300">
            INR Token bridges the gap between real-world currency and decentralized finance. With ultra-low gas fees on the Polygon network,
            INR makes DeFi accessible to everyone.
          </p>
        </section>

        <section>
          <h3 className="text-3xl font-bold mb-4">Tokenomics</h3>
          <ul className="text-gray-300 space-y-2">
            <li><strong>Total Supply:</strong> 200,000,000 INR</li>
            <li><strong>Liquidity:</strong> 50%</li>
            <li><strong>Marketing & Development:</strong> 20%</li>
            <li><strong>Team & Advisors:</strong> 10%</li>
            <li><strong>Reserve & Future Use:</strong> 20%</li>
          </ul>
        </section>

        <section>
          <h3 className="text-3xl font-bold mb-4">Roadmap</h3>
          <ol className="list-decimal text-gray-300 ml-6 space-y-1">
            <li>Launch INR Token on Polygon</li>
            <li>Initial DEX Offering (IDO) via QuickSwap</li>
            <li>CoinGecko and CoinMarketCap listing</li>
            <li>Community Building via Airdrops</li>
            <li>Partnership with Indian DeFi Projects</li>
          </ol>
        </section>

        <section>
          <h3 className="text-3xl font-bold mb-4">How to Buy</h3>
          <p className="text-gray-300">
            Connect your MetaMask wallet to the Polygon network and visit QuickSwap. Swap MATIC for INR using the token contract address below.
          </p>
          <div className="mt-2 p-4 bg-gray-900 border border-purple-700 rounded-xl font-mono">
            0x0a552c6a9d224b54fe37c6b6c0a9e9e05dfca222
          </div>
        </section>

        <section className="text-center space-y-2">
          <p className="text-gray-400">Follow us on:</p>
          <div className="space-x-4">
            <a href="https://t.me/yourchannel" className="hover:text-purple-400">Telegram</a>
            <a href="https://twitter.com/yourprofile" className="hover:text-purple-400">Twitter</a>
            <a href="https://github.com/yourrepo" className="hover:text-purple-400">GitHub</a>
          </div>
        </section>
      </main>

      <footer className="p-4 text-center text-gray-600 border-t border-purple-700">
        © 2025 IndianNationalReserve Token. All rights reserved.
      </footer>
    </div>
  );
}