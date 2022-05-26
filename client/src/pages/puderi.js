import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardImg, CardTitle } from "reactstrap";

import EditPuder from "../components/editComponent/editPuder";

const Puder = () => {
  const [puderi, setPuderi] = useState([]);

  const dohvatiPudere = async () => {
    try {
      const response = await fetch("http://localhost:5000/puder");
      const jsonData = await response.json();

      setPuderi(jsonData);
    } catch (error) {
      console.error(error.message);
    }
  };

  const deletePuder = async (id) => {
    try {
      const deletePuder = await fetch(`http://localhost:5000/puder/${id}`, {
        method: "DELETE",
      });

      setPuderi(puderi.filter((puder) => puder.puder_id !== id));
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    dohvatiPudere();
  }, []);

  return (
    <div className="container-fluid">
      <h1 className="display-3 title">PUDERI</h1>
      <div className="row">
        {puderi.map((puder) => (
          <Card style={{ width: "400px" }} className="m-5" key={puder.puder_id}>
            <CardImg src="/images/puderi.png" alt={puder.naziv} />
            <CardBody>
              <CardTitle>{puder.naziv}</CardTitle>
              <p>Cijena: {puder.cijena}kn</p>
            </CardBody>
            <EditPuder puder={puder} />
            <button
              className="btn btn-delete"
              onClick={() => deletePuder(puder.puder_id)}
            >
              Izbriši
            </button>
          </Card>
        ))}
      </div>
      <Link
        to="/puder/dodaj"
        className="btn btn-info btn-primary btn-lg btn-block fixed-bottom"
      >
        Dodaj puder
      </Link>
    </div>
  );
};

export default Puder;
