export interface Transaction {
  id: string;
  title: string;
  type: string;
  value: string;
  createdAt: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
}
