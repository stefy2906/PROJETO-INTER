import { getUsers } from "@/app/functions/handlerAcessAPI";
import {Suspense}  from 'react';
import ListUsers from "@/app/components/ListUsers";

export default async function Dashboard() {
   const users = getUsers(); //pega todos os usuários q está no handle
    return (
        <div>
           <Suspense fallback={<p>Carregando...</p>}>
             <ListUsers users={users}/>
           </Suspense>
        </div>
    );
};