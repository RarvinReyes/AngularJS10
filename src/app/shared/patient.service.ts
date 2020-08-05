import { Injectable } from '@angular/core';
import { Patient } from './patient.model';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  formData : Patient;
  readonly rootUrl = "https://localhost:44367/api";
  list : Patient[];
  path: string;

  constructor(private http: HttpClient) { }

  resetForm(form?: NgForm) {
    if(form != null) {
      form.resetForm();
      form.value.Gender = 0;
    }
    this.formData = new Patient();
  }

  putPatient(patient : Patient) {
    return this.http.put(this.rootUrl + "/Patient/" + patient.Id, patient);
  }

  postPatient(patient : Patient) {
    return this.http.post(this.rootUrl + "/Patient", patient);
  }

  deletePatient(id : string) {
    return this.http.delete(this.rootUrl + "/Patient/" + id);
  }

  uploadFile(fileToUpload: File) {
    const formData: FormData = new FormData(); 
    formData.append('Image', fileToUpload, fileToUpload.name);
    return this.http.post(this.rootUrl + "/UploadFile", formData);
  }

  refreshList() {
    return this.http.get(this.rootUrl + "/Patient")
    .toPromise().then((response) => {
      this.list = response["m_Item1"] as Patient[];
      this.path = response["m_Item2"];
    });
  }

}
