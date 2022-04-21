import React from "react";
import "./header.css"
import logo from '../../assets/logo.png'
import { Link} from 'react-router-dom';
import { Button } from 'antd';
import {useNavigate} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {unregistrAction} from "../../toolkit-reducers/loginSlice";

function Header () {
    const navigate = useNavigate()
    const isRegistr = useSelector((state) => state.login.isRegistr)
    const isLogin = useSelector((state) => state.login.isLogin)
    const user = useSelector((state) => state.login.user)
    const dispatch = useDispatch()
    function exitUser() {
        dispatch(unregistrAction(null))
        navigate('/')
    }

    return (
        <header className='container'>
            <div className='header'>
                <Link to='/' className='logo'>
                    <img src={logo} className='logo__photo' />
                    <div className='logo__text'>Breaking Bad</div>
                </Link>

                <div>
                    {isRegistr || isLogin ? (
                        <div className="header__buttons">
                            <p className='user'>user:{user.payload.username}</p>
                            <Link to='/favorites' className='button__regist'>
                                <Button>Favorites</Button>
                            </Link>
                            <Link to='/history' className='button__regist'>
                                <Button>History</Button>
                            </Link>
                            <Button onClick={exitUser} className='exit'>
                                Exit
                            </Button>
                        </div>
                    ) : (
                        <div className="header__buttons">
                            <Link to='/log-in' className='link'>
                                <Button>Login</Button>
                            </Link>
                            <Link to='/sign-in' className='link'>
                                <Button>Registration</Button>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );

}

export default Header;
