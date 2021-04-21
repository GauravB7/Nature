import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  Product
} from '../product';
import {
  Category
} from '../category';
import {
  ActivatedRoute
} from '@angular/router';
import {
  CategoryService
} from '../services/category.service';
import {
  Location
} from '@angular/common';
import {
  Router
} from '@angular/router';

@Component({
  selector: 'app-products-by-category',
  templateUrl: './products-by-category.component.html',
  styleUrls: ['./products-by-category.component.scss']
})
export class ProductsByCategoryComponent implements OnInit {

  category: Category; // object for Category
  products: Product[]; //array for storing products

  constructor(private route: ActivatedRoute,
    private categoryService: CategoryService,
    private location: Location,
    private router: Router) {} //create objects for dependencies

  //Get the selected category 
  getCategory(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.categoryService.getProductCategory(id).subscribe((res) => {
        //store the category
        this.category = res.message[0];
      },
      //if error, navigate to login page
      (err) => {
        this.router.navigate(['login']);
      })

  }

  //Get all products for the specified category
  getProductsByCategory(): void {
    const id = this.route.snapshot.paramMap.get('id'); //extract category id from url
    this.categoryService.getProductByCategories(id).subscribe(prod => {
        //on success, store all products in products array
        this.products = prod.message.map((prod) => ({
          id: prod.id,
          categoryId: prod.categoryId,
          productName: prod.productName,
          images: prod.images,
          description: prod.description,
          price: prod.price
        }))
      },
      //if error, navigate to login page
      (err) => {
        this.router.navigate(['login']);
      })
  }

  ngOnInit(): void {
    //get the current category and the products for the selected category
    this.getCategory();
    this.getProductsByCategory();
  }

}
