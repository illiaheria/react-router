import { Outlet } from "react-router";
import { CustomLink } from "./CustomLink";

export const Layout = () => {
  return (
    <>
      <header className="App-header">
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/posts">Blog</CustomLink>
        <CustomLink to="about">About</CustomLink>
        <CustomLink to="counter">counter</CustomLink>
      </header>
      <div className="container">
        <Outlet />
      </div>
    </>
  );
};
