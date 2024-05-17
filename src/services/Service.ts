import axios from "axios";
import Guest, { Occasion } from "../model/Guest";

export default class Service {
    static async createGuest(): Promise<Guest> {
        return await (await axios.post('Member')).data
    }

    static async createOcassion(): Promise<Occasion> {
        return await (await axios.post('Member_Occasion')).data
    }
}

export const axiosInstance = axios.create({
    baseURL: 'https://asdtebzbufpfwvgsaylv.supabase.co/rest/v1/',
    headers: {
        'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFzZHRlYnpidWZwZnd2Z3NheWx2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU4NzE5ODQsImV4cCI6MjAzMTQ0Nzk4NH0.R1ShT_PqQZZ8jKgNQSXSS6v--tVtfblKHtoaVLcQH3g'
    },
}) ;