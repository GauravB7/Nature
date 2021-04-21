//Interface for category response
interface catResponse {
  id: string;
  name: string;
}

//Response should be array of catResponse
export interface categoryResponse {
  message: catResponse[];
}
