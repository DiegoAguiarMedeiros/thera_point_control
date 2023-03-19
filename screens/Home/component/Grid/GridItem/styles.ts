import styled, { css } from 'styled-components/native';

export const Container = styled.View`
    position: relative;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    background:#1E5084;
    padding:10px;
`;
export const Col = styled.View`
    position: relative;
    background:#1E5084;
    width: 50%;
    border:solid 1px transparent;
`;


export const Text = styled.Text`
text-align: center;
    font: normal normal bold 12px/17px Open Sans;
    letter-spacing: 0px;
    color: #FCCD2A;
    opacity: 1;
`;
export const Content = styled.View`
    position: relative;
    background:#1E5084;
    display: flex;
  justify-content: center;
  align-items: center;
    width: 100%;
    height: 35px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    opacity: 1;
`;


export const Value = styled.Text`
text-align: center;
    font: normal normal bold 12px/17px Open Sans;
    letter-spacing: 0px;
    color: #1E5084;
    opacity: 1;
`;