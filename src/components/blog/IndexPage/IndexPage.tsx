import styles from "./IndexPage.module.css";

import { convertTitleToSlug } from "../../../utils";
import { blogPosts } from "../data";
import { TBlogPost } from "../../../types";
import { Link } from "react-router-dom";

interface TPostProps {
  date: string;
  title: string;
}

function Post({ date, title }: TPostProps) {
  return (
    <div className={styles.post} id="post-page">
      <p className={styles.date}>{date}</p>
      <Link to={`/blog/${convertTitleToSlug(title)}`}>
        <h2>{title}</h2>
      </Link>
    </div>
  );
}

export function IndexPage() {
  return (
    <section className={styles.container} id="index-page">
      {blogPosts.map((blogPost: TBlogPost) => (
        <Post key={blogPost.id} title={blogPost.title} date={blogPost.date} />
      ))}
      <h1>( this blog is currently under construction... 🚧 )</h1>
    </section>
  );
}
