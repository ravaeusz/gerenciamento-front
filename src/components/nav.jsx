import Link from "next/link"
import Image from "next/image"

import { useDispatch, useSelector} from 'react-redux'



export default function Nav(){

const currentUser = useSelector((state) => state.user.currentUser);
const isLoggedIn = useSelector(state => state.user.isLoggedIn);


const dispatch = useDispatch()

function handleLogout(){
    dispatch({
        type: 'user/logout'
        
    })
}

    return(
        <>
        <div className=" mx-auto my-0 items-center text-[#897CE8] font-bold flex flex-row justify-around bg-[#BCE8C2] p-3" >
        <Link href={'/'}> <Image src={'/logo-escola.png'} width={80} height={80} alt="logo" /> </Link>
        <h1 className="text-[24px] ml-15">Escola Oxford</h1>
        <div className="flex gap-3 text-[16px]">
        {isLoggedIn ? 
        <div className="flex flex-row gap-5">
        <h1>Bem vindo <span className="text-pink-400">{currentUser.email}</span></h1> 
        <button onClick={handleLogout}>Sair</button>
        </div>
        : 
        <Link href={'/login'}>Entrar / Registre-se</Link>} 
        </div>

        </div>
        </>
    )
}