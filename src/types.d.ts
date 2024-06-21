export type Product = {
  id: string;
  title: string;
  description: string;
  price: number;
  categoryId: string;
  productImage: Array;
};

export type Products = {
  totalResults: number;
  totalPages: number;
  currentPage: number;
  products: Product[];
};

export type LoginFormInputs = {
  email: string;
  password: string;
};
