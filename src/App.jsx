import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import SearchParams from "./SearchParams";
import Details from "./Details";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import AdoptedPetContext from "./AdoptedPetContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  const adoptedpetHook = useState(null);
  return (
    <BrowserRouter>
      <AdoptedPetContext.Provider value={adoptedpetHook}>
        <QueryClientProvider client={queryClient}>
          <div>
            <header>
              <Link to="/">
                <h1> Kushal Pets</h1>
              </Link>
            </header>
            <Routes>
              <Route path="/details/:id" element={<Details />} />
              <Route path="/" element={<SearchParams />} />
            </Routes>
          </div>
        </QueryClientProvider>
      </AdoptedPetContext.Provider>
    </BrowserRouter>
  );
};

createRoot(document.getElementById("root")).render(<App />);

export default App;
