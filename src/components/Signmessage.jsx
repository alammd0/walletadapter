import { ed25519 } from '@noble/curves/ed25519';
import { useWallet } from '@solana/wallet-adapter-react';
import bs58 from 'bs58';
import { useState } from 'react'


export function Signessage(){

    const [message, setMessage] = useState("");

    const {publicKey, signMessage} = useWallet();

    const SignFunction = async () => {
        if (!publicKey) throw new Error('Wallet not connected!');
        if (!signMessage) throw new Error('Wallet does not support message signing!');
    
        const encodedMessage = new TextEncoder().encode(message);
        const signature = await signMessage(encodedMessage);

        if (!ed25519.verify(signature, encodedMessage, publicKey.toBytes())) throw new Error('Message signature invalid!');
        alert('success', `Message signature: ${bs58.encode(signature)}`);
    };



    return (
        <div className="flex flex-col items-center justify-center text-white pt-4 pb-8">
            <div className="flex flex-col gap-6 w-full max-w-md p-6 bg-gray-800 rounded-lg shadow-lg">
                <div className="flex flex-col gap-2">
                    <label htmlFor="message" > Enter Your Message </label>
                    <input type="text"
                     id="message"
                     placeholder="Enter Your Message"
                     className="p-2 rounded-md bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                     onChange={(e) => setMessage(e.target.value)}
                     value={message}
                    />
                </div>

                <button onClick={SignFunction} className="bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded">
                    Send Message 
                </button>
            </div>
        </div>
    )
}