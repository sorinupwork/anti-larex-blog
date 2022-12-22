import Image from "next/image";
import React from "react";

function Logo(props: any) {
  const { renderDefault, title } = props;

  return (
    <div className="flex items-center space-x-2">
      <Image
        className="rounded-full object-cover w-auto h-auto"
        src={"https://i.ibb.co/Nt8prPb/me.png"}
        alt="logo"
        width={50}
        height={50}
        priority
      />
      <>{renderDefault(props)}</>
    </div>
  );
}

export default Logo;
