import { WeaponsModelProps } from '../services/IWeaponsService';
import { WeaponsCardDto } from '../types/AdminServerTypes';

export const weaponsModelDefault: WeaponsModelProps = {
    isVisible: false,
    model: 'undefined',
    price: 0,
    name: 'undefined',
    image_path: '@/assets/images/ua-army-force.png',
}

export const weaponsCardDtoDefault: WeaponsCardDto = {
    model: 'undefined',
    name: 'undefined',
    isVisible: false,
    price: 0,
    weight: 0,
    description: 'undefined',
    image_path: '@/assets/images/ua-army-force.png',
}