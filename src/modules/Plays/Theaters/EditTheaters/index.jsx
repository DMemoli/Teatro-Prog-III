import { Spin } from 'antd'
import playsService from '../../../../services/playapi'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import UpdateTheater from '../../../../components/UpdateTheater'

function editTheaters() {
  const { id } = useParams()
  const [isLoading, setIsLoading] = useState(false)
  const [sala, setTheaterInfo] = useState({})
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      const response = await playsService.getTheaterById(id)
      console.log(response)
      setTheaterInfo(response)
      setIsLoading(false)
    }
    fetchData()
  }, [])
  return (
    <>
      {isLoading ? (
        <Spin tip="Cargando info del usuario..." size="large">
          <div className="content" />
        </Spin>
      ) : (
        <div>
          
          <UpdateTheater data={{sala}} />
        </div>
        
      )}
    </>
  )
}

export default editTheaters
//<pre>{JSON.stringify(userInfo, null, 2)}</pre>