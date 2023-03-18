import * as Styled from './styles';

import LogoImg from '../../assets/images/logo2x.png';
import userImg from '../../assets/images/usuario.png';
import passImg from '../../assets/images/senha.png';
import Button from '../../components/Button';
import Input from '../../components/Input';

export default function Login({ navigation }: any) {

    const activeButton: boolean = true;

    return (
        <Styled.Container>
            <Styled.Logo source={LogoImg} />
            <Styled.UserImg source={userImg} />
            <Styled.PassImg source={passImg} />
            <Input placeholder={'Usuário'} styleInput={'top: 243px;left: 100px;width: 213px;height: 35px;'} />
            <Input placeholder={'Senha'} secureTextEntry={true} styleInput={'top: 298px;left: 100px;width: 213px;height: 35px;'} />
            <Button active={activeButton} styleButton={'top: 377px;left: 163px;width: 98px;height: 33px;'} text='LOGIN' />
        </Styled.Container>
    );
}