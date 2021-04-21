import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product';
import {Category} from '../category';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../services/product.service';
import {CategoryService} from '../services/category.service';
import { Location } from '@angular/common';
import {Router} from '@angular/router';
import {UserService} from '../services/user.service';


@Component({
  selector: 'app-products-by-category',
  templateUrl: './products-by-category.component.html',
  styleUrls: ['./products-by-category.component.scss']
})
export class ProductsByCategoryComponent implements OnInit {

  @Input() category: Category;
  products: Product[];

  constructor(private route: ActivatedRoute,
    private productService: ProductService,
    private categoryService: CategoryService,
    private location: Location,
    private router:Router,
    private userService:UserService) {}

  checkStatus() {
      if (this.userService.isLoggedOut()) {
        this.router.navigate(['login']);
      }
  }

  getCategory(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.categoryService.getProductCategory(id).subscribe((res) => {
      this.category = res.message[0];
    })

  }

  getProductsByCategory(): void {
      const id = this.route.snapshot.paramMap.get('id');
      this.categoryService.getProductByCategories(id).subscribe(prod => {
        this.products = prod.message.map((prod) => ({
          id: prod.id,
          categoryId: prod.categoryId,
          productName: prod.productName,
          images: prod.images,
          description: prod.description,
          price: prod.price
        }))
      })
} 

  ngOnInit(): void {
    this.checkStatus();
    this.getCategory();
    this.getProductsByCategory();
  }

}
