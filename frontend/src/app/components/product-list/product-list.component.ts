import { ProductService } from './../../services/product-service.service';
import { Product } from './../../common/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[];
  
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.listProducts();
  }

  listProducts() {
    console.log("Method call");
    this.productService.getProductList().subscribe(
      data => {
        this.products = data;
      }
    )
  }
}
