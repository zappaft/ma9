import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IClient } from 'src/app/interfaces/iclient';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { clientDisplayDate } from 'src/app/utils/client.utils';

@Component({
  selector: 'client-show-dialog',
  templateUrl: 'client-show.dialog.html',
  styleUrls: ['client-show.dialog.scss'],
})
export class ClientShowDialog implements OnInit {
  clientForm = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    cpf: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    sexo: new FormControl('', [Validators.required]),
    dat_nasc: new FormControl('', [Validators.required]),
    id: new FormControl(null),
  });

  constructor(@Inject(MAT_DIALOG_DATA) public data?: IClient) {}

  ngOnInit(): void {
    Object.entries(this.data || {}).forEach(([key, value]) => {
      this.clientForm.controls[key].patchValue(this.filterValue(key, value));
    });
  }

  private filterValue(key: string, value: string): string | null {
    if (key === 'dat_nasc') {
      return clientDisplayDate(value);
    }
    return value;
  }
}
