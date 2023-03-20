import * as Styled from './styles';

import LogoImg from '../../assets/images/logo2x.png';
import userImg from '../../assets/images/usuario.png';
import passImg from '../../assets/images/senha.png';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { useForm } from "react-hook-form";
import User from '../../utils/user'
import Auth from '../../utils/auth'
import restAuth from '../../api/auth/rest-auth';


import { useEffect, useState } from 'react';

export default function Login({ navigation }: any) {

    const activeButton: boolean = true;

    const { register, handleSubmit } = useForm();
    const [send, setSend] = useState(false);
    const [errorSubmit, setErrorSubmit] = useState("");
    const [data, setData] = useState({
        userID: "",
        accessKey: ""
    });


    const [errorss, setErrors] = useState({
        erro: "",
    });

    const handleVerify = () => {
        if (
            data.userID.length > 0 &&
            data.accessKey.length > 0
        ) {
            return true;
        } else {
            return false;
        }
    };

    async function onSubmit() {
        setErrors({
            ...errorss,
            erro: '',
        });
        try {

            if (handleVerify()) {

                setErrorSubmit("");
                const returnApi = await restAuth.postAuth({
                    userID: data.userID,
                    accessKey: data.accessKey,
                    grantType: "password"
                });
                console.log('returnApi',returnApi)
                User.setUserData(returnApi.data);

                navigation.navigate('home')
            } else {
                console.log('bbb')
                setErrorSubmit("Verificar os campos");

            }
        } catch (error: any) {
            console.log('error 1')
            console.log(error)
            if (
                error.response.data?.message ===
                "AuthenticateUseCase: user not found."
            ) {
                setErrors({
                    ...errorss,
                    erro: 'Usuário ou senha inválidos',
                });
            } else if (
                error.response.data?.message ===
                "AuthenticateUseCase: invalid password."
            ) {
                setErrors({
                    ...errorss,
                    erro: 'Usuário ou senha inválidos',
                });
            }
        }
    }

    const pressTest = () => {
        navigation.push('home');
    }

    return (
        <Styled.Container>
            <Styled.Logo source={LogoImg} />
            <Styled.UserImg source={userImg} />
            <Styled.PassImg source={passImg} />
            <Input placeholder={'Usuário'} onChangeText={(email) => setData({ ...data, userID: email })} value={data.userID} styleInput={'top: 243px;left: 100px;width: 213px;height: 35px;'} />
            <Input placeholder={'Senha'} onChangeText={(password) => setData({ ...data, accessKey: password })} value={data.userID} secureTextEntry={true} styleInput={'top: 298px;left: 100px;width: 213px;height: 35px;'} />
            <Button active={activeButton} onPress={handleSubmit(onSubmit)} styleButton={'top: 377px;left: 163px;width: 98px;height: 33px;'} text='LOGIN' />
        </Styled.Container>
    );
}


