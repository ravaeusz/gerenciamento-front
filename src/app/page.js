'use client'

import {useState, useEffect} from 'react'
import Link from 'next/link'
import { useSelector } from 'react-redux';
import Login from './login/page';
import {getAlunos} from '../services/api'

export default function Home() {

const [alunos, setAlunos] = useState([]);

const currentUser = useSelector((state) => state.user.currentUser);
const token = useSelector((state) => state.user.token);
const isLoggedIn = currentUser && currentUser.email

useEffect(() =>{
  async function fetchDAta(){
  try{
      const data = await getAlunos(currentUser.token);
      setAlunos(data.alunos)  
    }
    catch(e){ console.log(e);    }
  }

  fetchDAta(currentUser.token)
}
,[currentUser.token])


  return (

    <>
      {isLoggedIn ? (
      <div>
      <h1 className='flex justify-center mr-30 mt-10 font-bold text-[#897CE8] text-[28px]'>Lista de Alunos</h1>
      <Link href={'/'}>
      <p className='flex justify-center mr-30 mt-3 font-bold text-[#87a58b]'>Cadastre um novo aluno</p>
      </Link>
      <div className=' flex w-[100% ] justify-center mr-30 mt-20 '>
      <table className='text-[20px] font-sans'>
      <thead className='text-[#897CE8]'>
        <tr >
          <th className='pl-6 pb-6'>Nome</th>
          <th className='pl-6 pb-6'>Sobrenome</th>
          <th className='pl-6 pb-6'>Telefone</th>
          <th className='pl-6 pb-6'>Peso</th>
        </tr>
      </thead>
      <tbody className='text-[#87a58b]'>
      {alunos.map((aluno) => (
      <tr key={aluno.al_id}>
      <td className='pl-6 pb-3'>{aluno.al_nome}</td>
      <td className='pl-6 pb-3'>{aluno.al_sobrenome}</td>
      <td className='pl-6 pb-3'>{aluno.al_telefone}</td>
      <td className='pl-6 pb-3'>{aluno.al_peso}kg</td>
      <td className='pl-6 pb-3'><a href='#'>Editar</a></td>
      <td className='cursor-pointer pl-6 pb-3'><button>Excluir</button></td>
      </tr>))}
      </tbody>
      </table>
      </div>
      </div> )



      :
      (
        <Login />
      )}    </>
  );
}