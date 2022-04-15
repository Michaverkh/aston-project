import React, {useState} from 'react';
import Input from "../input/input";
import Button from "../button/button";

const SignInPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className={'registration'}>
            <h2>Регистрация</h2>
            <Input value={email} setValue={setEmail} type="text" placeholder= "логин"/>
            <Input value={password} setValue={setPassword} type="password" placeholder= "пароль"/>
            <Button>Войти</Button>
        </div>
    );
};

export default SignInPage;