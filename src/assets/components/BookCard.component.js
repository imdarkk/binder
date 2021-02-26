import React from "react";
import "../scss/BookCard.scss";

const BookCard = (props) => {
  return (
    <div id="wrapperBookCard">
      <div id="imageWrapper">
        <img src={props.images} alt="" id="imageBook" />
      </div>
      <div>
        <p id="title">{props.title}</p>
        <div id="infoWrapper">
          <p id="language">{props.language}</p>
          <p id="pages">Pages: {props.pages}</p>
          {props.mature !== "NOT_MATURE" && <p id="mature">18+</p>}
        </div>
        <p id="isbn">
          <span id="bold">ISBN:</span>
          {props.isbn}
        </p>
        <p id="authors">
          <span id="bold">Author(s):</span> Author 1, Author 2, Author 3, Author
          4
        </p>
        <p id="publisher">
          <span id="bold">Publisher:</span> {props.publisher}
        </p>
        <p id="pdate">
          <span id="bold">Published:</span> {props.date}
        </p>
        <a id="buttonReadMore" href={props.link}>
          Read More...
        </a>
      </div>
    </div>
  );
};

export default BookCard;
