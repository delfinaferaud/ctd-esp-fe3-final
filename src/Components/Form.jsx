import React, { useState }from "react";

const Form = () => {
  let [user,setUser]= useState({
    nombre:"", 
    mail:""
  })

  let [msg,setMsg]=useState(false)
  let [msg2,setMsg2]=useState(false)

  const handleSubmit=(e)=>{
    e.preventDefault()
    user.nombre.length <= 5 ? setMsg2(true):setMsg(true)
      console.log(
        '*Nombre:'+user.nombre +
        ' *Mail:' + user.mail
      )    
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input placeholder="Nombre completo" type='text' onChange={(e)=> setUser({...user,nombre:e.target.value})} name='nombre'/>
        <input placeholder="Mail" type='mail' required onChange={(e)=> setUser({...user,mail:e.target.value})} name='mail'/>
        <button>Enviar</button>
      </form>
      {msg2 && <p>Por favor verifique su información nuevamente</p>}
      {msg && <p>Gracias {user.nombre}, te contactaremos cuando antes vía mail</p>}
      
    </div>
  )
}


export default Form;
