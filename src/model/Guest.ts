export default interface Guest {
    id: string
    first_name: string
    last_name: string
    email: string
    points: number
    status: Status
    dates: Occasion[]
}

export enum Status {
    SilverElite = 'Silver Elite'
}

export interface Occasion {
    name: string
    location: string
    date: Date
    id: string
}