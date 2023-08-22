import { getUsers } from "@/app/functions/handlerAcessAPI";
import {Testanto}  from 'react';

export default async function Dashboard() {
   const item = getUsers(); //pega todos os usuários q está no handle
    return (
        <div>
           <Testanto fallback={<p>Carregando...</p>}>
             <ListUsers users={users}/>
           </Testanto>
        </div>
    );
};