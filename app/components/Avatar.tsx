"use client";

import Image from "next/image";
import React from "react";

const Avatar = () => {
  return (
    <Image
      alt="Avatar"
      width={30}
      height={30}
      className="rounded-full"
      src="/images/placeholder.jpg"
    />
  );
};

export default Avatar;
