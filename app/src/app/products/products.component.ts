import {
  Component,
  OnInit
} from '@angular/core';
import {
  Product
} from '../product';
import {
  ProductService
} from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private productService: ProductService) {}

  products: Product[];

  getProducts(): void {
    this.productService.getProducts().subscribe((prod) => {
      console.log(prod);
      this.products = prod.message.map((prod) => ({
          id: prod.id,
          categoryId: prod.categoryId,
          productName: prod.productName,
          images: prod.images,
          description: prod.description,
          price: prod.price
        })

      );

    });

  }

  ngOnInit(): void {
    this.getProducts();
  }

}
