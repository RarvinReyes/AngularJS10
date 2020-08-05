export class Patient {
  Id : string;
  Name : string;
  FileNo : number;
  CitizenId : string;
  Birthdate : Date;
  Gender : number;
  Nationality : string;
  PhoneNumber : string;
  Email : string;
  Country : string;
  City : string;
  Street : string;
  Address1 : string;
  Address2 : string;
  ContactPerson : string;
  ContactRelation : string;
  ContactPhone : string;
  Photo : string;
  FilePath : string;
  FirstVisitDate : Date;
  RecordCreationDate : Date;

  constructor() {
    this.Id = "0";
    this.Name = "";
    this.FileNo = 0;
    this.CitizenId = "";
    this.Birthdate = null;
    this.Gender = 0;
    this.Nationality = "";
    this.PhoneNumber = "";
    this.Email = "";
    this.Country = "";
    this.City = "";
    this.Street = "";
    this.Address1 = "";
    this.Address2 = "";
    this.ContactPerson = "";
    this.Photo = "";
    this.ContactRelation = "";
    this.ContactPhone = "";
    this.FirstVisitDate = null;
    this.RecordCreationDate = null;
  }
}