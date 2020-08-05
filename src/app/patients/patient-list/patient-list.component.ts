import { Component, OnInit } from '@angular/core';
import { PatientService } from 'src/app/shared/patient.service';
import { Patient } from 'src/app/shared/patient.model';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {

  constructor(public service: PatientService) { };
  
  ngOnInit(): void {
    this.service.refreshList();
  }

  removeRecord(patient: Patient) {
    if (confirm("Are you sure you want to delete " + patient.Name + "'s record?")) {
      this.service.deletePatient(patient.Id).subscribe(response => {
        this.service.refreshList();
      },
        error => {
          console.log(error);
        });
    }
  }

  populateForm(patient: Patient) {
    this.service.formData = Object.assign({}, patient);
  }

}
