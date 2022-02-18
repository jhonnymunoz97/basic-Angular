import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { ProductComponent } from './product/product.component';


@NgModule({
    declarations: [
        HomeComponent,
        ServiceComponent,
        ProductComponent
    ],
    exports: [
        HomeComponent,
        ServiceComponent,
        ProductComponent
    ],
    imports: [

    ],
    providers: [

    ],
})
export class PagesModule { }
