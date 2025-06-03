export default function LoginUser({ onLogin, setEmail, setSenha, }) {
  return (
    <form onSubmit={onLogin} className="flex flex-col items-center gap-5 my-20">
      <h1 className="text-[26px] text-[#897CE8] font-bold">Entrar</h1>
      <div className="my-5 mb-5 flex gap-5 flex-col">
        <label className="text-[18px] text-[#897CE8]">Email</label>
        <input
          type="text"
          name="email"
          id="email-login"
          onChange={(e) => setEmail(e.target.value)}
          className="hover:bg-[#897CE8] hover:text-[#fcf098] bg-[#BCE8C2] focus:bg-[#897CE8] focus:text-[#fcf098]"
        />
        <label className="text-[18px] text-[#897CE8]">Senha</label>
        <input
          type="password"
          name="senha"
          id="senha-login"
          onChange={(e) => setSenha(e.target.value)}
          className="bg-[#BCE8C2] hover:bg-[#897CE8] hover:text-[#fcf098]"
        />
      </div>
      <button
        type="submit"
        className="hover:bg-[#897CE8] hover:text-[#fcf098] bg-[#BCE8C2] px-6 py-3 font-bold text-[18px] text-[#897CE8]"
      >
        Enviar
      </button>
    </form>
  )
}
