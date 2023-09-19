'use client'
import Cookies from "js-cookie"
import { useRouter } from "next/navigation";

export default function RootLayout() {
  function sair () {
    Cookies.remove('token')
    refresh()
  }
  const {refresh} = useRouter();
  return (
    <button onClick={sair} class="excluir" role="button" ><span class="text">Excluir</span></button>
  )
}