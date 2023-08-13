import React, { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import Notfound from "./components/Notfound/Notfound";
import { Provider } from "react-redux";
import store from "./Redux/store";
import { QueryClient, QueryClientProvider } from "react-query";

export default function App() {
  let  queryClient = new QueryClient()
  let route = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "contact", element: <Contact /> },
        { path: "*", element: <Notfound /> },
      ],
    },
  ]);

  return (
    <>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={route}></RouterProvider>
        </QueryClientProvider>
      </Provider>
    </>
  );
}
