import {
  Category
} from './category';

interface catResponse {
  id: string;
  name: string;
}

export interface categoryResponse {
  message: catResponse[];
}
