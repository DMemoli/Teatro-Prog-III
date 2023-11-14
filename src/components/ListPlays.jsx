import { Button } from 'antd'
import { Link } from 'react-router-dom'
import playsService from '../services/playapi'


function Plays({data}) {
  //const id = url.split('/')[5]
  console.log("entro");
  console.log(data);
  return (
    <li>
      Obra: {data.name}{' '}
      Descripcion: {data.plot}
      <Link to={`/shows/${data.id}`}>
        <Button>Funciones</Button>
      </Link>
      <Link to={`/plays/edit/${data.id}`}>
        <Button>Editar</Button>
      </Link>
      <Link to="/usuarios" onClick={()=>playsService.deletePlay(data.id).then(() => {
            // Eliminación exitosa, recargar la página
            window.location.reload();
        })}>
        <Button >Borrar</Button>
    </Link>
    </li>
  )
}

export default Plays