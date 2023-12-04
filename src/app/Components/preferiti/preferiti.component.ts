import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { Products } from 'src/model/products';
import { ProductsService } from 'src/service/products.service';

@Component({
  selector: 'app-preferiti',
  templateUrl: './preferiti.component.html',
  styleUrls: ['./preferiti.component.scss'],
})
export class PreferitiComponent implements OnInit {
  prefs: Products[] | undefined;

  constructor(private prodSrv: ProductsService) {}

  ngOnInit() {
    this.prefs = this.prodSrv.getPrefList();
  }
}
