//ProductResponse interface
export interface productResponse {
  id: string;
  categoryId: string;
  productName: string;
  images: string;
  description: string;
  price: string;
}

//Response should return message which contains array of productResponse
export interface Response {
  message: productResponse[];
}

