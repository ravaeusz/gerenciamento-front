            export default function Register({onRegister,  setEmail, setSenha, setNome}){
                return(
            <form onSubmit={onRegister} className="flex flex-col items-center gap-2 my-20">
            <h1 className="text-[26px] text-[#897CE8] font-bold">Registrar</h1>
            <div className="my-5 mb-5 flex gap-3 flex-col">
            <label className="text-[18px] text-[#897CE8]" >Nome</label>
            <input 
            onChange={(e) => setNome(e.target.value)}
            type="text"
            name="nome" 
            id="nome-register" 
            className="bg-[#BCE8C2] hover:bg-[#897CE8] hover:text-[#fcf098]" />
            <label className="text-[18px] text-[#897CE8]" >Email</label>
            <input 
            type="text" 
            onChange={(e) => setEmail(e.target.value)}
            name="email" 
            id="email-register" 
            className="bg-[#BCE8C2] hover:bg-[#897CE8] hover:text-[#fcf098]" />
            <label className="text-[18px] text-[#897CE8]">Senha</label>
            <input 
            type="password" 
            name="senha" 
            onChange={(e) => setSenha(e.target.value)}
            id="senha-register" 
            className=" hover:bg-[#897CE8] hover:text-[#fcf098] bg-[#BCE8C2]"/>
            </div>
            <button  className=" hover:bg-[#897CE8] hover:text-[#fcf098] bg-[#BCE8C2] px-6 py-3 font-bold text-[18px] text-[#897CE8]">Enviar</button>
            </form>

            )
            }
