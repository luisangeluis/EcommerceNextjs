export type Product = {
  id: string;
  title: string;
  description: string;
  price: number;
  categoryId: string;
  productImage: Array;
};

export type LoginFormInputs = {
  email: string;
  password: string;
};
