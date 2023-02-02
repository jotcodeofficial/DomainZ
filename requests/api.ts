
import axios, { AxiosResponse } from "axios";
import { SubmitData } from "types/submitData";

export const submitOfferForm = async (data: SubmitData) => axios('/api/submit', {
    method: "POST",
    data: JSON.stringify(data),
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    }
}).then((res: AxiosResponse) => {
    if (res.status !== 200) throw new Error("Failed to send the email");
    return res.data();
});