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
  UserService
} from '../services/user.service';
import {
  Router
} from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private productService: ProductService,private userService:UserService,private router:Router) {}

  checkStatus(){
    if(this.userService.isLoggedOut()){
      this.router.navigate(['login']);
    }
  }

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
    this.checkStatus();
    this.getProducts();
  }

}
