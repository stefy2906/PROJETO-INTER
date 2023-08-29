'use server'

const users= [
        {
        name: 'Stefany',
        email:'stefany@gmail.com',
        password: '1234',
        token: 'qewbfheyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5cbabsdckjbndslqaiufjdhabckjs'
    },
    {
        name: 'Marcelino',
        email:'marcelino@gmail.com',
        password: '6878',
        token: 'ewuheeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5cuwinbfjwbeuwfgsdvk'
    },
    {
        name: 'Natasha',
        email:'natash@gmail.com',
        password: '1698',
        token: 'suyqiydihbe3eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5cvtywevkdasi'
    }
 ]


const getUserAuthenticated = (user) =>{ //armazena os objetos
    let usuarioAutenticado={}; 
    user.map((recebe)=> { //mapea os itens q vem do usuário
        if(user.email === recebe.email && user.password === recebe.password){
            usuarioAutenticado = recebe
        }
    })
 return usuarioAutenticado;
}

const getUsers = () =>{
     return users; // retorna todos os usuários
}


export { getUsers, getUserAuthenticated };
