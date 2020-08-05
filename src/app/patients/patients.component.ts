import { Component, OnInit } from '@angular/core';
import { PatientService } from '../shared/patient.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {

  constructor(public service: PatientService) { }

  ngOnInit(): void {
  }
}
