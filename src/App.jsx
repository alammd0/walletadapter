import { useState } from 'react'
import './App.css'
import Airdrop from './components/Airdrop'
import React, { useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';

import '@solana/wallet-adapter-react-ui/styles.css';
import Showblance from './components/Showblance';
import Senttoken from './components/Senttoken';
import { Route, Routes } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-gray-600 min-h-screen'>
      <ConnectionProvider endpoint='https://api.devnet.solana.com'>
        <WalletProvider wallets={[]} autoConnect>
          <WalletModalProvider>
            <div className='flex justify-between p-8'>
              <WalletMultiButton />
              <WalletDisconnectButton />
            </div>
            <Airdrop />
            <div>
               <Showblance />
               <Routes>
                  <Route path='/sent-token' element={<Senttoken />} />
               </Routes>
            </div>
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </div>
  )
}

export default App
