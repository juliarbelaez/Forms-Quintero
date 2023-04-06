import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EstudiantesModule } from './estudiantes/estudiantes.module';
import { FormErrorHelperComponent } from './shared/components/form-error-helper/form-error-helper.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    EstudiantesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
