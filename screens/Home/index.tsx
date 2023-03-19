import * as Styled from './styles';
import LogoImg from '../../assets/images/logo2x.png';
import Sair from '../../assets/images/sair.png';
import Button from '../../components/Button';
import Grid from './component/Grid';

export default function Home({ navigation }: any) {

    const activeButtonCHEGUEI: boolean = true;
    const activeButtonAlmocar: boolean = false;
    const activeButtonVoltei: boolean = false;
    const activeButtonFui: boolean = false;

    return (
        <>
            <Styled.Container>
                <Styled.Logo source={LogoImg} />
                <Styled.Sair source={Sair} />
                <Styled.User>
                    Olá, Diego
                </Styled.User>
                <Styled.dataEntrada>
                    29/06/2021
                </Styled.dataEntrada>
                <Styled.horaEntrada>
                    17:40:56
                </Styled.horaEntrada>
                <Styled.tempoCorrido>
                    17:40:56
                </Styled.tempoCorrido>
                <Button active={activeButtonCHEGUEI} styleButton={'top: 209px;left: 47px;width: 112px;height: 37px;'} text='CHEGUEI' />
                <Button active={activeButtonAlmocar} styleButton={'top: 209px;left: 172px;width: 156px;height: 37px;'} text='FUI ALMOÇAR' />
                <Button active={activeButtonVoltei} styleButton={'top: 263px;left: 69px;width: 112px;height: 38px;'} text='VOLTEI' />
                <Button active={activeButtonFui} styleButton={'top: 263px;left: 194px;width: 112px;height: 37px;'} text='FUI' />
            </Styled.Container>
            <Styled.ContainerGrid>
                <Grid />
                <Grid />
            </Styled.ContainerGrid>
        </>
    );
}