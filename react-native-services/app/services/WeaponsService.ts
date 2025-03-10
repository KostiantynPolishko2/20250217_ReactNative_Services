import { IWeaponsServices, WeaponsItem, WeaponsModel } from "./IWeaponsService";
import { getWeaponsCardsDto, getWeaponsCardDtoByModel} from "../api/ApiAdminServer";
import { WeaponsCardDto } from "../types/AdminServerTypes";


export class ApiWeaponsService implements IWeaponsServices {
    private _baseURL: string;

    constructor(_baseURL: string){
        this._baseURL = _baseURL;
    };

    async getWeaponsItems(): Promise<WeaponsItem[]> {

        const weaponsCardDto: WeaponsCardDto[] = await getWeaponsCardsDto(this._baseURL);

        let weaponsItems:WeaponsItem[] = weaponsCardDto.length
            ? (weaponsCardDto as WeaponsItem[]).
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


    async getWeaponsModel(model: string): Promise<WeaponsModel | undefined> {

        const weaponsCardDto: WeaponsCardDto | undefined = await getWeaponsCardDtoByModel(this._baseURL, model);
        
        let weaponsModel: WeaponsModel | undefined = weaponsCardDto? (weaponsCardDto as WeaponsModel) : undefined;

        return weaponsModel;
    };
}