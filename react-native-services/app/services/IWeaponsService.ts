import { WeaponsCardDtoProps } from "../types/AdminServerTypes";

export type WeaponsItemProps = {
    isVisible: boolean,
    model: string,
    price: number,
}

export type WeaponsModelProps = WeaponsItemProps & {
    name: string,
    image_path: string,
}

export interface IWeaponsServices {

    getWeaponsItems(weaponsCardDto: WeaponsCardDtoProps[]): WeaponsItemProps[];

    getWeaponsModel(weaponsCardDto: WeaponsCardDtoProps): WeaponsModelProps;
};