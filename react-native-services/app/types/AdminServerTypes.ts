type WeaponsImage = {
    name: string,
    path: string
};

type WeaponsItem = {
    Model: string,
    Name: string,
    Type: string,
    isVisible: boolean
};

type WeaponsProperty = {
    price: number,
    weight: number,
    Vendor: string,
    Description: string,
};

export type WeaponsDataDto = {
    weaponsItem: WeaponsItem,
    weaponsProperty: WeaponsProperty,
    weaponsImage: WeaponsImage
};

export type WeaponsItemsDto = {
    model: string,
    name: string,
    type: string,
};

export type WeaponsCardDto = {
    model: string,
    name: string,
    isVisible: boolean,
    price: number,
    weight: number,
    description: string,
    image_path: string,
};