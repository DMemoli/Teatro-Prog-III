import CreatePlay from "./CreatePlay"
import ListPlays from "../modules/Plays/ListPlays"
import { Divider } from 'antd';

function Admin() {
  return (
    <>
    <Divider>Administrador</Divider>
    <Divider orientation="left">Obras:</Divider>
    <ListPlays/>
    <Divider orientation="left">Crear Obra</Divider>
    <CreatePlay/>
    </>
  )
}

export default Admin
