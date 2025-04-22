import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private readonly baseURL: string = 'https://fakestoreapi.com/';

  constructor(
    private readonly http: HttpClient
  ) { }

  getAllProductsWithLimit(limit: number = 5): Observable<any>{
    const productsURL: string = `${this.baseURL}products?limit=${limit}`;
    return this.http.get<any>(productsURL);
  }
}
