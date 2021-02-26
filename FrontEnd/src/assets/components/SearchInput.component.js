import React from "react";
import "../scss/SearchInput.scss";
import axios from "axios";

const SearchInput = (props) => {
  const handleQueryChange = (e) => {
    props.setQuery(e.target.value);
  };

  const handleSet = (okBooks) => {
    props.setBooks(
      okBooks.map((b) => ({
        id: b.id,
        title: b.volumeInfo.title,
        authors: b.volumeInfo.authors,
        publisher: b.volumeInfo.publisher,
        pdate: b.volumeInfo.publishedDate,
        description: b.volumeInfo.description,
        isbn: b.volumeInfo.industryIdentifiers[0].identifier,
        pages: b.volumeInfo.pageCount,
        categories: b.volumeInfo.categories,
        mature: b.volumeInfo.maturityRating,
        images: b.volumeInfo.imageLinks.thumbnail,
        language: b.volumeInfo.language,
        preview: b.volumeInfo.previewLink,
        infoLink: b.volumeInfo.infoLink,
      }))
    );
  };

  return (
    <div id="wrapperSearchInput">
      <input
        type="text"
        placeholder="Enter ISBN or Title"
        id="inputSearch"
        value={props.query}
        onChange={handleQueryChange}
      />
      <div
        id="buttonSearch"
        onClick={async () => {
          const books = await axios.get(
            "https://www.googleapis.com/books/v1/volumes?q=" + props.query
          );
          handleSet(books.data.items);
        }}
      >
        Search
      </div>
    </div>
  );
};

export default SearchInput;
