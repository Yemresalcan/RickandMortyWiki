
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
import Filters from "./components/Filters/Filters";
import Card from "./components/Cards/Card";
import { useEffect, useState } from "react";
import Pagination from "./components/Pagination/Pagination";
import Search from "./components/Search/Search";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Navbar from "./components/Navbar/Navbar";

import Episodes from "./Pages/Episodes";
import Location from "./Pages/Location";
import CardDetails from "./components/Cards/CardDetails"

function App() {
  return (
<Router>
<div className="App">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<CardDetails />} />

        <Route path="/episodes" element={<Episodes />} />
        <Route path="/episodes/:id" element={<CardDetails />} />

        <Route path="/location" element={<Location />} />
        <Route path="/location/:id" element={<CardDetails />} />
      </Routes>
</Router>
  )

  }


  const Home =() => {
  const [pageNumber, setPageNumber] = useState(1);
  const [status, updateStatus] = useState("");
  const [gender, updateGender] = useState("");
  const [species, updateSpecies] = useState("");
  const [fetchedData, setfetchedData] = useState([]);
  const [search, setSearch] = useState("");
  const { info, results } = fetchedData;



  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;


  useEffect(() => {
    (async function () {
      const data = await fetch(api)
        .then(res => res.json())
      setfetchedData(data)
      console.log(data)
    })()
  }, [api])




  return (
    <div className="App">
      <h1 className="text-center mb-3">Characters</h1>
      <Search setSearch={setSearch} updatePageNumber={setPageNumber} />
      <div className="container">
        <div className="row">
          <Filters
            pageNumber={pageNumber}
            status={status}
            updateStatus={updateStatus}
            updateGender={updateGender}
            updateSpecies={updateSpecies}
            updatePageNumber={setPageNumber}
          />
          <div className="col-lg-8 col-12">
            <div className="row">
              <Card page="/" results={results} />
            </div>
          </div>
        </div>
      </div>
      <Pagination
        info={info}
        pageNumber={pageNumber}
        updatePageNumber={setPageNumber}
      />
    </div>
  );
};

export default App;
