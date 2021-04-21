import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  Product
} from '../product';
import {
  ActivatedRoute, 
  Router
} from '@angular/router';
import {
  ProductService
} from '../services/product.service';
import {
  Location
} from '@angular/common';
import {
  UserService
} from '../services/user.service';

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
    private location: Location,
    private router:Router,
    private userService:UserService) {} //Create the objects for the dependencies

  //Method to get the required product
  getProduct(): void {
    const id = this.route.snapshot.paramMap.get('id'); //extract product id from the url
    this.productService.getProduct(id).subscribe(prod => {
      //upon success, store the product
      this.products = prod.message.map((prod) => ({
        id: prod.id,
        categoryId: prod.categoryId,
        productName: prod.productName,
        images: prod.images.slice(1, ),
        description: prod.description,
        price: prod.price
      }))
      this.product = this.products[0]; //extract product from array
      this.position=this.product.description.split("Position :")[1];
      this.product.description=this.product.description.split("Position :")[0];
    },
    //if any error occurs, navigate to login page
    (err) =>{
      this.router.navigate(['login']);
    })
  }

  //If user opts to buy product
  buyProduct(purchasedProduct:Product):void{
    alert("Your request for "+purchasedProduct.productName+" is registered successfully.");
  }

  ngOnInit(): void {
    this.getProduct();
  }

}
