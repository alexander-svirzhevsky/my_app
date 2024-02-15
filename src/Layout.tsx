import { Link, Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <h1>Layout</h1>
      <Link to='news'>Go to news</Link>
      <Link to='/'>Go to home</Link>
      <Outlet />
    </>
  );
};
