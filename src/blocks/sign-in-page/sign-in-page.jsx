import React, {useState} from "react";
import { Form, Input, Button } from 'antd'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {registrAction} from "../../toolkit-reducers/loginSlice";

function SignInPage () {
    const dispatch = useDispatch()
    let navigate = useNavigate()
    const onFinish = (values) => {
        const obj = {
            username: values.username,
            password: values.password,
            favorites: [],
            history: []
        }
        localStorage.setItem(values.username, JSON.stringify(obj))
        dispatch(
            registrAction({
                username: values.username,
                password: values.password,
                favorites: [],
                history: []
            })
        )
        navigate('/')
    }

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo)
    }

    return (
        <div className='form'>
            <Form
                name='basic'
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete='off'
                className='form__reg'
            >
                <Form.Item label='Username' name='username' rules={[{ required: true, message: 'Please input your username!' }]}>
                    <Input />
                </Form.Item>

                <Form.Item label='Password' name='password' rules={[{ required: true, message: 'Please input your password!' }]}>
                    <Input.Password />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type='primary' htmlType='submit'>
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );

}

export default SignInPage;
