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
                    <div className="flex fixed bottom-0">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="white"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                            />
                        </svg>

                        <div className="text-white text-sm mb-4 ml-1">
                            info@superdomain.com
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
