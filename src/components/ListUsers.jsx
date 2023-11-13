import { Button } from 'antd'
import { Link } from 'react-router-dom'
import usersService from '../services/userapi'


function Users({data}) {

  return (
    <li>
      Nombre: {data.apellido}{' '}
      ROL: {data.rol}
      <Link to={`/usuarios/editar/${data.id}`}>
        <Button>Editar</Button>
      </Link>
      <Link to="/usuarios/list" onClick={()=>usersService.deleteUser(data.id).then(() => {
            // Eliminación exitosa, recargar la página
            window.location.reload();
        })}>
        <Button >Borrar</Button>
    </Link>
    </li>
  )
}

export default Users