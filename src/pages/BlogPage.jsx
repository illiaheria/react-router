import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPosts } from "../store/reducers/asyncActions/asyncGetPosts";
import { postsSelector } from "../store/selectors/blogPosts";

export const Blog = () => {
  const posts = useSelector(postsSelector);
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
