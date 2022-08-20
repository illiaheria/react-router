import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState([]);
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [id]);

  return (
    <>
      <button onClick={goBack}>Go Back</button>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </>
  );
};
