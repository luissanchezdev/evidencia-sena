import React from 'react'

function Notification({message}) {
  return (
    <>
    { /* La variable message que llega desde el componete App, es validada, de tal forma que sí su valor es undefined, o simplemente una cadena vaciá el componente no se mostrará */ }
      { (message) && (
        <div className='flex flex-col justify-start items-center text-white text-sm bg-secondary rounded-md p-2 w-full transition-all ease-out  duration-200'>
          <p className='w-full rounded-md'>Mensaje : { message }</p>
        </div>
      ) }
    </>
  )
}

export default Notification