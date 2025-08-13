import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { useState } from "react";
import { LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction } from "@solana/web3.js";
import { toast } from "sonner";

export default function Senttoken() {

    const [amount, setAmount] = useState(0);
    const [recipient, setRecipient] = useState("");


    const wallet = useWallet(); 
    const { connection } = useConnection();

    async function sentToken(e){
        e.preventDefault();
        const transaction = new Transaction();
        transaction.add(SystemProgram.transfer({
            fromPubkey : wallet.publicKey,
            toPubkey : new PublicKey(recipient),
            lamports : amount * LAMPORTS_PER_SOL
        }));

        await wallet.sendTransaction(transaction, connection);
        toast.success(`Sent ${amount} SOL to ${recipient}`);

        console.log(amount, recipient);
    }



    return (
        <div className="flex flex-col items-center justify-center text-white pt-4 pb-8">
            <h1 className="text-2xl font-bold mb-2">Send Token to Wallet</h1>

            <form onSubmit={sentToken} className="flex flex-col gap-6 w-full max-w-md p-6 bg-gray-800 rounded-lg shadow-lg">
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium" htmlFor="recipient">
                        Enter the Address of the Recipient
                    </label>
                    <input
                        type="text"
                        id="recipient"
                        onChange={(e) => setRecipient(e.target.value)}
                        value={recipient}
                        placeholder="Recipient's Address"
                        className="p-2 rounded-md bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="amount" className="text-sm font-medium">
                        Enter the Amount of Tokens
                    </label>
                    <input
                        type="text"
                        placeholder="Amount"
                        id="amount"
                        onChange={(e) => setAmount(e.target.value)}
                        value={amount}
                        className="p-2 rounded-md bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <button className="bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded">
                    Send Token
                </button>
            </form>
        </div>
    );
}
