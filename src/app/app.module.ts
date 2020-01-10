import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material.module';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { AddclientComponent } from './dialogs/addclient/addclient.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditclientComponent } from './dialogs/editclient/editclient.component';
import { ToastrModule } from 'ngx-toastr';
import { MatTableModule, MatPaginatorModule, MatSortModule, MAT_DATE_LOCALE } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    AddclientComponent,
    EditclientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    ToastrModule.forRoot()
  ],
  providers: [{provide: MAT_DATE_LOCALE, useValue: 'es-AR'}],
  bootstrap: [AppComponent],
  entryComponents: [AddclientComponent, EditclientComponent]
})
export class AppModule { }
