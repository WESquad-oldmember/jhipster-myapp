import { IRegion } from 'app/shared/model/region.model';

export interface ICountry {
    id?: number;
    countryCode?: string;
    countryName?: string;
    region?: IRegion;
}

export class Country implements ICountry {
    constructor(public id?: number, public countryCode?: string, public countryName?: string, public region?: IRegion) {}
}
