import React from "react";
import Image from "next/image";

function Rating(props) {
  console.log("hello");
  return (
    <div className="rating">
      <Image src="/images/star.png" width="10rem" height="10rem" />
      <Image src="/images/star.png" width="10rem" height="10rem" />
      <Image src="/images/star.png" width="10rem" height="10rem" />
      <Image src="/images/star.png" width="10rem" height="10rem" />
      <Image src="/images/star.png" width="10rem" height="10rem" />
    </div>
  );
}

export default Rating;