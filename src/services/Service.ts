import axios from "axios";
import Guest, { Occasion } from "../model/Guest";

export default class Service {
    static async createGuest(first_name: string, last_name: string, email: string): Promise<any> {
        return await (await axiosInstance.post('Member',
            {
                "first_name": first_name,
                "last_name": last_name,
                "email": email
            }    
        )).data
    }

    static async createOccasion(occasion: string, date: Date, location: string): Promise<any> {
        return await (await axiosInstance.post('Member_Occasion', 
            {
                "occasion": occasion,
                "date": date,
                "location": location
            }
        )).data
    }

    static async getGuest(): Promise<Guest> {
        return await (await axiosInstance.get('Member')).data
    }

    static async getOcassion(): Promise<Occasion> {
        return await (await axiosInstance.get('Member_Occasion')).data
    }
}

export const axiosInstance = axios.create({
    baseURL: 'https://asdtebzbufpfwvgsaylv.supabase.co/rest/v1/',
    headers: {
        'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFzZHRlYnpidWZwZnd2Z3NheWx2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU4NzE5ODQsImV4cCI6MjAzMTQ0Nzk4NH0.R1ShT_PqQZZ8jKgNQSXSS6v--tVtfblKHtoaVLcQH3g'
    },
}) ;