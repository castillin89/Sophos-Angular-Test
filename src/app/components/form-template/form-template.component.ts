import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-form-template',
  templateUrl: './form-template.component.html',
  styleUrls: ['./form-template.component.scss']
})
export class FormTemplateComponent implements OnInit {
  private orders: Array<object> = [];
  private form: FormGroup;
  private maxDate = new Date();
  private cities = [
    { municipality: "Medellín" },
    {
      municipality: "Abejorral"
    },
    {
      municipality: "Sabaneta"
    },
    {
      municipality: "Alejandría"
    },
    {
      municipality: "Estrella"
    },
    {
      municipality: "Amalfi"
    },
    {
      municipality: "Itagüi"
    },
    {
      municipality: "Angelópolis"
    },
    {
      municipality: "Anorí"
    },
    {
      municipality: "Chimá"
    }
  ];
  private fileContent: File;
  private uploadedDocument: boolean = false;

  constructor(private dialogRef: MatDialogRef<FormTemplateComponent>,
    private _formBuilder: FormBuilder, private request: RequestService,
    @Inject(MAT_DIALOG_DATA) DATA) {
      this.orders = DATA;
      console.log(DATA);
     }

  ngOnInit() {
    this.form = this._formBuilder.group({
      nombre: ["", Validators.required],
      cedula: ["", Validators.required],
      direccion: ["", Validators.required],
      fechaNacimiento: ["", Validators.required],
      ciudad: ["", Validators.required]  
    });
  }

  close() {
    this.dialogRef.close();
  }

  checkIn () {
      let pedidos: Array<object> = JSON.parse(localStorage.getItem("orderRegistered"));
      console.log(pedidos);
      let idOrder = Math.floor(Math.random() * 9999999999);
      this.form.value["idOrder"] = idOrder;
      this.form.value["producto"] = this.orders;
      pedidos.push(this.form.value);
      localStorage.setItem("orderRegistered", JSON.stringify(pedidos));
      this.dialogRef.close(true);
      console.log(pedidos);
  }

  uploadDocument(event) {
    let file = event.target.files[0]["name"].split(".");

    let ext = file[1].toLowerCase();

    if (event.target.files[0]["size"] > 1000000) {
      alert("El archivo de pesar menos de 1MB");
      return false;
    }

    if (file[1].toLowerCase() != "pdf") {
      alert("El archivo debe ser de tipo PDF");
      return false;
    }

    this.fileContent = event.target.files[0];
    var reader: FileReader = new FileReader();

    reader.onloadend = e => {
      this.form.get("cedula").setValue(reader.result);
    };
    reader.readAsDataURL(this.fileContent);
    this.uploadedDocument = true;

  }

}
