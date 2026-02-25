import { ENV } from "../../config/env";

const BASE_URL = ENV.API_URL

export async function getAuth() {
    const res = await fetch(BASE_URL + "/me", {
        method: "GET",
        credentials: "include"
    })
    return res.json()
}

export async function loginAuth(payload: any) {
    const res = await fetch(BASE_URL + "/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)

    })
    return res.json()
}

export async function logoutAuth(id:number) {
    const res = await fetch(BASE_URL + `/logout/${id}`, {
        method: "DELETE",
        credentials: "include"
    })
    return res.json()
}

