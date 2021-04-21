import {
  Component,
  OnInit
} from '@angular/core';
import {
  Category
} from '../category';
import {
  CategoryService
} from '../services/category.service';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss']
})

export class MenubarComponent implements OnInit {

  constructor(private categoryService: CategoryService) {} //create object for Category Service

  categories: Category[]; //Array of Category objects

  //Get all Product Categories
  getCategories(): void {
    //Subscribe to function of category Service and load all categories
    this.categoryService.getProductCategories().subscribe((res) => {
        this.categories = res.message.map((res) => ({
          id: res.id,
          name: res.name
        }));

      },
      (err) => {
        console.log(err);
      })
  }

  ngOnInit(): void {
    //On component load, call getCategories function
    this.getCategories();
  }

}
