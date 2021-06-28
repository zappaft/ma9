import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatDialog } from '@angular/material/dialog';
import { ClientShowDialog } from 'src/app/dialogs/client-show/client-show.dialog';
import { IClient } from 'src/app/interfaces/iclient';
import { clientDBDate } from 'src/app/utils/client.utils';
import { ClientsService } from 'src/app/services/clients/clients.service';

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
export class ClientsComponent implements OnInit {
  displayedColumns: string[] = ['nome', 'email'];
  dataSource!: MatTableDataSource<IClient>;
  expandedClient?: IClient;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public dialog: MatDialog, private readonly clientsService: ClientsService) {}

  ngOnInit(): void {
    this.clientsService.getClients().subscribe((clients) => {
      this.dataSource = new MatTableDataSource(clients);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
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
      width: '450px',
    });
    dialogRef.afterClosed().subscribe((data: IClient) => {
      if (!data) return;
      data.dat_nasc = clientDBDate(data.dat_nasc);
      if (data.id) this.updateClient(data);
      else this.createClient(data);
    });
  }

  deleteClient(client: IClient) {
    this.dataSource.data = this.dataSource.data.filter((_client: IClient) => {
      return client.id !== _client.id;
    });
    this.clientsService.deleteClient(client).then(console.log);
  }

  async updateClient(client: IClient) {
    this.clientsService.updateClient(client).then((updatedClient: IClient) => {
      this.dataSource.data = this.dataSource.data.map((_client: IClient) => {
        if (updatedClient.id === _client.id) return updatedClient;
        return _client;
      });
    });
  }

  createClient(client: IClient) {
    this.clientsService.createClient(client).then((newClient: IClient) => {
      this.dataSource.data.push(newClient);
    });
  }
}
