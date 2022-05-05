import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import { Form, Input, Button } from 'antd'
import {loginAction} from "../../toolkit-reducers/loginSlice";
import "../content-page/content-page.css"

const LogInPage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [userNameError, setUserNameError] = useState({})
    const [passwordError, setPasswordError] = useState({})

    const onFinish = (userData) => {
        const user = localStorage.getItem(userData.username)
        if (!user) {
            setUserNameError({validateStatus: 'error', help: 'User is not exist'})
        } else if (user && JSON.parse(user).password != userData.password) {
            setPasswordError({validateStatus: 'error', help: 'Password is wrong'})
            setUserNameError({})
        } else if (
            JSON.parse(user).username === userData.username &&
            JSON.parse(user).password === userData.password
        ) {
            dispatch(loginAction(userData))
            navigate('/')
        } else {
            console.log('error')
        }
    }

    return (
        <div className='container'>
            <Form
                name='normal_login'
                className='form__reg'
                onFinish={onFinish}
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
            >
                <Form.Item {...userNameError} name='username' rules={[{ required: true, message: 'Please input your Username!' }]}>
                    <Input placeholder='Username' />
                </Form.Item>

                <Form.Item {...passwordError} name='password' rules={[{ required: true, message: 'Please input your Password!' }]}>
                    <Input  type='password' placeholder='Password' />
                </Form.Item>

                <Form.Item>
                    <Button type='primary' htmlType='submit' className='login-form-button'>
                        Log in
                    </Button>
                    Or <Link to='/sign-in'>register now!</Link>
                </Form.Item>
            </Form>
        </div>
    );
};

export default LogInPage;