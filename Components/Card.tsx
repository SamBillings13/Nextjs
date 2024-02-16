import card from "@/styles/card.module.scss";
import Link from "next/link";
import staticimg from "@/assets/staticImage.jpg";
import Image from "next/image";

const Card = ({ posts }: any) => {
  const apiBody = `${posts.body}`;

  const apiTitle = `${posts.title}`;

  const objTitle = Object.values(apiTitle);

  const objBody = Object.values(apiBody);

  console.log(objBody, "converted array");

  return (
    <div className={card.cardBody}>
      <div className={card.cardmain}>
        <Image
          loading="lazy"
          className={card.cardImg}
          src={staticimg}
          alt="not found"
        />
        <h3 className={card.lineclamp2}>
          {/* {objTitle.splice(0, 10).map((title, index) => (
            <h4 key={index}>{title}</h4>
          ))} */}

          {posts.title}
        </h3>

        {/* {objBody.slice(0, 4).map((text, index) => (
          <p key={index}>{text}</p>
        ))} */}

        <p className={card.lineclamp}>{posts.body}</p>

        <Link
          className={card.btn}
          //give folder name in slug operation rather then file name
          href={`/blog/${posts.id}`}
        >
          click
        </Link>
      </div>
    </div>
  );
};

export default Card;
