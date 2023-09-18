import React from "react";
import "./Meny.css";
import {
  Paradratter,
  Kycklingratter,
  Biffratter,
  Rakratter,
  Ankratter,
  Curryratter,
  Veganskaratter,
  Padthai,
  Aggnudlar,
  DryckEfterratt,
} from "./MenyData";

function Meny() {
  const paradList = Paradratter.map((item) => (
    <li key={item.id}>
      <div>
        <h4 className="dish">
          {item.id} {item.dish}
        </h4>
        <h4 className="price">{item.price}</h4>
        <p className="contains">{item.contains}</p>
      </div>
    </li>
  ));
  const kycklingList = Kycklingratter.map((item) => (
    <li key={item.id}>
      <div>
        <h4 className="dish">
          {item.id} {item.dish}
        </h4>
        <h4 className="price">{item.price}</h4>
        <p className="contains">{item.contains}</p>
      </div>
    </li>
  ));
  const biffList = Biffratter.map((item) => (
    <li key={item.id}>
      <div>
        <h4 className="dish">
          {item.id} {item.dish}
        </h4>
        <h4 className="price">{item.price}</h4>
        <p className="contains">{item.contains}</p>
      </div>
    </li>
  ));
  const rakList = Rakratter.map((item) => (
    <li key={item.id}>
      <div>
        <h4 className="dish">
          {item.id} {item.dish}
        </h4>
        <h4 className="price">{item.price}</h4>
        <p className="contains">{item.contains}</p>
      </div>
    </li>
  ));
  const ankaList = Ankratter.map((item) => (
    <li key={item.id}>
      <div>
        <h4 className="dish">
          {item.id} {item.dish}
        </h4>
        <h4 className="price">{item.price}</h4>
        <p className="contains">{item.contains}</p>
      </div>
    </li>
  ));
  const curryList = Curryratter.map((item) => (
    <li key={item.id}>
      <div>
        <h4 className="dish">
          {item.id} {item.dish}
        </h4>
        <h4 className="price">{item.price}</h4>
        <p className="contains">{item.contains}</p>
      </div>
    </li>
  ));
  const veganList = Veganskaratter.map((item) => (
    <li key={item.id}>
      <div>
        <h4 className="dish">
          {item.id} {item.dish}
        </h4>
        <h4 className="price">{item.price}</h4>
        <p className="contains">{item.contains}</p>
      </div>
    </li>
  ));
  const padthaiList = Padthai.map((item) => (
    <li key={item.id}>
      <div>
        <h4 className="dish">
          {item.id} {item.dish}
        </h4>
        <h4 className="price">{item.price}</h4>
        <p className="contains">{item.contains}</p>
      </div>
    </li>
  ));
  const aggnudlaList = Aggnudlar.map((item) => (
    <li key={item.id}>
      <div>
        <h4 className="dish">
          {item.id} {item.dish}
        </h4>
        <h4 className="price">{item.price}</h4>
        <p className="contains">{item.contains}</p>
      </div>
    </li>
  ));
  const drickList = DryckEfterratt.map((item) => (
    <li key={item.id}>
      <div>
        <h4 className="dish">
          {item.id} {item.dish}
        </h4>
        <h4 className="price">{item.price}</h4>
      </div>
    </li>
  ));
  return (
    <div id="meny">
    <div className="menu-container">
      <h2 className="menu-title">Vår meny</h2>
      <div className="menu-item">
        <div className="column">
        <h3 className="section-title">Paradrätter</h3>
        <ul>{paradList}</ul>
        <h3 className="section-title">Kycklingrätter</h3>
        <ul>{kycklingList}</ul>
        <h3 className="section-title">Biffrätter</h3>
        <ul>{biffList}</ul>

        </div>
        <div className="column">
        <h3 className="section-title">Räkrätter</h3>
        <ul>{rakList}</ul>
        <h3 className="section-title">Ankrätter</h3>
        <ul>{ankaList}</ul>
        <h3 className="section-title">Curryrätter</h3>
        <ul>{curryList}</ul>
        <h3 className="section-title">Veganska rätter</h3>
        <ul>{veganList}</ul>
        <h3 className="section-title">Padthai</h3>
        <ul>{padthaiList}</ul>
        <h3 className="section-title">Äggnudlar</h3>
        <ul>{aggnudlaList}</ul>
        <h3 className="section-title">Dryck och efterrätt</h3>
        <ul>{drickList}</ul>

        </div>
        
        
      </div>
    </div>
     </div>
  );
  /* return (
    <div className="menu-container">
      <h2 className="menu-title">Vår meny</h2>
      <div>
        <h3 className="section-title-1">Paradrätter</h3>
        <div className="menu-item">
          {Paradratter.map((item) => (
            <div>
              <h4 className="dish">
                {item.id} {item.dish}
              </h4>
              <h4 className="price">{item.price}</h4>
              <p className="contains">{item.contains}</p>
            </div>
          ))}
        </div>
        <hr className="menu-divider"></hr>
        <div className="menu-item">
          <h3 className="section-title">Kycklingrätter</h3>
          {Kycklingratter.map((item) => (
            <div>
              <h4 className="dish">
                {item.id} {item.dish}
              </h4>
              <h4 className="price">{item.price}</h4>
              <p className="contains">{item.contains}</p>
            </div>
          ))}

          <h3 className="section-title">Biffrätter</h3>
          {Biffratter.map((item) => (
            <div>
              <h4 className="dish">
                {item.id} {item.dish}
              </h4>
              <h4 className="price">{item.price}</h4>
              <p className="contains">{item.contains}</p>
            </div>
          ))}

          <h3 className="section-title">Räkrätter</h3>
          {Rakratter.map((item) => (
            <div>
              <h4 className="dish">
                {item.id} {item.dish}
              </h4>
              <h4 className="price">{item.price}</h4>
              <p className="contains">{item.contains}</p>
            </div>
          ))}

          <h3 className="section-title">Ankrätter</h3>
          {Ankratter.map((item) => (
            <div>
              <h4 className="dish">
                {item.id} {item.dish}
              </h4>
              <h4 className="price">{item.price}</h4>
              <p className="contains">{item.contains}</p>
            </div>
          ))}

          <h3 className="section-title">Curryrätter</h3>
          {Curryratter.map((item) => (
            <div>
              <h4 className="dish">
                {item.id} {item.dish}
              </h4>
              <h4 className="price">{item.price}</h4>
              <p className="contains">{item.contains}</p>
            </div>
          ))}

          <h3 className="section-title">Veganska rätter</h3>
          {Veganskaratter.map((item) => (
            <div>
              <h4 className="dish">
                {item.id} {item.dish}
              </h4>
              <h4 className="price">{item.price}</h4>
              <p className="contains">{item.contains}</p>
            </div>
          ))}

          <h3 className="section-title">Pad thai</h3>
          {Padthai.map((item) => (
            <div>
              <h4 className="dish">
                {item.id} {item.dish}
              </h4>
              <h4 className="price">{item.price}</h4>
              <p className="contains">{item.contains}</p>
            </div>
          ))}

          <h3 className="section-title">Äggnudlar</h3>
          {Aggnudlar.map((item) => (
            <div>
              <h4 className="dish">
                {item.id} {item.dish}
              </h4>
              <h4 className="price">{item.price}</h4>
              <p className="contains">{item.contains}</p>
            </div>
          ))}

          <h3 className="section-title">Dryck och efterrätt</h3>
          {DryckEfterratt.map((item) => (
            <div>
              <h4 className="dish">
                {item.id} {item.dish}
              </h4>
              <h4 className="price">{item.price}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );*/
}

export default Meny;
