import { Component, OnInit } from '@angular/core';
import { PatientService } from 'src/app/shared/patient.service';
import { NgForm } from '@angular/forms';
import { Patient } from 'src/app/shared/patient.model';

declare var jQuery:any;

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  constructor(public service: PatientService) { }

  ngOnInit(): void {
    this.service.resetForm();
  }

  fileTypes: string[] = ["jpg","png","jpeg","jpe"];
  fileToUpload: File = null;
  handleFileInput(files: FileList) {
    let file = files.item(0);
    if(this.fileTypes.includes(file.type)) {
      this.fileToUpload = files.item(0);
    } else {
      jQuery('#FileName').val('');
      alert("please upload image.");
    }
  }

  onSubmit(form: NgForm) {

    if (this.fileToUpload != null) {
      form.value.Photo = this.fileToUpload.name;
    }

    if (form.value.Id === null ||
      form.value.Id === "0") {
      this.insertRecord(form);
    } else {
      this.updateRecord(form);
    }

    jQuery("#closeModal").click();
  }

  updateRecord(form: NgForm) {
    this.service.putPatient(form.value).subscribe(response => {
      this.uploadPatientPhoto();
      this.service.resetForm(form);
      this.service.refreshList();
    },
      error => {
        console.log(error);
      })
  }

  insertRecord(form: NgForm) {
    this.service.postPatient(form.value).subscribe((response: Patient) => {
      this.uploadPatientPhoto();
      this.service.resetForm();
      this.service.refreshList();
    },
      error => {
        console.log(error);
      });
  }

  uploadPatientPhoto() {
    if (this.fileToUpload != null) {
      this.service.uploadFile(this.fileToUpload).subscribe(data => {
      }, error => {
        console.log(error);
      });
    } 
  }
}
