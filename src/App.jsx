import React from "react";
import { createRoot } from "react-dom/client";
import SearchParams from "./SearchParams";
import Details from "./Details";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      staleTime:Infinity,
      cacheTime:Infinity
    }
  }
})

const App = () => {
  return (
    <BrowserRouter>
    <QueryClientProvider client={queryClient}>
    <div>
      <header>
        <Link to ="/"><h1>Adopt me!</h1></Link>
      </header>
        <Routes>
        <Route path ="/details/:id" element ={<Details/>}/>
        <Route path = "/" element = {<SearchParams/>}/>
        </Routes>
      </div>
    </QueryClientProvider>
    
    </BrowserRouter>
  );
};

createRoot(document.getElementById('root')).render(<App/>);

export default App;
