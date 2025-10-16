import { useParams } from "react-router-dom";
import { BlogPosts } from "./BlogPosts";

export default function Post() {
  const { slug } = useParams();
  const post = BlogPosts[slug];

  if (!post) {
    return (
      <div style={{ padding: 20 }}>
        <h3>Post not found</h3>
        <p>No post for slug: {slug}</p>
      </div>
    );
  }

  const { title, description } = post;
  return (
    <div style={{ padding: 20 }}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
