import { useState } from 'react'
import './App.css'

function App() {
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")

  function handleEmail(evento){
    console.log(evento.target.value)
  }

  function handleSenha(evento){
    console.log(evento.target.value)
  }

  function handleSubmit(evento){
    alert(`
      Email: ${email}
      Senha: ${senha}
    `)
  }

  return (
    <>
      <header>
        <h1>Login</h1>
      </header>

    <main>
      
    <form action="" onSubmit={handleSubmit}>

<div>
  <label htmlFor="email">Email</label>
    <input type="email" id='email' placeholder='insira seu email' onChange={handleEmail} />
</div>

<div>
  <label htmlFor="">Senha</label>
  <input type="password" id='senha' placeholder='insira sua senha' onChange={handleSenha} />
  </div>

  <button>Enviar</button>

</form>

    </main>
    
    </>
  )
}

export default App
