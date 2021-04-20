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

  constructor(private categoryService: CategoryService) {}

  categories: Category[];

  getCategories(): void {
    this.categoryService.getProductCategories().subscribe((res) => {
      this.categories = res.message.map((res) => ({
        id: res.id,
        name: res.name
      }));

    })

  }

  ngOnInit(): void {
    this.getCategories();
  }

}
