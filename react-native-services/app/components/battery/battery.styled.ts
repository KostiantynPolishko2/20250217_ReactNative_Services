import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

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

export const BatteryStatsStyles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: '#c2b5b4',
        borderRadius: 5,
        backgroundColor: '#bdf0ad',
        minWidth: 'auto',
        position: 'absolute',
        top: 10,
    },
    title: {
      fontSize: 20,
      fontWeight: '700',
      color: '#1d1d1d',
      marginBottom: 0,
    },
    /** Stats */
    stats: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 5,
    },
    statsItem: {
        // flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderLeftWidth: 1,
        borderColor: '#c2b5b4',
        width: '30%',
    },
    statsItemLabel: {
      fontSize: 15,
      fontWeight: '500',
      color: '#000',
      marginBottom: 4,
    },
    statsItemValue: {
      fontSize: 17,
      fontWeight: '700',
      color: '#000',
    },
});