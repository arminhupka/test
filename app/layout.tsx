import { ReactNode } from "react";
import useCartStore from "../store/cart";
import CartInitializer from "../store/CartInitializer";

const getData = async () => {
  const randomId = Math.round(Math.random() * 100);

  const data = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${randomId}`
  );

  if (!data.ok) {
    throw new Error("Some error occurred");
  }

  return data.json();
};

interface IProps {
  children: ReactNode;
}

const layout = async ({ children }: IProps) => {
  const data = await getData();

  useCartStore.setState({ items: [data.title] });

  return (
    <html lang="en">
      <head>
        <title>Some page name</title>
      </head>
      <body>
        <CartInitializer items={[data.title]} />
        {children}
      </body>
    </html>
  );
};

export default layout;
