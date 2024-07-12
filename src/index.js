import React, { lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ErrorBoundary } from "./components/error-boundary";
import Nav from "./components/nav";
import { mainRoute } from "./components/main";
import { booksRoute } from "./components/books";
import delay from "./util/delay";

const Club = lazy(() => delay(import("./components/club"), 1000));

const router = createBrowserRouter([
  {
    element: <Nav />,
    children: [
      { index: true, ...mainRoute },
      { path: "/books", ...booksRoute },
      { path: "/club", element: <Club /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <ErrorBoundary fallback={<h1>Error at App Level</h1>}>
        <App />
      </ErrorBoundary>
    </RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
