import { use } from "react";

const fetchData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/5");
  return await res.json();
};

const FetchTodo = () => {
  const data = use(fetchData());
  return <div>{data.title}</div>;
};
export default FetchTodo;
