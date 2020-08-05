import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PatientsComponent } from './patients/patients.component';
import { PatientComponent } from './patients/patient/patient.component';
import { PatientListComponent } from './patients/patient-list/patient-list.component';
import { PatientService } from './shared/patient.service';
import { SanitizeUrlPipe } from './shared/sanitize/sanitize-url.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PatientsComponent,
    PatientComponent,
    PatientListComponent,
    SanitizeUrlPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PatientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
