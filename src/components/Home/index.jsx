import React, { useState } from 'react';
import './style.css'
import { Assinatura } from '../Assinatura'


export function Home() {
  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [assinatura, setAssinatura] = useState([]);

  const addUsuario = () => {
    const usuario = {
      nome: nome,
      cargo: cargo,
      email: email,
      telefone: telefone
    }
    if (nome== "") {
      alert("Digite seu Nome completo!")
    } 
    else if (cargo == "") {
      alert("Digite seu Cargo!")
    } 
    else if (email== "") {
      alert("Digite seu Email!")
    } 
    else if (telefone == "") {
      alert("Digite seu Telefone/Ramal!")
    } 
    else setAssinatura([usuario])

  }


  return (
    <div className="App container flex-lg-column">
      <div>
        <div className='mx-auto'>
          <header className='container-fluid d-flex justify-content-center'>
            <h1>LOGO</h1>
          </header>
        </div>
        <div className='form-total'>

          <p className='th'>
            Assinatura Padrão
          </p>

          <div className='form-input'>
            <form>

              <div className='form-group'>
                <strong>Nome completo</strong>
                <input type="text"
                  className="user-input"
                  id="name"
                  placeholder="Kauan Reis"
                  onChange={(e) => setNome(e.target.value)}
                />
              </div>

              <div className="form-group">
                <strong>Cargo</strong>
                <input type="text"
                  className="user-input"
                  id="work"
                  placeholder="Informatica"
                  onChange={(e) => setCargo(e.target.value)}
                />
              </div>

              <div className="form-group">
                <strong>E-mail</strong>
                <input type="text"
                  className="user-input"
                  id="email"
                  placeholder="informatica@outlook.com.br"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="form-group">
                <strong>Telefone/Ramal</strong>
                <input type="text"
                  className="user-input"
                  id="phone"
                  placeholder="+55(41) 3003-7070"
                  onChange={(e) => setTelefone(e.target.value)}
                />
              </div>

            </form>
            <button onClick={addUsuario} className='botao-gerar'>Gerar</button>
          </div>
        </div>

      </div>
      {
        assinatura.map((user) => <Assinatura
          key={user}
          nome={user.nome}
          cargo={user.cargo}
          email={user.email}
          telefone={user.telefone} />)
      }
    </div>
  )
}


