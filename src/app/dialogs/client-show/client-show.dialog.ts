import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IClient } from 'src/app/interfaces/iclient';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'client-show-dialog',
  templateUrl: 'client-show.dialog.html',
  styleUrls: ['client-show.dialog.scss'],
})
export class ClientShowDialog implements OnInit {
  clientForm = new FormGroup({
    nome: new FormControl(''),
    email: new FormControl(''),
    cpf: new FormControl(''),
    phone: new FormControl(''),
    sexo: new FormControl(''),
    dat_nasc: new FormControl(''),
  });

  constructor(@Inject(MAT_DIALOG_DATA) public data?: IClient) {}

  ngOnInit(): void {
    // Object.entries(this.data || {}).forEach(([key, value]) => {
    //   if (key === 'id') return;
    //   this.clientForm.controls[key].patchValue(value || '');
    // });
    console.log(this.clientForm);
    console.log(this.clientForm.valid);
  }
}
