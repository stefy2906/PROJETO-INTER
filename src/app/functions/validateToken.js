import { jwVerify } from "jose";

const validateToken = async(token) => {
    const secret = "fndkjvnkjdfnvkjnfdjbjniejfieng"
    try {
        /*const isTokenValidate = await jwtVerify(token, new TextEn)
        if(ifTokenValidate){
            return true
        }*/
        const isTokenValidate = await decode(token);
        if(isTokenValidate){
            return true
        }
    } catch (error) {
        return false;
    }
}   

export { validateToken };