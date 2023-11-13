import { useEffect, useState } from 'react'
import { Spin } from 'antd'
import usersService from '../../../services/userapi'
import ListUsers from '../../../components/ListUsers'


function ListarUsuarios() {
  const [isLoading, setIsLoading] = useState(false)
  const [usuarios, setUsuarios] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      const response = await usersService.getUsers()
      console.log(response)
      setUsuarios(response)
      setIsLoading(false)
    }
    fetchData()
    console.log(JSON.stringify(usuarios))
  }, [])
  return (
    <>
      <h1>Listado de usuarios</h1>
      {isLoading ? (
        <Spin tip="Cargando listado..." size="large">
          <div className="content" />
        </Spin>
      ) : ( 
          usuarios.map((x) =><ListUsers data={{nombre: x.firstName, apellido:x.lastName, rol:x.role.name, id:x._id}}/>) 

)}
    </>
  )
}

export default ListarUsuarios
