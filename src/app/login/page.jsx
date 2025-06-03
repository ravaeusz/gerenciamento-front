'use client'

import { useDispatch, useSelector } from 'react-redux'
import { postLogin, postRegister } from '../../services/api'
import { useState } from 'react'

import LoginUser from '../../components/login'
import Register from '../../components/register'
import { redirect } from 'next/navigation'

export default function Login() {

  const currentUser = useSelector(state => state.user.currentUser)
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);
  const token = useSelector(state => state.user.token)
  const mensagem = useSelector(state => state.user.mensagem)

  const dispatch = useDispatch()

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const data = await postLogin(email, senha)
      if (data !== "Usuario não cadastrado"){
        dispatch({
          type: 'user/login',
          payload: {
            email: email,
            token: data.token
          }
        })
      }
        else {
        dispatch({
          type: 'user/error',
          payload: {
            mensagem: data,
          }
        })
    }
  }
  catch (e) { console.log(e); }
}

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const data = await postRegister(nome, email, senha)
      if (data !== "Usuario ja cadastrado") {
        dispatch({
          type: 'user/register',
          payload: {
            email: email,
            token: data.token,
          }
        })
      } else {
        dispatch({
          type: 'user/error',
          payload: {
            mensagem: data,
          }
        })  
      }
    }
    catch (e) { console.log(e) }
  }
  if (isLoggedIn) {
    redirect('/')
  }

  return (
    <div className='flex flex-col items-center '>
      {mensagem.mensagem ? <div className='flex items-center mt-10 font-bold text-red-500 bg-red-200 p-3'> {mensagem.mensagem} </div> : <div></div> }      
      <div className='flex flex-rows gap-30'>
      <LoginUser
        onLogin={handleLogin}
        email={email}
        setEmail={setEmail}
        senha={senha}
        setSenha={setSenha} />

      <Register
        onRegister={handleRegister}
        email={email}
        setEmail={setEmail}
        senha={senha}
        setSenha={setSenha}
        nome={nome}
        setNome={setNome} />
        </div>
    </div>
  );
}
