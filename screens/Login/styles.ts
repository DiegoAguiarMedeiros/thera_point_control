import styled, { css } from 'styled-components/native';
import { Button, TextButton } from '../../components/Button/styles';
export { TextButton };

export const Container = styled.View`
    position: relative;
    background:#1E5084;
    width: 100%;
    height: 100%;
    padding:10px;
`;

export const Text = styled.Text`
    color:#f0f;
    font-size: 20px;
`;


export const Logo = styled.Image`
position:absolute;
top: 100px;
left: 110px;
    width: 156px;
    height: 61px;
    resize-mode: contain;
`;
export const UserImg = styled.Image`
position:absolute;
top: 246px;
left: 59px;
width: 28px;
height: 28px;
    resize-mode: contain;
`;
export const PassImg = styled.Image`
position:absolute;
top: 305px;
left: 59px;
width: 26px;
height: 26px;
    resize-mode: contain;
`;

export const loginButton = styled(Button)`
    top: 500px;
    left: 138px;
    width: 98px;
    height: 33px;
`;