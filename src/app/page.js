'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useSelector } from 'react-redux';
import Login from './login/page';
import { deleteAluno, getByTurma } from '../services/api'

export default function Home() {

  const [alunos, setAlunos] = useState([]);
  const [turma, setTurma] = useState('')

  const currentUser = useSelector((state) => state.user.currentUser);
  const token = useSelector((state) => state.user.token);
  const isLoggedIn = currentUser && currentUser.email


  async function fetchData(turma) {
    try {
      const data = await getByTurma(turma, token);
      setAlunos(data.result)
      setTurma(turma)
    }
    catch (e) { console.log(e); }
  }

  async function deleteData(key, token) {
    await deleteAluno(key, token)
    await fetchData(turma)

  }


  return (

    <>
      {isLoggedIn ? (
        <div>
          <h1 className='flex justify-center  mt-10 font-bold text-[#897CE8] text-[28px]'>Lista de Alunos</h1>
          <Link href={'/cadastro'}>
            <p className='flex justify-center  mt-3 font-bold text-[#87a58b]'>Cadastre um novo aluno</p>
          </Link>
          <div className='flex justify-center gap-5 mt-10'> 
            <button onClick={(e) => {fetchData(e.target.value)}} value='A' className='bg-[#87a58b] text-white p-5 hover:bg-[#897CE8] cursor-pointer'>Turma A</button>
            <button onClick={(e) => {fetchData(e.target.value)}} value='B' className='bg-[#87a58b] text-white p-5 hover:bg-[#897CE8] cursor-pointer'>Turma B</button>
            <button onClick={(e) => {fetchData(e.target.value)}} value='C' className='bg-[#87a58b] text-white p-5 hover:bg-[#897CE8] cursor-pointer'>Turma C</button>
            <button onClick={(e) => {fetchData(e.target.value)}} value="D" className='bg-[#87a58b] text-white p-5 hover:bg-[#897CE8] cursor-pointer'>Turma D</button>
          </div>
          <div className='flex justify-center mt-10'>
            <h1 className='text-[20px] font-bold text-[#897CE8]'>Alunos da turma {turma}</h1>
          </div>
          <div className=' flex w-[100% ] justify-center  mt-10 '>
            <table className='text-[20px] font-sans'>
              <thead className='text-[#897CE8]'>
                <tr >
                  <th className='pl-6 pb-6'>Nome</th>
                  <th className='pl-6 pb-6'>Sobrenome</th>
                  <th className='pl-6 pb-6'>Telefone</th>
                  <th className='pl-6 pb-6'>Peso</th>
                  <th className='pl-6 pb-6'>Turma</th>
                </tr>
              </thead>
              <tbody className='text-[#87a58b]'>
                {alunos.map((aluno) => (
                  <tr key={aluno.al_id}>
                    <td className='pl-6 pb-3'>{aluno.al_nome}</td>
                    <td className='pl-6 pb-3'>{aluno.al_sobrenome}</td>
                    <td className='pl-6 pb-3'>{aluno.al_telefone}</td>
                    <td className='pl-6 pb-3'>{aluno.al_peso}kg</td>
                    <td className='pl-6 pb-3'>{aluno.al_turma}</td>
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