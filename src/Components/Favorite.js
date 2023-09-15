import React from "react";
import { FavoriteData } from "./FavoriteData";
import "./Favorite.css";

function Favorite() {
  const favoriteItems = FavoriteData.map((item) => (
    <li key={item.id}>
      <div className="col-item">
        <div className="card">
          <img className="favorite-image" src={item.img} alt="favorite food" />
          <h4 className="title">{item.text}</h4>
          <p className="sub-title">{item.textSub}</p>
        </div>
      </div>
    </li>
  ));
  return (
    <div className="favorite-container">
      <h2 className="favorite-title">Våra favoriter</h2>
      <div className="row-item">
        <ul>{favoriteItems}</ul>
      </div>
    </div>
  );
  /*return (
      <div className='favorite-container'>
        <h2 className='favorite-title'>Våra favoriter</h2>

        <div className='row-item'>
          {FavoriteData.map(item => (
            <div className='col-item'>
              <div className='card'>
                
                <img className='favorite-image' src={item.img} alt='favorite food' />
                  <h4 className='title'>{item.text}</h4>
                   <p className='sub-title'>{item.textSub}</p> 
                 
              </div>
              </div>
          ))}
            
        </div>
      </div>
    );*/
}

export default Favorite;
