import { useState, useEffect } from "react";
import index from "@/styles/index.module.scss";
import React from "react";
import Card from "@/Components/Card";

export default function Home() {
  const [post, setPost] = useState<Array<any> | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState<boolean>(false);
  const PAGE_SIZE = 4;

  const fetchData = async () => {
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=${PAGE_SIZE}&_page=${currentPage}`
      );
      const data: any[] = await res.json();
      setPost(data);
      setLoading(true);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };
  {
  }

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
    window.scrollTo({
      top: 0,
      behavior: "smooth", // This makes the scrolling smooth
    });
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
    window.scrollTo({
      top: 0,
      behavior: "smooth", // This makes the scrolling smooth
    });
  };

  if (!loading) return <p>loading...</p>;

  return (
    <div className={index.maindiv}>
      <main>
        <div className={index.cardRendering}>
          {/* optional chaining */}
          {post?.map((item: any, index) => (
            <React.Fragment key={item.id}>
              <Card posts={item} />
            </React.Fragment>
          ))}
        </div>

        <div className={index.btndiv}>
          <button onClick={handlePreviousPage} disabled={currentPage == 1}>
            Previous
          </button>
          <button onClick={handleNextPage} disabled={currentPage == 10}>
            Next
          </button>
        </div>
      </main>
    </div>
  );
}
