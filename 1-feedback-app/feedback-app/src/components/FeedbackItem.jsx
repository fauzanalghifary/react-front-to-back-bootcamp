import React from "react";
import Card from "./shared/Card";
// import { useState } from "react";
import PropTypes from "prop-types";
import { FaTimes } from "react-icons/fa";
function FeedbackItem({ item, handleDelete }) {
  //   const [rating, setRating] = useState(7);
  //   const [text, setText] = useState("This is an example");

  //   const handleClick = () => {
  //     setRating((prev) => {
  //       return prev + 1;
  //     });
  //   };

  //   const handleClick = (id) => {
  //     console.log(id);
  //   };

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => handleDelete(item.id)} className="close">
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
      {/* <button onClick={handleClick}>Click</button> */}
    </Card>
  );
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default FeedbackItem;
