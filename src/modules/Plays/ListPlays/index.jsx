import { useEffect, useState } from 'react'
import { Spin } from 'antd'
import playsService from '../../../services/playapi'
import Plays from '../../../components/ListPlays'



function ListPlays() {
  const [isLoading, setIsLoading] = useState(false)
  const [plays, setPlays] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      const response = await playsService.getPlays()
      console.log(response)
      setPlays(response)
      setIsLoading(false)
    }
    fetchData()
    console.log(JSON.stringify(plays))
  }, [])
  return (
    <>
      <h1>Listado de obras</h1>
      {isLoading ? (
        <Spin tip="Cargando listado..." size="large">
          <div className="content" />
        </Spin>
      ) : ( 
          plays.map((x) =><Plays data={{name: x.name, plot:x.plot, cast:x.cast, id:x._id}}/>) 

)}
    
    </>
  )
}

export default ListPlays
