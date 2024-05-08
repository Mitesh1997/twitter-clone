import Image from "next/image";
import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BiMessage, BiMessageRounded, BiUpload } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa";

const FeedCard: React.FC = () => {
  return <div className="border border-r-0 border-l-0 border-b-0 border-gray-600 p-5 hover:bg-slate-900 transition-all cursor-pointer">
    <div className="grid grid-cols-12 gap-3">
      <div className="col-span-1 ">
        <Image alt="user-image"
         width={50}
         height={50}
          src="https://avatars.githubusercontent.com/u/71910961?s=400&u=1b0fd4f2d7739128ea7f0fde5966eff09b4cb708&v=4" />
      </div>
      <div className="col-span-11 ">
        <h5>Mitesh Sarjare</h5>
        <p>However, none of the configs are required, and it's not necessary to understand what each config does. Instead, search for the features you need to enable or modify in this section and they will show you what to do.
        </p>
        <div className="flex justify-between mt-5 text-xl items-center p-2 w-[90%]" >
        <div >
          <BiMessageRounded/>
        </div> 
        <div >
          <FaRetweet/>
        </div> 
        <div >
          <AiOutlineHeart/>
        </div>
        <div >
          <BiUpload/>
        </div>
        </div>
      </div>
    </div>
  </div>;
};

export default FeedCard;
