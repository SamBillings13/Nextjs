import { useState, useEffect } from "react";
import React from "react";
import Card from "@/Components/Card";

export default function Home() {
  const [post, setPost] = useState<Array<any> | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const PAGE_SIZE = 10;

  const fetchData = async () => {
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=${PAGE_SIZE}&_page=${currentPage}`
      );
      const data: any[] = await res.json();
      setPost(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <>
      <main className={`main-div`}>
        {post?.map((item: any) => (
          <React.Fragment key={item.id}>
            <Card posts={item} />
          </React.Fragment>
        ))}

        <div>
          <button onClick={handlePreviousPage} disabled={currentPage === 1}>
            Previous
          </button>
          <button onClick={handleNextPage} disabled={currentPage == 10}>
            Next
          </button>
        </div>
      </main>
    </>
  );
}
