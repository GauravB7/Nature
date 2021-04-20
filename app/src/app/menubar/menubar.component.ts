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
