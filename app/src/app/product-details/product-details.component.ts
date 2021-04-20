import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  Product
} from '../product';

import {
  ActivatedRoute
} from '@angular/router';
import {
  ProductService
} from '../services/product.service';
import {
  Location
} from '@angular/common';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  @Input() product: Product;
  products: Product[];
  position:String;

  constructor(private route: ActivatedRoute,
    private productService: ProductService,
    private location: Location) {}

  getProduct(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.productService.getProduct(id).subscribe(prod => {
      this.products = prod.message.map((prod) => ({
        id: prod.id,
        categoryId: prod.categoryId,
        productName: prod.productName,
        images: prod.images.slice(1, ),
        description: prod.description,
        price: prod.price
      }))
      this.product = this.products[0];
      this.position=this.product.description.split("Position :")[1];
      this.product.description=this.product.description.split("Position :")[0];
    })
  }

  buyProduct(purchasedProduct:Product):void{
    alert("Order Placed Successfully");
  }

  ngOnInit(): void {
    this.getProduct();
  }

}
