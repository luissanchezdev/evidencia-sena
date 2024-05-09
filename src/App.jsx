import './App.css'
import { useState } from 'react'
import Notification from './components/Notification'

function App() {
  
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const handleUsername = (e) => {
    setUsername(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setMessage(`Datos enviados : username: ${username}, password : ${password} `)
    setTimeout(() => {
      setMessage('')
    },5000)
    console.log('submit')
  }



  return (
    <>
      <main className='main'>
        <div className='login-card'>
          <h2 className='h2'>Inicio de sesión</h2>
          <form id='login-form' className='login-form' onSubmit={(e) => handleSubmit(e)}>
            <div className='group-input'>
              <label htmlFor='username' className='label' >
                Nombre de usuario
              </label>
              <input onChange={(e) => handleUsername(e)} type='text' name='username' id='username' placeholder='aprendiz' className='input' value={username}/>
            </div>
            <div className='group-input'>
              <label htmlFor='password' className='label'>Contraseña</label>
              <input type='password' name="password" id='password' className='input' value={password} onChange={(e) => handlePassword(e)}/>
            </div>
            <button className='btn-send'>Acceder</button>
            <Notification message={message}/>
          </form>
        </div>
      </main>
    </>
  ) 
}

export default App
