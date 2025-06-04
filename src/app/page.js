'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useSelector } from 'react-redux';
import Login from './login/page';
import { getAlunos, deleteAluno } from '../services/api'

export default function Home() {

  const [alunos, setAlunos] = useState([]);

  const currentUser = useSelector((state) => state.user.currentUser);
  const token = useSelector((state) => state.user.token);
  const isLoggedIn = currentUser && currentUser.email

  useEffect(() => {
    if (token)
      fetchData()
  }
    , [token])

  async function fetchData() {
    try {
      const data = await getAlunos(token);
      setAlunos(data.alunos)
    }
    catch (e) { console.log(e); }
  }

  async function deleteData(key, token) {
    const data = await deleteAluno(key, token)
    console.log(data);
    await fetchData(token)

  }
  return (

    <>
      {isLoggedIn ? (
        <div>
          <h1 className='flex justify-center  mt-10 font-bold text-[#897CE8] text-[28px]'>Lista de Alunos</h1>
          <Link href={'/cadastro'}>
            <p className='flex justify-center  mt-3 font-bold text-[#87a58b]'>Cadastre um novo aluno</p>
          </Link>
          <div className=' flex w-[100% ] justify-center  mt-20 '>
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
                    <td className=' text-[#897CE8] pl-6 pb-3'><Link href={`/editar/${aluno.al_id}`}>Editar</Link></td>
                    <td><button onClick={() => { deleteData(aluno.al_id, currentUser.token) }} className='text-pink-500 cursor-pointer pl-6 pb-3'>Excluir</button></td>
                  </tr>))}
              </tbody>
            </table>
          </div>
        </div>)



        :
        (
          <Login />
        )}    </>
  );
}