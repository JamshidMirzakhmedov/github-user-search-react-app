import Footer from "./Footer";
import SearchForm from "./components/SearchForm";
import Details from "./components/Details";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <header>
          <Link to="/">GitHub User Search</Link>
        </header>
        <Routes>
          <Route path="/" element={<SearchForm />} />

          <Route path="/details/:name" element={<Details />} />
        </Routes>
        <Footer />
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
