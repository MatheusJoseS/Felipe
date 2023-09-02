'use client'
import React from "react"
import api from "../shaed/utils/my-axios"
interface TokenResponse {
    data: {
        token:string;
    }
}
function Page(){
    const [loading, setLoading] = React.useState<boolean>(false)
    const [from, setFrom] = React.useState<any[]>({email: '', password: ''})
    const getData = (e : any) => {
        const {name,value} = e.target
        setFrom ({...from,[name]:value})
    }
    const submit = async (e:any) => {
        setLoading(true);
        e.preventDefault()
        const TokenResponse: TokenResponse  = await api.post("/auth/login", from)
        localStorage.setItem("token" , TokenResponse.data.token)
        setLoading(false)
    }
return(
    <>
    <form>
        <label htmlFor="emailId">Email</label>
        <input onChange={getData} value={from.email} type="text" name="email" id="emailId" /> <br/>
        <label htmlFor="passwordId">Password</label>
        <input onChange={getData} value={from.password}type="text" name="password" id="passwordId" /> <br/>
        <button onClick={submit}>Loagar</button>
    </form>
    </>
)
}
export default Page