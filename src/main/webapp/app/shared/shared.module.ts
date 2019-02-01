import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';

import { NgbDateMomentAdapter } from './util/datepicker-adapter';
import { MyAppSharedLibsModule, MyAppSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';
import { MaterialAngularModule } from 'app/material-angular.module';

@NgModule({
    imports: [MyAppSharedLibsModule, MyAppSharedCommonModule, MaterialAngularModule],
    declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
    providers: [{ provide: NgbDateAdapter, useClass: NgbDateMomentAdapter }],
    entryComponents: [JhiLoginModalComponent],
    exports: [MyAppSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective, MaterialAngularModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MyAppSharedModule {
    static forRoot() {
        return {
            ngModule: MyAppSharedModule
        };
    }
}
