import React, {useState} from "react";
import Input from "../input/input";
import Button from "../button/button";

function SignInPage () {

    const [
            email,
            setEmail
        ] = useState(""),
        [
            password,
            setPassword
        ] = useState("");

    return (
        <div className="registration">
            <h2>
                Регистрация
            </h2>

            <Input
                placeholder="логин"
                setValue={setEmail}
                type="text"
                value={email}
            />

            <Input
                placeholder="пароль"
                setValue={setPassword}
                type="password"
                value={password}
            />

            <Button>
                Войти
            </Button>
        </div>
    );

}

export default SignInPage;
