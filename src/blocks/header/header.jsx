import React from "react";
import "./header.css"
import logo from '../../assets/logo.png'
import { Link} from 'react-router-dom';
import { Button } from 'antd';

function Header () {
    const isRegistr = false;
    const isLogin = false;
    return (
        <header className='container'>
            <div className='header'>
                <div></div>
                <Link to='/' className='logo'>
                    <img src={logo} className='logo__photo' />
                    <div className='logo__text'>Breaking Bad</div>
                </Link>

                <div>
                    {isRegistr || isLogin ? (
                        <>
                            {/*<p className='user'>user:{user.payload.username}</p>*/}
                            {/*<Link to='/favorites' className='button__regist'>*/}
                            {/*    <Button>Favorites</Button>*/}
                            {/*</Link>*/}
                            {/*<Link to='/history' className='button__regist'>*/}
                            {/*    <Button>History</Button>*/}
                            {/*</Link>*/}
                            {/*<Button onClick={exitUser} className='exit'>*/}
                            {/*    Exit*/}
                            {/*</Button>*/}
                        </>
                    ) : (
                        <>
                            <Link to='/log-in' className='link'>
                                <Button>Login</Button>
                            </Link>
                            <Link to='/sign-in' className='link'>
                                <Button>Registration</Button>
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </header>
    );

}

export default Header;
