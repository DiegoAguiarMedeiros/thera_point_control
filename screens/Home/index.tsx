import * as Styled from './styles';
import LogoImg from '../../assets/images/logo2x.png';
import Sair from '../../assets/images/sair.png';
import Button from '../../components/Button';
import Grid from './component/Grid';
import User from '../../utils/user';
import restUser from '../../api/user/rest-user';
import { useEffect, useState } from 'react';

type ItemsType = {
    id: number,
    start: string,
    startLunch: string,
    endLunch: string,
    end: string
}
type TimesheetType = {
    items: Array<ItemsType>,
    count: number,
    currentPage: number,
    pageSize: number,
    totalPages: number
    __v: string,
    _id: string,
    name: string,
    breed: string,
    company: string,
    size: string,
    createdAt: string,
    sociable: boolean,
    imgs: Array<string>,
    active: boolean,
    accepts: boolean,
};


export default function Home({ navigation }: any) {

    const [nome, setNome] = useState('Nome');
    const [timesheet, setTimesheet] = useState<TimesheetType>();

    const activeButtonCHEGUEI: boolean = true;
    const activeButtonAlmocar: boolean = false;
    const activeButtonVoltei: boolean = false;
    const activeButtonFui: boolean = false;

    const loadUser = async () => {
        const userString: string | null | undefined = await User.getUserName();
        const userName = userString?.split(' ')
        setNome(`${userName ? userName[0] : 'Nome'}`);
    }

    const fetchTimesheet = async () => {
        const timesheetData: any = await restUser.getUser() // Axios dando erro de compilar o Js ¬¬
        // console.log('timesheetData',timesheetData)
        // setTimesheet(ts)
    };

    useEffect(() => {
        loadUser();
        fetchTimesheet();
    }, []);
    return (
        <>
            <Styled.Container>
                <Styled.Logo source={LogoImg} />
                <Styled.Sair source={Sair} />
                <Styled.User>
                    Olá, {nome}
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