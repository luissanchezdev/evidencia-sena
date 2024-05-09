import './App.css'
import { useState } from 'react'
import Notification from './components/Notification'

function App() {

  // Hooks para manejar los estados de los inputs y el mensaje de notificación
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  // Función para cambiár el estado tan pronto se cambia el valor del input username
  const handleUsername = (e) => {
    setUsername(e.target.value)
  }

  // Función para cambiár el estado tan pronto se cambia el valor del input password
  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  // Función para manejar el envió del formulario. Al dar click en el botón "Acceder", se actualizará el estado de la variable message, y este mensaje se pasara al componente Notificación el cuál lo mostrará
  const handleSubmit = (e) => {
    e.preventDefault()
    setMessage(`Datos enviados : username: ${username}, password : ${password} `)
    // Se establece una cuenta atrás para que el mensaje solo se muestre por 5000 milisegundos (5 segundos) y desaparezca
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
          { /* En el onSubmit se pasa el evento a la función handleSubmit */ }
          <form id='login-form' className='login-form' onSubmit={(e) => handleSubmit(e)}>
            <div className='group-input'>
              <label htmlFor='username' className='label' >
                Nombre de usuario
              </label>
              { /* Con el onChange podemos verficar los cambios en el input, para esto pasamos el evento a la función handleUsername  */ }
              <input onChange={(e) => handleUsername(e)} type='text' name='username' id='username' placeholder='aprendiz' className='input' value={username}/>
            </div>
            <div className='group-input'>
              <label htmlFor='password' className='label'>Contraseña</label>
              <input type='password' name="password" id='password' className='input' value={password} onChange={(e) => handlePassword(e)}/>
            </div>
            <button className='btn-send'>Acceder</button>
            { /* Al componente Notificación se le pasa la variable message como prop */ }
            <Notification message={message}/>
          </form>
        </div>
      </main>
    </>
  ) 
}

export default App
