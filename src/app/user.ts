export interface address {
    city: string
    street: string
    suite: string
    zipcode: string
}

export interface company extends address {
    bs: string
    catchphrase: string
    name: string
}

export interface users extends company {
    name: string
    username: string
    email: string
    phone: string
}