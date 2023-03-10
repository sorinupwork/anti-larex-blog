import React from "react";

function Banner() {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10 max-w-7xl mx-auto">
      <div>
        <h1 className="text-7xl">RO Community's Daily Blog</h1>
        <h2 className="mt-5 md:mt-0">
          Welcome to{" "}
          <span className="underline decoration-4 decoration-[#f7ab0a]">
            Every Skilled Workers
          </span>{" "}
          favourite blog in the Internet
        </h2>
      </div>

      <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
        New illegal recruitment agencies | The latest news about harassment |
        The weekly job offers & More!
      </p>
    </div>
  );
}

export default Banner;
