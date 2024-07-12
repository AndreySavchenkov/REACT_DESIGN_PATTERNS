import { Await, defer, useAsyncValue, useLoaderData } from "react-router";
import delay from "../util/delay";
import { Suspense } from "react";

const Books = () => {
  const { bookCountPromise, authorsPromise } = useLoaderData();

  return (
    <div>
      <h2>Heading</h2>
      <p>
        <strong>Available Books: </strong>
        <Suspense fallback={"Fetching Books..."}>
          <Await resolve={bookCountPromise}>
            {(data) => <strong>{data}</strong>}
          </Await>
        </Suspense>
      </p>
      <p>
        <Suspense fallback={"Fetching Authors..."}>
          <Await resolve={authorsPromise}>
            <Authors />
          </Await>
        </Suspense>
      </p>
    </div>
  );
};

const Authors = () => {
  const authors = useAsyncValue();
  return <strong>{authors}</strong>;
};

function loader() {
  const bookCountPromise = delay(10, 1000);
  const authorsPromise = delay("Codelicks", 2000);

  return defer({
    bookCountPromise,
    authorsPromise,
  });
}

export const booksRoute = { element: <Books />, loader };
