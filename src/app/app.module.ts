import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from "./core/core.module";
import { CatalogModule } from './catalog/catalog.module';

@NgModule({
    declarations: [
        AppComponent
    ],

    bootstrap: [AppComponent],
    imports: [
        AppRoutingModule,
        BrowserModule,
        CoreModule,
        CatalogModule
    ],
    providers: []
})
export class AppModule { }
