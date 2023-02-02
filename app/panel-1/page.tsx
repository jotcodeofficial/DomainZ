import { Poppins } from "@next/font/google";

const poppins = Poppins({ weight: "700", subsets: ["latin"] });

export default function Page1() {
    return (
        <div className={`bg-no-repeat bg-cover bg-[url('/bg.jpg')] h-screen`}>
            <div
                className="container mx-auto h-full flex  
                    items-center justify-center"
            >
                <div
                    className="flex flex-col 
                    items-center justify-center"
                >
                    <div
                        className={`${poppins.className} bg-[#dc3545] w-fit text-white text-4xl font-extrabold p-2 tracking-wide rounded-md mb-6 px-5`}
                    >
                        For Sale!
                    </div>
                    <div
                        className={`${poppins.className} text-white text-5xl font-extrabold mb-5`}
                    >
                        SuperDomain.com
                    </div>
                    <div className="flex items-center mb-4 ">
                        <div className="text-white text-2xl mr-2">
                            Estimated value
                        </div>
                        <div className="bg-[#28a745] w-fit text-white text-2xl font-bold p-1 rounded-md px-2">
                            $500
                        </div>
                    </div>
                    <div className="text-white text-center px-12 flex-grow">
                        This is an amazing premium domain name. It has a lot of
                        backlinks to ensure it gets good traffic. Make an offer
                        today using the form!
                    </div>
                </div>
            </div>
        </div>
    );
}
