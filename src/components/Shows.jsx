import { Button, Select, Form } from 'antd'
import { Link } from 'react-router-dom'
import playsService from '../services/playapi'
import { useEffect, useState } from 'react'

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};


function Shows({ data }) {
  const [funciones, setFunciones] = useState([])
  const [opciones, setOpciones] = useState("")
  console.log(data.play.performances)
  useEffect(() => {
    (data && data.play.performances) ?

      data.play.performances.map((p) => {
        const fetchData = async () => {

          const response = await playsService.getShow(p)
          console.log(response)
          return response

        }
        let resp = fetchData()
        resp.then(
          (resp) => {
            setFunciones(resp)
            let shows = [];
            resp.map((s) => {
              shows.push({
                value: s._id,
                label: s.name,
              })
            })
            setOpciones(shows)
            console.log(shows)
          }
        )
      }) : console.log("No existen funciones");

  }, [])
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    const data = { 'date': values['date'].format(), 'theater_hall': values['theater_hall'], 'seats': theaters[0].seats }
    console.log(data)
    const fetchData = async () => {
      const response = await playsService.createShow(id.data, data)
      console.log(response)

    }
    fetchData()
    console.log(id.data)
    window.location.href = "/shows/" + id.data


  };

  return (
    <Form
      name="time_related_controls"
      {...formItemLayout}
      onFinish={onFinish}
      style={{
        maxWidth: 600,
      }}
    >

      <Form.Item name='theater_hall' label="Sala:" >
        <Select
          showSearch
          placeholder="Sala"
          optionFilterProp="children"
          options={opciones}
        />
      </Form.Item>
      <Form.Item
        wrapperCol={{
          xs: {
            span: 24,
            offset: 0,
          },
          sm: {
            span: 16,
            offset: 8,
          },
        }}
      >
        <Button type="primary" htmlType="submit">
          Crear show
        </Button>
      </Form.Item>

    </Form>)

}

export default Shows