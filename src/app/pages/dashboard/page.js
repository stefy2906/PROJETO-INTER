import { getUsers } from "@/app/functions/handlerAcessAPI";

export default async function Dashboard() {
   const item = getUsers(); //pega todos os usuários q está no handle
    return (
        <div>
            <h1>Dashboard</h1>
            {item.map(item =>{ //mapea os itens
                return(
                    <div>
                        <p>{item.nome}</p>
                        <p>{item.token}</p>
                        <p>{item.email}</p>
                        <p>{item.senha}</p>
                    </div>
                )
            })}
        </div>
    );
};