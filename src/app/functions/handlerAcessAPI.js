'use server'

const url = "https://aula-17-10-kappa.vercel.app";

const getUserAuthenticated = async (user) => { //armazena os objetos
  const responseOfApi = await fetch(url +  "/user/authenticated",
     {
        method:"POST",
        headers:{"Content-Type":"Application/json"},
        body:JSON.stringify(user)
     }
  );
 const userAuth = await responseOfApi.json();
 return userAuth;
}


const getUsers = () =>{

}


export { getUsers, getUserAuthenticated };
