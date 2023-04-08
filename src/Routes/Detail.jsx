import React from 'react'
import { useParams } from 'react-router-dom'
import { useGlobalStates } from '../Components/utils/global.context.jsx'


const Detail = () => {
const{data}=useGlobalStates()
const params=useParams()
  

  let result = data?.find(item => item.id === parseInt(params.id))
    console.log(result)
  
  return (
    <>
      <h1>Dentista {result?.id} </h1>
      <table>
        <tr>
          <th>Nombre</th>
          <th>Mail</th>
          <th>Telefono</th>
          <th>Sitio web</th>
        </tr>
        <tr>
          <td>{result?.name}</td>
          <td>{result?.mail}</td>
          <td>{result?.phone}</td>
          <td>{result?.website}</td>
        </tr>
      </table>
      </>
  )
}

export default Detail