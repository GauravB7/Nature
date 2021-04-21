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
import {
  Router
} from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private productService: ProductService, private router: Router) {}

  products: Product[]; //create array of product objects to store the products

  //function to get all available products and store in products array
  getProducts(): void {
    this.productService.getProducts().subscribe((prod) => {
      this.products = prod.message.map((prod) => ({
          //if success, map the res in appropriate format
          id: prod.id,
          categoryId: prod.categoryId,
          productName: prod.productName,
          images: prod.images,
          description: prod.description,
          price: prod.price
        })
      );
    },
    //if error, navigate to login component
    (err) =>{
      this.router.navigate(['login']);
    });

  }

  ngOnInit(): void {
    //On component load, call getProducts method
    this.getProducts();
  }

}
