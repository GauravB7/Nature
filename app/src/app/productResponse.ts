import {
  Product
} from '././product';

export interface productResponse {
  id: string;
  categoryId: string;
  productName: string;
  images: string;
  description: string;
  price: Float32Array;
}

export interface Response {
  message: productResponse[];
}

export interface responseById {
  id: string;
  categoryId: string;
  productName: string;
  images: string;
  description: string;
  price: Float32Array;
}
