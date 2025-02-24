import styled from 'styled-components/native';

export const CenterPosition = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

interface IRectangleBox {
    _width: number;
    _height: number;
    _bgColor?: string;
}

export const RectangleBox = styled.View<IRectangleBox>`
    width: 10px;
    height: 15px;
    background-color: gray;
`;

export const BatteryBarWrapper = styled(CenterPosition)`
    background-color:rgb(160, 192, 223);
    width: 100px;
    height: 30px;
    border: 1px solid gray;
`;