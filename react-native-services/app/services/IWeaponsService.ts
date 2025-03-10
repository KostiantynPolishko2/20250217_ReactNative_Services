import { WeaponsCardDto } from "../types/AdminServerTypes";

export interface IWeaponsServices {

    getWeaponsItems(): Promise<WeaponsItem[] | undefined>;

    getWeaponsModel(model: string): Promise<WeaponsModel | undefined>;
};

export type WeaponsItem = {
    model: string,
    price: number,
    isVisible: boolean,
    image_path: string,
}

export type WeaponsModel = WeaponsItem & {
    image_path: string,
}