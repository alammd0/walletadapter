import { useConnection } from "@solana/wallet-adapter-react";
import { useEffect } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useState } from "react";
import { Link } from "react-router-dom";


export default function Showblance() {


    const wallet = useWallet();
    const { connection } = useConnection(); 
    const [balance, setBalance] = useState(0)

    useEffect ( () => {
        async function getBalance() {
            if(wallet.publicKey) {
                const balance = await connection.getBalance(wallet.publicKey);
                setBalance(balance / LAMPORTS_PER_SOL);
            }
        }
        getBalance();
    }, [wallet.publicKey, connection]);

    return (
        <div className="flex flex-col gap-2 items-center mt-10">
         <div className="flex gap-4 w-full items-center justify-center">
            <div>
                <h1 className="text-xl font-semibold font-sans text-gray-300">This is the showblance Page</h1>
                <h2 className="text-[14px] font-medium font-sans text-gray-200">SOL: ${balance}</h2>
            </div>
            <Link to="/sent-token">
                <button className="bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded">
                    Sent Token
                </button>
            </Link>
         </div>

         <div className="w-full flex items-center justify-center pt-10">
             <Link to="/sign-message">
                <button className="bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded">
                    Sign Message
                </button>
           </Link>
         </div>
        </div>
    )
}