
import React from 'react';
import { CloseOutlined } from '@ant-design/icons';
import { Button, Card, Form, Input, Space, Typography, Select } from 'antd';
import playsService from '../services/playapi';

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
function createTheater() {
    const [form] = Form.useForm();
    const onFinish = (values) => {
        console.log('Received values of form: ', values.sala[0]);

        const fetchData = async () => {

            const response = await playsService.createTheater(values.sala[0])
            console.log(response)
        }
        fetchData()
        
        window.location.reload();

    };
    return (
        
        <Form
            labelCol={{
                span: 6,
            }}
            wrapperCol={{
                span: 18,
            }}
            form={form}
            onFinish={onFinish}
            name="dynamic_form_complex"
            style={{
                maxWidth: 600,
            }}
            autoComplete="off"
            initialValues={{
                sala: [{}],
            }}
        >
            <Form.List name="sala">
                {(fields, { add, remove }) => (
                    <div
                        style={{
                            display: 'flex',
                            rowGap: 16,
                            flexDirection: 'column',
                        }}
                    >
                        {fields.map((field) => (
                            <Card
                                size="small"
                                title={`Item ${field.name + 1}`}
                                key={field.key}
                            >
                                <Form.Item label="Nombre de la sala" name={[field.name, 'name']}>
                                    <Input />
                                </Form.Item>

                                {/* Nest Form.List */}
                                <Form.Item label="Asientos">
                                    <Form.List name={[field.name, 'seats']}>
                                        {(subFields, subOpt) => (
                                            <div
                                                style={{
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    rowGap: 16,
                                                }}
                                            >
                                                {subFields.map((subField) => (
                                                    <Space key={subField.key}>
                                                        <Form.Item noStyle name={[subField.name, 'row']}>
                                                            <Input placeholder="Fila" />
                                                        </Form.Item>
                                                        <Form.Item noStyle name={[subField.name, 'column']}>
                                                            <Input placeholder="Columna" />
                                                        </Form.Item>
                                                        <Form.Item noStyle name={[subField.name, 'type']}>
                                                            <Select
                                                                showSearch
                                                                placeholder="Tipo de asiento"
                                                                optionFilterProp="children"
                                                                options={[
                                                                    {
                                                                        value: 'platea_baja',
                                                                        label: 'Platea Baja',
                                                                    },
                                                                    {
                                                                        value: 'platea_alta',
                                                                        label: 'Platea Alta',
                                                                    },
                                                                    {
                                                                        value: 'general',
                                                                        label: 'General',
                                                                    },
                                                                ]}
                                                            />
                                                        </Form.Item>
                                                        <Form.Item noStyle name={[subField.name, 'available']} value={[subField.value, "true"]}>
                                                        </Form.Item>
                                                        <CloseOutlined
                                                            onClick={() => {
                                                                subOpt.remove(subField.name);
                                                            }}
                                                        />
                                                    </Space>
                                                ))}
                                                <Button type="dashed" onClick={() => subOpt.add()} block>
                                                    + Add Sub Item
                                                </Button>
                                            </div>
                                        )}
                                    </Form.List>
                                    
                                </Form.Item>
                            </Card>
                        ))}

                    </div>
                )}
            </Form.List>

            <Form.Item noStyle shouldUpdate>
                {() => (
                    <Typography>
                        <pre>{JSON.stringify(form.getFieldsValue(), null, 2)}</pre>
                    </Typography>
                )}
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit">
                    Crear Sala
                </Button>
            </Form.Item>
        </Form>
    );
};
export default createTheater;