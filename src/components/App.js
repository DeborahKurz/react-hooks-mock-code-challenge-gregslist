import React, {useEffect, useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:6001/listings")
    .then(r=>r.json())
    .then(listingArray=>{
      setListings(listingArray)
      console.log("App.js listingArray: ", listingArray)
    })
  }, [])

  function deleteListing(id){
    const updatedListings = listings.filter(listing => listing.id !== id)
    setListings(updatedListings)
  }

  function searchListings(search){
    const updatedListings = listings.filter(listing => listing.description === search)
      setListings(updatedListings);
  }
  
  return (
    <div className="app">
      <Header onSearch={searchListings}/>
      <ListingsContainer listings={listings} onDeleteListing={deleteListing}/>
    </div>
  );
}

export default App;