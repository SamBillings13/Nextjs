import style from "@/styles/card.module.css";
import Link from "next/link";
const Card = ({ posts }: any) => {
  return (
    <div className={style.card}>
      <h4>{posts.id}</h4>
      <h3>{posts.title}</h3>
      <p>{posts.body}</p>
      <button>
        <Link
          //give folder name in slug operation rather then file name
          href={`/blog/${posts.id}`}
          // href={
          //   {
          //     // pathname: `/blog/${posts.body}`,
          //     // query: { exampleProp: `${posts.id}` },
          //   }
          // }
        >
          click
        </Link>
      </button>
    </div>
  );
};

export default Card;
