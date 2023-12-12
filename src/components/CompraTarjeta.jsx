import React, { useState } from 'react';
import {
    AutoComplete,
    Button,
    Cascader,
    Checkbox,
    Col,
    Form,
    Input,
    InputNumber,
    Row,
    Select,
} from 'antd';
import usersService from '../services/userapi'
const { Option } = Select;
const roles = [
    {
        value: 'admin',
        label: 'Administrador',
    },
    {
        value: 'client',
        label: 'Cliente',
    },
];
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
function compraTarjeta(total) {
    const [form] = Form.useForm();
    const onFinish = (values) => {
        console.log('Received values of form: ', values);

        const fetchData = async () => {
            
            const response = await usersService.createUser(values)
            console.log(response)
        }
        fetchData()

        window.location.href = "/usuarios/list"
    };
    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select
                style={{
                    width: 70,
                }}
            >
                <Option value="54">+54</Option>
                <Option value="1">+1</Option>
            </Select>
        </Form.Item>
    );
   
    const [autoCompleteResult, setAutoCompleteResult] = useState([]);
    const onWebsiteChange = (value) => {
        if (!value) {
            setAutoCompleteResult([]);
        } else {
            setAutoCompleteResult(['.com', '.org', '.net'].map((domain) => `${value}${domain}`));
        }
    };

    return (
        <>
        <h1>Pago con tarjeta de credito | Total: </h1>
        <Form
            {...formItemLayout}
            form={form}
            name="compra"
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
                name="CardNumber"
                label="Numero de tarjeta de credito"
                rules={[
                    {
                        type: 'text',
                        message: 'The input is not valid credit card!',
                    },
                    {
                        required: true,
                        message: 'Please input your credit card',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                name="name"
                label="Nombre Completo"
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
                name="expiraci"
                label="Fecha de Vencimiento"
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
                name="securityCode"
                label="Codigo de seguridad"
                rules={[
                    {
                        required: true,
                        message: 'Please input your code!',
                    },
                ]}
                hasFeedback
            >
                <Input.Password />
            </Form.Item>

        </Form>
        </>
    );
};
export default compraTarjeta;