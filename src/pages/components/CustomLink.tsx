import React from "react";
import { Link, useMatch } from "react-router-dom";

interface ICustomLinkProps {
  to: string;
  children: React.ReactNode;
}

export const CustomLink: React.FC<ICustomLinkProps> = ({
  children,
  to,
  ...props
}) => {
  const match = useMatch({
    path: to,
    end: to.length === 1,
  });

  return (
    <Link
      to={to}
      style={{
        color: match ? "green" : "white",
      }}
      {...props}
    >
      {children}
    </Link>
  );
};
