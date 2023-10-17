'use server'

const url = "https://aula-17-10-kappa.vercel.app";
const users= [
        {
        name: 'Stefany',
        email:'stefany@gmail.com',
        password: '1234',
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
    },
    {
        name: 'Marcelino',
        email:'marcelino@gmail.com',
        password: '6878',
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
    },
    {
        name: 'Natasha',
        email:'natash@gmail.com',
        password: '1698',
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
    }
 ];


const getUserAuthenticated = (userLogin) =>{ //armazena os objetos
    let usuarioAutenticado={}; 


    users.map((user)=> { //mapea os itens q vem do usuário
        if(user.email === userLogin.email && user.password === userLogin.password){
            usuarioAutenticado = user
        }
    })
 return usuarioAutenticado;
}

const getUsers = () =>{
     return users; // retorna todos os usuários
}


export { getUsers, getUserAuthenticated };
