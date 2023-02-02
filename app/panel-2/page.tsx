"use client"; // this is a client component
import { SubmitData } from "types/submitData";
import { useState } from "react";
import { submitOfferForm } from "requests/api";

export default function Panel2() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [offer, setOffer] = useState("");
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();

        setIsLoading(true);

        const formPayload: SubmitData = {
            name,
            email,
            offer,
            message,
        };

        try {
            await submitOfferForm(formPayload);
        } catch (error: any) {
            setIsLoading(false);
        }
    };

    return (
        <div className="bg-[#f8f9fa]">
            <div className="flex items-center justify-center h-screen">
                <div>
                    <div>
                        <h1 className="text-3xl font-bold text-center">
                            Make An Offer
                        </h1>
                    </div>
                    <div>
                        <h2>
                            Complete the form below and the seller will be in
                            contact.
                        </h2>
                    </div>
                    <div className="block p-6 max-w-md">
                        <form>
                            <div className="form-group mb-6">
                                <input
                                    required
                                    type="text"
                                    className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    id="name"
                                    placeholder="Name"
                                    value={name}
                                    onChange={({ target }) =>
                                        setName(target?.value)
                                    }
                                />
                            </div>
                            <div className="form-group mb-6">
                                <input
                                    required
                                    type="email"
                                    className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    id="email"
                                    placeholder="Email address"
                                    value={email}
                                    onChange={({ target }) =>
                                        setEmail(target?.value)
                                    }
                                />
                            </div>
                            <div className="form-group mb-6">
                                <input
                                    required
                                    type="text"
                                    className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    id="offer"
                                    placeholder="Offer"
                                    value={offer}
                                    onChange={({ target }) =>
                                        setOffer(target?.value)
                                    }
                                />
                            </div>
                            <div className="form-group mb-6">
                                <textarea
                                    required
                                    className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
                                    id="message"
                                    rows={3}
                                    placeholder="Message"
                                    value={message}
                                    onChange={({ target }) =>
                                        setMessage(target?.value)
                                    }
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                disabled={!name || !email || !offer || !message}
                                onClick={handleSubmit}
                                className="
      w-full
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out
      disabled:opacity-50"
                            >
                                {isLoading ? (
                                    <>
                                        <svg
                                            aria-hidden="true"
                                            role="status"
                                            className="inline w-4 h-4 mr-3 text-white animate-spin"
                                            viewBox="0 0 100 101"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                                fill="#E5E7EB"
                                            />
                                            <path
                                                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                        Loading...
                                    </>
                                ) : (
                                    "Send"
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
