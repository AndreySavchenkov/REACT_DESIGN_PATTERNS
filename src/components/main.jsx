import { useLoaderData, defer, Await } from "react-router";
import delay from "../util/delay";
import { Suspense } from "react";

const Main = () => {
  const { promise } = useLoaderData();

  return (
    <div>
      <h2>
        Main -{" "}
        <Suspense fallback={"Fetching..."}>
          <Await resolve={promise}>{(data) => <strong>{data}</strong>}</Await>
        </Suspense>
      </h2>
    </div>
  );
};

function loader() {
  return defer({ promise: delay("Fetched Data", 1000) });
}

export const mainRoute = { element: <Main />, loader };
