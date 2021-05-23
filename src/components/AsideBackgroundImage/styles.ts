import styled from 'styled-components';
import { Player } from "@lottiefiles/react-lottie-player";



export const Container = styled.div`
    width: 60vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const CustomPlayer = styled(Player)`
    width: 700px;
    height: 700px; 
`;