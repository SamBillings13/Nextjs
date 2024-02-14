import Card from "@/Components/Card";
import React, { useEffect, useState } from "react";
export default function Home() {
  const [post, setPost] = useState<Array<any> | null>(null);
  const fetchData = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");

      const data: any[] = await res.json();

      console.log(data);

      setPost(data);

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
