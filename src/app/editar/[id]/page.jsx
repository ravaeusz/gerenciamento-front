'use client'

import {useState, useEffect} from 'react'
import {redirect, useParams, useRouter  } from 'next/navigation'
import { useSelector } from 'react-redux';
import {getById, updateAluno} from '../../../services/api';


export default function Editar(){

    const {id} = useParams()
    const token = useSelector((state) => state.user.token);

    const [nome, setNome] = useState('')
    const [sobrenome, setSobrenome] = useState('')
    const [peso, setPeso] = useState('')
    const [telefone, setTelefone] = useState('')

     useEffect(() => {
    async function fetchId() {
      try {
        const data = await getById(id, token)
        
        setNome(data.result[0].al_nome )
        setSobrenome(data.result[0].al_sobrenome)
        setPeso(data.result[0].al_peso )
        setTelefone(data.result[0].al_telefone )
      } catch (e) {
        console.error(e)
      }
    }

    if (id && token) {
      fetchId()
    }
  }, [id, token])


  async function fetchUpdate(){;
    try{
        const response = await updateAluno(id, nome, sobrenome, peso, telefone, token)
        console.log(response);    
    }catch(e){
        console.log(e);   
    }finally{
    redirect('/')
    }
  }
    
    return(
        <div className=' mt-20'>
        <h1 className='font-bold text-[30px] flex justify-center text-[#897CE8] ' >Edite o aluno {id}</h1>
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
                <div className='flex justify-center'>
                <button onClick={fetchUpdate} className='text-white font-bold text-[20px] flex justify-center cursor-pointer py-3 px-17 bg-[#627c66] mt-5'>Editar</button>
                </div>
                </div>
    )
}