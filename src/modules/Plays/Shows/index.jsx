import { useEffect, useState } from 'react'
import { Spin, DatePicker } from 'antd'
import playsService from '../../../services/playapi'
import { useParams } from 'react-router-dom'
import Shows from '../../../components/ListPlays'
import CreateShow from '../../../components/createShow'



function ListShows() {
  const { id } = useParams()
  const [isLoading, setIsLoading] = useState(false)
  const [play, setPlay] = useState()
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      const response = await playsService.getPlayById(id)
      console.log(response)
      setPlay(response)
      setIsLoading(false)
    }
    fetchData()
    console.log(JSON.stringify(play))
  }, [])
    const onChange = () =>{

    }
    const onOk = (value) => {
      console.log('onOk: ', value);
    };
   
  return (
    <>
      {JSON.stringify(play)}
      {(play && play.performances)?play.performances.map((f)=> {"Hola"+f}):"No tiene"}
      <CreateShow data={id}/>

    
    </>
  )
}

export default ListShows
