'use client'

import { useSelector } from 'react-redux';
import {useState} from 'react'
import {createAluno} from '../../services/api'
import {redirect} from 'next/navigation'

export default function Cadastro(){

    const [nome, setNome] = useState('')
    const [sobrenome, setSobrenome] = useState('')
    const [peso, setPeso] = useState('')
    const [telefone, setTelefone] = useState('')
    const [turma, setTurma] = useState('')


    const currentUser = useSelector((state) => state.user.currentUser);
    const token = useSelector((state) => state.user.token);

    async function fetchCreate(){
        try{
            const data = await createAluno(nome, sobrenome, peso, telefone, turma, token)
            console.log(data);

            setNome('')
            setSobrenome('')
            setPeso('')
            setTelefone('')
            setTurma('')
        }catch(e){console.log(e);}
        finally{
            redirect('/')
            }
    }

    return(
        <div className=' mt-20'>
            <h1 className='font-bold text-[30px] mt-10 flex justify-center text-[#897CE8] ' >Cadastre um novo usuário</h1>
            <div className='flex justify-center gap-7'>
                <div className='flex flex-col items-center mt-10 gap-2'>
                <label className='font-bold text-[#627c66] text-[20px]'>Nome</label>
                <input className='border-1 p-2 text-[18px]' 
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                type="text" 
                name="nome" 
                id="nome" />
                <label className='font-bold text-[#627c66] text-[20px]'>Sobrenome</label>
                <input className='border-1 p-2 text-[18px]' 
                value={sobrenome}
                onChange={(e) => setSobrenome(e.target.value)}
                type="text" 
                name="sobrenome" 
                id="sobrenome" />
                </div>
                <div className='flex flex-col items-center mt-10 gap-2'>
                <label className='font-bold text-[#627c66] text-[20px]'>Peso</label>
                <input className='border-1 p-2 text-[18px]'
                value={peso} 
                onChange={(e) => setPeso(e.target.value)}
                type="text" 
                name="peso" 
                id="peso" />
                <label className='font-bold text-[#627c66] text-[20px]'>Telefone</label>
                <input className='border-1 p-2 text-[18px]' 
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
                type="text" 
                name="telefone" 
                id="telefone" />
                </div>
                </div>
                <div className='flex justify-center gap-7'>
                    <div className='flex flex-col text-center justify-center'>
                    <label className='font-bold text-[#627c66] text-[20px]'>Turma</label>
                    <input className='border-1 p-2 text-[18px]' 
                    value={turma}
                    onChange={(e) => setTurma(e.target.value)}
                    type="text" 
                    name="turma" 
                    id="turma" />
                    </div>
                    <div className='flex justify-center'>
                    <button onClick={fetchCreate} className='hover:bg-[#897CE8] text-white font-bold text-[20px] flex justify-center cursor-pointer px-13 py-3 bg-[#627c66] mt-5'>CADASTRAR</button>
                    </div>
                    </div>
                </div>
    )
}