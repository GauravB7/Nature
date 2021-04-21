import {
  Component,
  OnInit
} from '@angular/core';
import {
  CategoryService
} from '../services/category.service';
import {
  Category
} from '../category';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private categoryService: CategoryService) {} //Create object for CategoryService

  categories: Category[]; //Create array of Category Objects

  //Get all product categories
  getCategories(): void {
    //Subscribe to function of category service
    this.categoryService.getProductCategories().subscribe((res) => {
      //if sucess, add categories to array
        this.categories = res.message.map((res) => ({
          id: res.id,
          name: res.name
        }));

      },
      //if error log error to console
      (err) => {
        console.log(err);
      })

  }

  ngOnInit(): void {
    //On component load, call getCategories function
    this.getCategories();
  }

}
