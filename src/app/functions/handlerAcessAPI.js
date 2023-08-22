'use server'

const usuario= [
        {
        name: 'Stefany',
        email:'stefany@gmail.com',
        password: '1234',
        token: 'qewbfhbabsdckjbndslqaiufjdhabckjs'
    },
    {
        name: 'Marcelino',
        email:'marcelino@gmail.com',
        password: '6878',
        token: 'ewuheuwinbfjwbeuwfgsdvk'
    },
    {
        name: 'Natasha',
        email:'natash@gmail.com',
        password: '1698',
        token: 'suyqiydihbe3vtywevkdasi'
    }
 ]


const getUserAuthenticated = (users) =>{ //armazena os objetos
    let usuarioAutenticado={}; 
    users.map((recebe)=> { //mapea os itens q vem do usuário
        if(users.email === recebe.email && users.senha === recebe.senha){
            usuarioAutenticado = recebe
        }
    })
 return usuarioAutenticado
}

const getUsers = () =>{
     return usuario // retorna todos os usuários
}


export { getUsers, getUserAuthenticated };
