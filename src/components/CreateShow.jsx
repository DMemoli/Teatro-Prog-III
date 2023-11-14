import React from 'react';
import { DatePicker, Form, Button } from 'antd';
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
const config = {
    rules: [
        {
            type: 'object',
            required: true,
            message: 'Please select time!',
        },
    ],
};


function createShow(id) {
    console.log(id)
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    
        const fetchData = async () => {
    
            const response = await playsService.createShow(id.data, values)
            console.log(response)
        }
        fetchData()
    
    
    };
    return (<Form
        name="time_related_controls"
        {...formItemLayout}
        onFinish={onFinish}
        style={{
            maxWidth: 600,
        }}
    >

        <Form.Item name="date" label="DatePicker[showTime]" {...config}>
            <DatePicker showTime format="YYYY-MM-DD HH:mm" />
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
                Submit
            </Button>
        </Form.Item>

    </Form>)

};
export default createShow;