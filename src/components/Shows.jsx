import { Button } from 'antd'
import { Link } from 'react-router-dom'
import usersService from '../services/userapi'
import { useEffect } from 'react'


function Shows({data}) {
  data.performances.map((p)=>{useEffect(() => {
    const fetchData = async () => {
      const response = await usersService.getShow(p._id)
      console.log(response)
    }
    fetchData()

  }, [])})

  return (
    <li style={{color: '#ffffff'}}>
      {JSON.stringify(data)}
    </li>
  )
}

export default Shows