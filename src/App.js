import React from "react";
import "./assets/scss/App.scss";

//Components
import SearchInput from "./assets/components/SearchInput.component.js";
import BookCard from "./assets/components/BookCard.component.js";

function App() {
  const [query, setQuery] = React.useState();
  const [books, setBooks] = React.useState([]);

  return (
    <div className="App">
      <SearchInput
        query={query}
        setQuery={setQuery}
        setBooks={setBooks}
        books={books}
      />
      <div id="wrapperBooksResults">
        {books.map((s) => (
          <BookCard
            images={s.images}
            title={s.title}
            language={s.language}
            pages={s.pages}
            mature={s.mature}
            isbn={s.isbn}
            publisher={s.publisher}
            date={s.pdate}
            link={s.infoLink}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
