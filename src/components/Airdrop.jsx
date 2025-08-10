

export default function Airdrop() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <div className="flex gap-4 flex-col items-center justify-center">
                <h1 className="text-4xl font-semibold font-sans text-white ">This is the airdrop Page. This is not real Solana Token</h1>

                <form className="flex flex-col gap-4 w-full">
                    <div className="flex gap-2 flex-col">
                        <label htmlFor="address" className="text-gray-100 text-[18px]">Enter address to airdrop <sup className="text-red-500">*</sup></label>
                        <input className="border-2 border-gray-100 rounded-lg w-full px-2 py-2 text-gray-100" type="text"/>
                    </div>

                    <div className="flex gap-2 w-full">
                        <label className="text-gray-100 text-[18px]">Enter amount to airdrop <sup className="text-red-500">*</sup></label>
                        <input className="border-2 border-gray-100 rounded-lg px-2 py-2 text-gray-100" type="number"/>
                    </div>


                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg w-fit">
                        Request Airdrop in Devnet
                    </button>
                   
                </form>
            </div>
        </div>
    )
}