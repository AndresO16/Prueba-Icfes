import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductoModel } from '../model/producto-model';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  URL_API: string = environment.API_PRODUCTO;
  constructor(private httpClient: HttpClient) { 

  }

  getProductos(): Observable<ProductoModel[]> {
    return this.httpClient.get<ProductoModel[]>(this.URL_API + '/productos').pipe(map(res => res));
  }

  saveProducto(request: any): Observable<any>{
    return this.httpClient.post<any>(this.URL_API + '/save', request).pipe(map(resp => resp));
  }

  updateProducto(request: any): Observable<any>{
    return this.httpClient.post<any>(this.URL_API + '/update', request).pipe(map(resp => resp));
  }

  deleteProducto(id: number): Observable<any>{
    return this.httpClient.get<any>(this.URL_API + '/delete/' + id).pipe(map(resp => resp));
  }
}
