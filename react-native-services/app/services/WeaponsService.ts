import { IWeaponsServices, WeaponsItemProps, WeaponsModelProps } from "./IWeaponsService";
import { WeaponsCardDtoProps } from "../types/AdminServerTypes";


export class WeaponsService implements IWeaponsServices {

    getWeaponsItems(weaponsCardDto: WeaponsCardDtoProps[]): WeaponsItemProps[] {

        let weaponsItems:WeaponsItemProps[] =  weaponsCardDto.length? weaponsCardDto.filter(item=>item.isVisible).
            map(item => ({
                isVisible: item.isVisible,
                model: item.model,
                price: item.price,
            })) : [];

        return weaponsItems;
    }

    getWeaponsModel(weaponsCardDto: WeaponsCardDtoProps): WeaponsModelProps {
        
        let weaponsModel: WeaponsModelProps = {
            isVisible: weaponsCardDto.isVisible,
            model: weaponsCardDto.model.toUpperCase(),
            price: Math.round(weaponsCardDto.price * 1.1),
            name: weaponsCardDto.name.toUpperCase(),
            image_path: weaponsCardDto.image_path,
        };

        return weaponsModel;
    };
}