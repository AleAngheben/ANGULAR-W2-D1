import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Products, ProductResponce } from 'src/model/products';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  url = 'https://dummyjson.com/products';

  prefList: Products[] = [];

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<ProductResponce>(this.url);
  }

  addToPrefList(item: Products) {
    this.prefList.push(item);
  }

  getPrefList(): Products[] {
    return this.prefList;
  }
}
