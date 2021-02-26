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
        id: b?.id ?? "N/A",
        title: b.volumeInfo?.title ?? "N/A",
        authors: b.volumeInfo?.authors ?? "N/A",
        publisher: b.volumeInfo?.publisher ?? "N/A",
        pdate: b.volumeInfo?.publishedDate ?? "N/A",
        description: b.volumeInfo?.description ?? "N/A",
        isbn: b.volumeInfo?.industryIdentifiers?.[0].identifier ?? "",
        pages: b.volumeInfo?.pageCount ?? "N/A",
        categories: b.volumeInfo?.categories ?? "N/A",
        mature: b.volumeInfo?.maturityRating ?? "N/A",
        images: b.volumeInfo?.imageLinks?.thumbnail ?? "",
        language: b.volumeInfo?.language ?? "N/A",
        preview: b.volumeInfo?.previewLink ?? "N/A",
        infoLink: b.volumeInfo?.infoLink ?? "",
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
