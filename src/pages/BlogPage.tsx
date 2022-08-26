import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import { fetchPosts } from "../store/reducers/asyncActions/asyncGetPosts";
import { fetchPosts } from "../store/toolkitStore/blogSlice";
import { postsSelector } from "../store/selectors/blogPosts";

export const Blog: React.FC = () => {
  const [string, setString] = useState<string>("");
  const posts: IPost2[] = useSelector(postsSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <div>
      <h1>Blog</h1>
      {posts?.map((post) => (
        <Link key={post.id} to={`/posts/${post.id}`}>
          <li>{post.title}</li>
        </Link>
      ))}
    </div>
  );
};
