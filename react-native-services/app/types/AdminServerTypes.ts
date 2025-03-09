type WeaponsImage = {
    name: string,
    path: string
}

type WeaponsItem = {
    Model: string,
    Name: string,
    Type: string,
    isVisible: boolean
}

type WeaponsProperty = {
    price: number,
    weight: number,
    Vendor: string,
    Description: string,
}

export type WeaponsDataDto = {
    weaponsItem: WeaponsItem,
    weaponsProperty: WeaponsProperty,
    weaponsImage: WeaponsImage
}
