type WeaponsImageProps = {
    name: string,
    path: string
};

type WeaponsItemProps = {
    Model: string,
    Name: string,
    Type: string,
    isVisible: boolean
};

type WeaponsPropertyProps = {
    price: number,
    weight: number,
    Vendor: string,
    Description: string,
};

export type WeaponsDataDtoProps = {
    weaponsItem: WeaponsItemProps,
    weaponsProperty: WeaponsPropertyProps,
    weaponsImage: WeaponsImageProps
};

export type WeaponsItemDtoProps = {
    model: string,
    name: string,
    type: string,
};

export type WeaponsCardDtoProps = {
    model: string,
    name: string,
    isVisible: boolean,
    price: number,
    weight: number,
    description: string,
    image_path: string,
};