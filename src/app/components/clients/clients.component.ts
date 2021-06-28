import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatDialog } from '@angular/material/dialog';
import { ClientShowDialog } from 'src/app/dialogs/client-show/client-show.dialog';
import { IClient } from 'src/app/interfaces/iclient';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ClientsComponent implements AfterViewInit {
  displayedColumns: string[] = ['nome', 'email'];
  dataSource = new MatTableDataSource<IClient>(CLIENT_DATA);
  expandedClient?: IClient;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public dialog: MatDialog) {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  clientDialog(client?: IClient) {
    const dialogRef = this.dialog.open(ClientShowDialog, {
      data: client,
      width: '350px',
    });
    dialogRef.afterClosed().subscribe(console.log);
  }

  buttonTest() {
    console.log('test');
  }
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const CLIENT_DATA: IClient[] = [
  {
    cpf: '40649570596',
    nome: 'Bruna Daiane da Luz',
    sexo: 'F',
    dat_nasc: '1992-07-04T00:00:00',
    email: 'bruna@email.com',
    phone: '79997722214',
    id: 1,
  },
  {
    cpf: '41338996959',
    nome: 'João Geraldo Brito',
    sexo: 'M',
    dat_nasc: '1980-02-21T00:00:00',
    email: 'joao@email.com',
    phone: '79982120227',
    id: 2,
  },
  {
    cpf: '13683641797',
    nome: 'Eduarda Nina Aragão',
    sexo: 'F',
    dat_nasc: '1987-11-21T00:00:00',
    email: 'eduarda@email.com',
    phone: '84996355327',
    id: 3,
  },
  {
    cpf: '40649570596',
    nome: 'Brunars Daiane da Luz',
    sexo: 'F',
    dat_nasc: '1992-07-04T00:00:00',
    email: 'bruna@email.com',
    phone: '79997722214',
    id: 4,
  },
];
