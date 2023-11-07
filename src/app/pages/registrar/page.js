
'use client'

import "./style.css"
import { postUser } from '@/app/functions/handlerAcessAPI';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



export default function Registrar() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password:'',
  });
  const { push } = useRouter();

    const handleFormSubmit = async (event) => {
      e.preventDefault();
    try {
      await postUser(user);
      return push("/pages/dashboard");
    } catch{
      return toast.error("Erro")
    }
      
 }
}

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <div class="form"> </div>
      <h1>Registrar</h1>
      <div className="input">
      <input 
          type="text"
          id="name"
          placeholder='Nome'
          onChange={(e) => {
            setUser({...user, name: e.target.value});
          }}
         ></input>
        <input
           type="text"
           id="email"
           placeholder='Email'
           onChange={(e) => {
             setUser({...user, email: e.target.value});
           }}
         ></input>
        <input
          placeholder='Senha'
          type='password'
          onChange={(e) => {
            setUser({...user, password: e.target.value});
          }}
        ></input>
        </div>
        <button class="button-1"  ><span class="text">Salvar</span></button>
        <button class="button-2"><span class="text"><a href="/pages/dashboard">Voltar</a></span></button>
      </form>
      <ToastContainer/>
    </div>
  );


export default Form;