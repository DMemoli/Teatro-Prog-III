import React, { useState } from 'react';
import {
    Button,
    Form,
    Input,
    Upload,
} from 'antd';
import {
    UploadOutlined,
  } from '@ant-design/icons'
import playsService from '../services/playapi'
import TextArea from 'antd/es/input/TextArea';

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
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};
function createPlay() {
    const [form] = Form.useForm();
    const onFinish = (values) => {
        console.log('Received values of form: ', values);

        const fetchData = async () => {

            const response = await playsService.createPlay(values)
            console.log(response)
        }
        fetchData()

        window.location.href = "/usuarios"
    };


    return (
        <Form
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={onFinish}
            initialValues={{
                //email: datosIniciales.data.email,
                //firstName: datosIniciales.data.firstName,
                //lastName: datosIniciales.data.lastName,
                //role: JSON.stringify(datosIniciales.data.role)

            }}
            style={{
                maxWidth: 600,
            }}
            scrollToFirstError
        >

            <Form.Item
                name="name"
                label="Nombre"
                rules={[
                    {
                        type: 'text'
                    },
                    {
                        required: true,
                        message: 'Please input your name',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                name="plot"
                label="Descripción"
                rules={[
                    {
                        type: 'text'
                    },
                    {
                        required: true,
                        message: 'Please input your plot',
                    },
                ]}
            >
                <TextArea rows={4} />
            </Form.Item>

            <Form.Item
                name="cast"
                label="Elenco"
                rules={[
                    {
                        type: 'text'
                    },
                    {
                        required: true,
                        message: 'Please input your plot',
                    },
                ]}
            >
                <TextArea rows={3} />
            </Form.Item>
            <Form.Item
                name="image"
                label="Imagen"
                valuePropName="fileList"
            >
                <Upload name="logo" action="/upload.do" listType="picture">
                    <Button icon={<UploadOutlined />}>Click to upload</Button>
                </Upload>
            </Form.Item>

            <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit">
                    Crear Obra
                </Button>
            </Form.Item>
        </Form>
    );
};
export default createPlay;