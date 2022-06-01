import axios from "axios";

export const getBooks = async () => {
    return (await axios.get( '/api/movies')).data;
}
export const authRequest = async ({email, token, password}: any) => {
    return (await axios.post('/api/auth', {email, token, password}))
}