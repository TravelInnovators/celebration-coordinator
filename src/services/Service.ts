import Guest from "../model/Guest";

export default class Service {
    static async createGuest(): Promise<Guest> {
        const response = await fetch("https://asdtebzbufpfwvgsaylv.supabase.co/rest/v1/Member", {
            method: 'POST',
            headers: {
                'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFzZHRlYnpidWZwZnd2Z3NheWx2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU4NzE5ODQsImV4cCI6MjAzMTQ0Nzk4NH0.R1ShT_PqQZZ8jKgNQSXSS6v--tVtfblKHtoaVLcQH3g'
            }
        }).catch((err) => console.error(err))
        return await response.json() as Guest
    }
}