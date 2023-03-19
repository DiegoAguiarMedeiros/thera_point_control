import styled, { css } from 'styled-components/native';

export const Container = styled.View`
    position: relative;
    background:#1E5084;
    width: 100%;
    height: 40%;
    padding:10px;
`;
export const ContainerGrid = styled.View`
    position: relative;
    background:#1E5084;
    width: 100%;
    height: 600%;
    padding:10px;
`;

export const Text = styled.Text`
    color:#f0f;
    font-size: 20px;
`;
export const User = styled.Text`
position: absolute;
    top: 33px;
    left: 157px;
    width: 110px;
    height: 27px;
    /* UI Properties */
    text-align: center;
    font: normal normal bold 20px/27px Open Sans;
    letter-spacing: 0px;
    color: #FFFFFF;
    opacity: 1;
`;
export const dataEntrada = styled.Text`
position: absolute;
top: 110px;
left: 83px;
width: 98px;
height: 24px;
/* UI Properties */
text-align: center;
font: normal normal bold 18px/24px Open Sans;
letter-spacing: 0px;
color: #FFFFFF;
opacity: 1;
`;
export const horaEntrada = styled.Text`
position: absolute;
top: 110px;
left: 221px;
width: 72px;
height: 24px;
/* UI Properties */
text-align: center;
font: normal normal bold 18px/24px Open Sans;
letter-spacing: 0px;
color: #FFFFFF;
opacity: 1;
`;
export const tempoCorrido = styled.Text`
position: absolute;
top: 142px;
left: 116px;
width: 138px;
height: 24px;
/* UI Properties */
text-align: center;
font: normal normal bold 18px/24px Open Sans;
letter-spacing: 0px;
color: #FCCD2A;
opacity: 1;
`;

export const Logo = styled.Image`
position:absolute;
top: 26px;
left: 26px;
width: 102px;
height: 40px;
    resize-mode: contain;
`;
export const Sair = styled.Image`
position:absolute;
top: 31px;
left: 324px;
width: 30px;
height: 30px;
    resize-mode: contain;
`;