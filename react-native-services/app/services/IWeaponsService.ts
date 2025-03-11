import { WeaponsCardDto } from "../types/AdminServerTypes";

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

    getWeaponsItems(): Promise<WeaponsItemProps[]>;

    getWeaponsModel(weaponsCardDto: WeaponsCardDto): WeaponsModelProps;
};