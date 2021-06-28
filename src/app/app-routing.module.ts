import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { ClientsComponent } from './components/clients/clients.component';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';

import { PhonePipe } from './pipes/phone.pipe';
import { CpfPipe } from './pipes/cpf.pipe';
import { RowLabelPipe } from './pipes/row-label.pipe';

import { ClientShowDialog } from './dialogs/client-show/client-show.dialog';
import { SexLabelPipe } from './pipes/sex-label.pipe';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ClientsComponent,
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [ClientsComponent, ClientShowDialog, PhonePipe, CpfPipe, RowLabelPipe, SexLabelPipe],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
