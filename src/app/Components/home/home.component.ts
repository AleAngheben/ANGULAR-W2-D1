import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/service/products.service';
import { Products, ProductResponce } from 'src/model/products';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  products: ProductResponce | undefined;

  lista: Products[] | undefined;

  prefList: Products[] = [];

  constructor(private prodSrv: ProductsService) {}

  ngOnInit() {
    this.getProd();
  }
  getProd() {
    this.prodSrv.getProducts().subscribe((products) => {
      this.products = products;
      this.lista = products.products;
      console.log(this.lista);
    });
  }

  prefPush(item: Products) {
    this.prodSrv.addToPrefList(item);
    console.log(this.prodSrv.getPrefList());
  }
}
