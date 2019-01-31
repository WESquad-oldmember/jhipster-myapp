import { ILocation } from 'app/shared/model/location.model';
import { IEmployee } from 'app/shared/model/employee.model';

export interface IDepartment {
    id?: number;
    departmentName?: string;
    departmentCode?: string;
    location?: ILocation;
    employees?: IEmployee[];
}

export class Department implements IDepartment {
    constructor(
        public id?: number,
        public departmentName?: string,
        public departmentCode?: string,
        public location?: ILocation,
        public employees?: IEmployee[]
    ) {}
}
