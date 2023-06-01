import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlobalHeaderComponent } from './global-header/global-header.component';
import { FormCreateItemComponent } from './global-list/form-create-item/form-create-item.component';
import { GlobalListComponent } from './global-list/global-list.component';
import { ListItemComponent } from './global-list/list-item/list-item.component';
import { FormsModule } from '@angular/forms';
import { ListFiltersComponent } from './global-list/list-filters/list-filters.component';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './global-list/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GlobalHeaderComponent,
    FormCreateItemComponent,
    GlobalListComponent,
    ListItemComponent,
    ListFiltersComponent,
    FilterPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
