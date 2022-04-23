import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import Form from "antd/es/form";
import Input from "antd/es/input";
import Button from "antd/es/button";
import {loginAction} from "../../toolkit-reducers/loginSlice";

const LogInPage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [loginStatus, setLoginStatus] = useState()
    const [passwordStatus, setPasswordStatus] = useState()

    const onFinish = (userData) => {
        const user = localStorage.getItem(userData.username)
        if (!user) {
            // setLoginStatus({validateStatus: 'error', help: 'user is not found'})
            console.log('login error')
        } else if (user && JSON.parse(user).password != userData.password) {
            // setPasswordStatus({validateStatus: 'error', help: 'Password is wrong'})
            console.log('login error')
        } else if (
            JSON.parse(user).username === userData.username &&
            JSON.parse(user).password === userData.password
        ) {
            dispatch(loginAction(userData))
        } else {
            console.log('login error')
        }

        navigate('/')
    }

    return (
        <div className='container'>
            <Form name='normal_login' className='form' onFinish={onFinish}>
                <Form.Item name='username' rules={[{ required: true, message: 'Please input your Username!' }]}>
                    <Input placeholder='Username' />
                </Form.Item>

                <Form.Item name='password' rules={[{ required: true, message: 'Please input your Password!' }]}>
                    <Input  type='password' placeholder='Password' />
                </Form.Item>

                <Form.Item>
                    <Button type='primary' htmlType='submit' className='login-form-button'>
                        Log in
                    </Button>
                    Or <Link to='/registration'>register now!</Link>
                </Form.Item>
            </Form>
        </div>
    );
};

export default LogInPage;