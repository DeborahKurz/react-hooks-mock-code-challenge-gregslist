import React, {useState} from "react";

function ListingCard({listing,onDeleteListing}) {
  const { id } = listing;
  const [favoriting, setFavoriting] = useState(false);

  function handleUnfavorite(){
    setFavoriting(false)
  }

  function handleFavorite(){
    setFavoriting(true)
  }

  function handleDelete(){
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE"
    })
    onDeleteListing(id)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={listing.description} />
      </div>
      <div className="details">
        {favoriting ? (
          <button className="emoji-button favorite active" onClick={handleUnfavorite} value={favoriting}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleFavorite} value={favoriting}>☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button className="emoji-button delete" onClick={handleDelete}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;