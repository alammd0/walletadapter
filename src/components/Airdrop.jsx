import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useState } from "react"
import { toast } from "sonner";

export default function Airdrop() {

    const wallet = useWallet();
    const { connection } = useConnection();
    const [amount, setAmount] = useState(0)

    const airdrop = async () => {
        const publicKey =  wallet.publicKey; 
        const signature = await connection.requestAirdrop(publicKey, amount * LAMPORTS_PER_SOL);

        if (signature) {
            toast.success("Airdrop add successfully");
        }
    }


    return (
        <div className="flex flex-col items-center justify-center mt-3">
            <div className="flex gap-8 flex-col items-center justify-center">
                <h1 className="text-4xl font-semibold font-sans text-white ">This is the airdrop Page. This is not real Solana Token</h1>

               <div className="flex flex-row items-center justify-center gap-5 w-full">
                 <input type="airdrop"
                 placeholder="Enter the amount of SOL you want to airdrop"
                 onChange={(e) => setAmount(e.target.value)} 
                 className="bg-gray-400 w-full px-4 py-2 outline-none rounded-md"
                 value={amount} />

                <button className="bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded w-[30%]"
                 onClick={airdrop}>
                    Request Airdrop
                </button>
               </div>
            </div>
        </div>
    )
}