import React from "react";

function Home() {
  return (
    <div className="pl-[360px] bg-black ">
      This is home
      <div className="join grid grid-cols-2 w-60 pt-12">
        <button className="join-item btn btn-outline text-red-300">
          Previous
        </button>
        <button className="join-item btn btn-outline text-red-300">Next</button>
      </div>
    </div>
  );
}

export default Home;
