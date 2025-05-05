import { api } from "./api";

export async function register({
  name,
  email,
  password,
}: {
  name: string;
  email: string;
  password: string;
}) {
  await api.post("/users", { name, email, password });
}

export async function login({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  return api.post("/users/login", { email, password });
}
