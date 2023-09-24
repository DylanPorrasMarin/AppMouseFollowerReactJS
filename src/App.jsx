
import { useEffect, useState } from 'react'
import './App.css'



const FollowMouse = ()=>{

  const [enabled, setEnabled] = useState(false)
  const [position, setPosition]  = useState({x: 0, y: 0})
  //El useEffect siempre tiene que estar en el cuepro del componente, y no puede declararse dentro de un if o alguna estructua de ciclo

  useEffect(()=>{
    console.log('effect')

    const handleMove = (event)=>{
      const {clientX, clientY} = event
      console.log('handleMove', {clientX, clientY})
      setPosition({x: clientX, y: clientY})
    }

    if(enabled){
      window.addEventListener('pointermove', handleMove)
    }

    //Para poder desactivar el useEffect al darle el boton se tiene que hacer un cleanEffect, y se le indica al hacer el return 
    return ()=>{
      //Limpiar elementos y su evento para evitar suscripciones repetidas del evento
      window.removeEventListener('pointermove', handleMove)
    }

  },[enabled])

  return (
    <>
    <main>
      <div style={{
        position: 'absolute',
        backgroundColor:'rgba(0,0,0,0.5)',
        border: '1px solid #fff',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -25,
        top: -25,
        width: 40,
        height: 40,
        borderRadius: '50%',
        transform: `translate(${position.x}px, ${position.y}px)`
      }}>
      </div>
      <h3>Hola</h3>
      <button onClick={()=>{setEnabled(!enabled)}}>{enabled? 'Desactivar' : 'Activar'} seguir puntero</button>
    </main>
    </>
  )

}

function App() {

  return(
    <main>
      <FollowMouse/>
    </main>
  )
}

export default App
