import style from "@/pages/blog/blog.module.css";
import Card from "@/Components/Card";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const Page = () => {
  const router = useRouter();
  const [postId, setPostId] = useState(null); // Initialize postId state with null

  useEffect(() => {
    const dataFetch = async () => {
      const id = router.query.blogs;
      if (id) {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        );
        const data = await res.json();
        setPostId(data);
      }
    };

    dataFetch();
  }, [router.query.blogs]); // Run useEffect whenever router.query.blogs changes

  return (
    <div className={style.mainpara}>
      {/* Add a title for the page */}
      <div className={style.para}>
        {postId ? <Card posts={postId} /> : <p>Loading...</p>}{" "}
        {/* Conditionally render Card component */}
      </div>
    </div>
  );
};

export default Page;
