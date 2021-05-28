import styled from 'styled-components';

import { MapContainer, Marker } from 'react-leaflet';

export const CustomizedMap = styled(MapContainer)`
    width: 100vw;
    height: 100vh;
`;

export const CustomizedMarker = styled(Marker)`
    margin-top: -15px;
    margin-left: -15px;
`;

export const Container = styled.div`
    display: flex;
    position: relative;
`;
