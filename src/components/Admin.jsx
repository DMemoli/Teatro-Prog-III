import CreatePlay from "./CreatePlay"
import ListPlays from "../modules/Plays/ListPlays"
import CreateUser from "./CreateUser"
import ListarUsuarios from "../modules/Usuarios/ListarUsuarios"
import CreateTheater from "./CreateTheater";
import ListTheaters from "../modules/Plays/Theaters"
import { Divider, Tabs } from 'antd';


function Admin() {
  const items = [
    {
      key: '1',
      label: 'Obras',
      children: <>
        <Divider orientation="left">Listado de obras</Divider>
        <ListPlays />
        <Divider orientation="left">Crear Obra</Divider>
        <CreatePlay />
      </>,
    },
    {
      key: '2',
      label: 'Salas',
      children: <>
        <Divider orientation="left">Listado de Salas</Divider>
        <ListTheaters />
        <Divider orientation="left">Crear Sala</Divider>
        <CreateTheater />
      </>,
    },
    {
      key: '3',
      label: 'Usuarios',
      children: <>
      <Divider orientation="left">Listado de Usuarios</Divider>
      <ListarUsuarios />
      <Divider orientation="left">Crear Usuario</Divider>
      <CreateUser />
    </>,
    },
  ];


  return (
    <>
      <Divider>Administrador</Divider>
      <Tabs
        type="card"
        items={items}
      />
    </>
  )
}

export default Admin
