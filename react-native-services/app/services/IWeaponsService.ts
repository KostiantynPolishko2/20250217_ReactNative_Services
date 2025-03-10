import { WeaponsCardDto } from "../types/AdminServerTypes";

export interface IWeaponsServices {

    getWeaponsItems(): Promise<WeaponsItem[]>;

    getWeaponsModel(model: string): Promise<WeaponsModel | undefined>;
};

export type WeaponsItem = {
    isVisible: boolean,
    model: string,
    price: number,
}

export type WeaponsModel = WeaponsItem & {
    name: string,
    image_path: string,
}