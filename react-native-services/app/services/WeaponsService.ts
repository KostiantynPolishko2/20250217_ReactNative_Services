import { IWeaponsServices, WeaponsItemProps, WeaponsModelProps } from "./IWeaponsService";
import { getWeaponsCardsDto, getWeaponsCardDtoByModel} from "../api/ApiAdminServer";
import { WeaponsCardDto } from "../types/AdminServerTypes";


export class ApiWeaponsService implements IWeaponsServices {
    private _baseURL: string;

    constructor(_baseURL: string){
        this._baseURL = _baseURL;
    };

    async getWeaponsItems(): Promise<WeaponsItemProps[]> {

        const weaponsCardDto: WeaponsCardDto[] = await getWeaponsCardsDto(this._baseURL);

        let weaponsItems:WeaponsItemProps[] = weaponsCardDto.length
            ? (weaponsCardDto as WeaponsItemProps[]).
            filter(item=>item.isVisible).
            map(item => ({
                isVisible: item.isVisible,
                model: item.model,
                price: item.price,
            }))
            : [];

        // console.log('weapons items', weaponsItems && weaponsItems[0]);

        return weaponsItems;
    }


    getWeaponsModel(weaponsCardDto: WeaponsCardDto): WeaponsModelProps {

        // const weaponsCardDto: WeaponsCardDto | undefined = await getWeaponsCardDtoByModel(this._baseURL, model);
        
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