import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IClient } from 'src/app/interfaces/iclient';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ClientsService {
  private RESOURCE_ENDPOINT = `${environment.baseUrl}/clientes`;
  constructor(private http: HttpClient) {}

  getClients() {
    return this.http.get<IClient[]>(this.RESOURCE_ENDPOINT);
  }

  async deleteClient(client: IClient) {
    const response = await this.http.delete(`${this.RESOURCE_ENDPOINT}/${client.id}`).toPromise();
    return response;
  }

  async createClient(client: IClient) {
    const response = await this.http.post<IClient>(this.RESOURCE_ENDPOINT, client).toPromise();
    return response;
  }

  async updateClient(client: IClient) {
    const response = await this.http.put<IClient>(`${this.RESOURCE_ENDPOINT}/${client.id}`, client).toPromise();
    return response;
  }
}
