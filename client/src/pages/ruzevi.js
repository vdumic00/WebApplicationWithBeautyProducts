import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardImg, CardTitle } from "reactstrap";

import EditRuz from "../components/editComponent/editRuz";

const Ruz = () => {
  const [ruzevi, setRuzevi] = useState([]);

  const dohvatiRuzeve = async () => {
    try {
      const response = await fetch("http://localhost:5000/ruz");
      const jsonData = await response.json();

      setRuzevi(jsonData);
    } catch (error) {
      console.error(error.message);
    }
  };

  const deleteRuz = async (id) => {
    try {
      const deleteRuz = await fetch(`http://localhost:5000/ruz/${id}`, {
        method: "DELETE",
      });

      setRuzevi(ruzevi.filter((ruz) => ruz.ruz !== id));
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    dohvatiRuzeve();
  }, []);

  return (
    <div className="container-fluid">
      <h1 className="display-3 title">RUŽEVI</h1>
      <div className="row">
        {ruzevi.map((ruz) => (
          <Card style={{ width: "400px" }} className="m-5" key={ruz.ruz_id}>
            <CardImg src="/images/ruzevi.png" alt={ruz.naziv} />
            <CardBody>
              <CardTitle>{ruz.naziv}</CardTitle>
              <p>Boja: {ruz.boja}</p>
              <p>Cijena: {ruz.cijena}kn</p>
            </CardBody>
            <EditRuz ruz={ruz} />
            <button
              className="btn btn-delete"
              onClick={() => deleteRuz(ruz.ruz_id)}
            >
              Izbriši
            </button>
          </Card>
        ))}
      </div>
      <Link
        to="/ruz/dodaj"
        className="btn btn-info btn-primary btn-lg btn-block fixed-bottom"
      >
        Dodaj ruž
      </Link>
    </div>
  );
};

export default Ruz;
