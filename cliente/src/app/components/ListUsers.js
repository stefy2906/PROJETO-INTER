export default async function ListUsers({user}) {
    await new Promise((resolve) => setTimeout(resolve,5000));
   
    return(
        <div>
       
         {user?.map ((user, index )=>
           <p key={index}>{user.nome} </p>
       ) }
        
        </div>
    );
         }