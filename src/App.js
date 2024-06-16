import Card from "./components/card";

function App() {
  return (
    <Card test="Value">
      <Card.Header>
        <h1 style={{ margin: 0 }}>Header</h1>
      </Card.Header>
      <Card.Body>
        body body body ...body body body ...body body body ...body body body
        ...body body body ...body body body ...body body body ...body body body
        ...body body body ...
      </Card.Body>
      <Card.Footer>
        <button>Ok</button>
        <button>Cancel</button>
      </Card.Footer>
    </Card>
  );
}

export default App;
