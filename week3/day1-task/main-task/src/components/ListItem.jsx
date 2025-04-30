import React from "react";
import { FaStar } from "react-icons/fa";

const ListItem = ({ text }) => (
  <li className="flex items-center gap-2 p-2 hover:bg-gray-100">
    <FaStar className="text-yellow-500" />
    <span>{text}</span>
  </li>
);

export default ListItem;
