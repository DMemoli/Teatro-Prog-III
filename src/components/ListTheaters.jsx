import { Button, Collapse } from 'antd'
import { Link } from 'react-router-dom'
import playsService from '../services/playapi'


function Theaters({data}) {
  //const id = url.split('/')[5]
  console.log(data);
  var items = [];
  data.map((theater)=>{items.push({
    label: theater.name,
    children: 
    <p>
      <li>{theater.seats.map((s)=>{
        return(
        <p>Fila: {s.row} Columna: {s.column}</p>
        )
      })}</li>
    <li>

      <Link to={`/theaters/edit/${theater._id}`}>
        <Button>Editar</Button>
      </Link>
      <Link to="/usuarios" onClick={()=>playsService.deleteTheater(theater._id).then(() => {
            // Eliminación exitosa, recargar la página
            window.location.reload();
        })}>
        <Button >Borrar</Button>
    </Link></li></p>
  })})


  return (
    <>
    <Collapse accordion items={items} />
    </>
    
  )
}

export default Theaters