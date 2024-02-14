import Card from "@/Components/Card";
import Router, { useRouter } from "next/router";
import Link from "next/link";
import React, { useEffect, useState } from "react";
export default function Home() {
  const [post, setPost] = useState<Array<any> | null>(null);
  const [totalPages, settotalpages] = useState(0);
  const router = useRouter();
  const { page } = router.query;
  const fetchData = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");

      const data: any[] = await res.json();

      console.log(data);

      setPost(data);

      const totalposts = 100;
      const totalPages = Math.ceil(totalposts / 10);
      settotalpages(totalPages);

      return data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(post);
  return (
    <>
      <main className={`main-div`}>
        {post?.map((sameer: any) => {
          return (
            <>
              <React.Fragment key={sameer.id}>
                <Card posts={sameer} />
              </React.Fragment>
            </>
          );
        })}
      </main>
    </>
  );
}
