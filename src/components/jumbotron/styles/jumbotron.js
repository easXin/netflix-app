// find the name of component in dev tool
import styled from "styled-components/macro"

export const Inner = styled.div`
    display:flex;
    align-items: center;
    flex-direction: ${({ direction }) => direction}
    justify-content: space-between;
    max-width:100px;
    margin:auto;
    width: 100%;

    @media(max-width: 1000px){
        flex-direction:column;
    }
`
//  change flex-direction when the browser window is 1000 px wide
export const Pane = styled.div`
  width: 50%;

`;

export const Title = styled.h1`
`;

export const SubTitle = styled.h2`
`;

export const Image = styled.img`
`;

export const Item = styled.div`
`;

export const Container = styled.div`
`;
