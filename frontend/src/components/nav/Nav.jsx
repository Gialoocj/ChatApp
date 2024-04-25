import React from "react";
import { Link } from "react-router-dom";
import { ChatGPT, ChatIcon } from "../icon";

const Nav = () => {
  return (
    <div>
      <ChatGPT className="w-8 h-8" />
      <ChatIcon className="w-8 h-8 text-sky-500" />
      <p className="text-white">Nav</p>
    </div>
  );
};

export default Nav;
