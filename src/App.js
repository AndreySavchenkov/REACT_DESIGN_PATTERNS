import LargeAuthorListItems from "./components/authors/LargeListItems";
import SmallAuthorListItems from "./components/authors/SmallListItems";
import LargeBookListItems from "./components/books/LargeListItems";
import SmallBookListItems from "./components/books/SmallListItems";
import NumberedList from "./components/lists/Numbered";
import RegularList from "./components/lists/Regular";
import { authors } from "./data/authors";
import { books } from "./data/books";

function App() {
  return (
    <>
      <RegularList
        items={authors}
        sourceName="author"
        ItemComponent={SmallAuthorListItems}
      />
      <NumberedList
        items={authors}
        sourceName="author"
        ItemComponent={LargeAuthorListItems}
      />
      <RegularList
        items={books}
        sourceName="book"
        ItemComponent={SmallBookListItems}
      />
      <NumberedList
        items={books}
        sourceName="book"
        ItemComponent={LargeBookListItems}
      />
    </>
  );
}

export default App;
