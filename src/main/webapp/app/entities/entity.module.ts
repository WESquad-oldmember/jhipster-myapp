import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'region',
                loadChildren: './region/region.module#MyAppRegionModule'
            },
            {
                path: 'country',
                loadChildren: './country/country.module#MyAppCountryModule'
            },
            {
                path: 'location',
                loadChildren: './location/location.module#MyAppLocationModule'
            },
            {
                path: 'department',
                loadChildren: './department/department.module#MyAppDepartmentModule'
            },
            {
                path: 'task',
                loadChildren: './task/task.module#MyAppTaskModule'
            },
            {
                path: 'employee',
                loadChildren: './employee/employee.module#MyAppEmployeeModule'
            },
            {
                path: 'job',
                loadChildren: './job/job.module#MyAppJobModule'
            },
            {
                path: 'job-history',
                loadChildren: './job-history/job-history.module#MyAppJobHistoryModule'
            }
            /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
        ])
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MyAppEntityModule {}
