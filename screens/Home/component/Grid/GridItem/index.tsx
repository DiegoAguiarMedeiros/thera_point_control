import * as Styled from './styles';
import GridItemLine from './GridItemLine'
export default function GridItem() {

    return (
        <Styled.Container>
            <GridItemLine />
            <GridItemLine />
            <GridItemLine />
        </Styled.Container>
    );
}