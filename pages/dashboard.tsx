import React from "react";
import Link from "next/link";

const dashboard = () => {
  return (
    <div>
      <Link href={"./about"}>
        <button>about</button>
      </Link>
    </div>
  );
};

export default dashboard;
