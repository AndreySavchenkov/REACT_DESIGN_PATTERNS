import Modal from "./components/Modal";
import SmallBookListItems from "./components/books/SmallListItems";
import RegularList from "./components/lists/Regular";
import { books } from "./data/books";

function App() {
  return (
    <>
      <Modal>
        <RegularList
          items={books}
          sourceName="book"
          ItemComponent={SmallBookListItems}
        />
      </Modal>
    </>
  );
}

export default App;
