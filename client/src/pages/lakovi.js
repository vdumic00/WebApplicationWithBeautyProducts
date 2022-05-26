import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardImg, CardTitle } from "reactstrap";

import EditLak from "../components/editComponent/editLak";

const Lak = () => {
  const [lakovi, setLakovi] = useState([]);

  const dohvatiLakove = async () => {
    try {
      const response = await fetch("http://localhost:5000/lak");
      const jsonData = await response.json();

      setLakovi(jsonData);
    } catch (error) {
      console.error(error.message);
    }
  };

  const deleteLak = async (id) => {
    try {
      const deleteLak = await fetch(`http://localhost:5000/lak/${id}`, {
        method: "DELETE",
      });

      setLakovi(lakovi.filter((lak) => lak.lak_id !== id));
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    dohvatiLakove();
  }, []);

  return (
    <div className="container-fluid">
      <h1 className="display-3 title">LAKOVI ZA NOKTE</h1>
      <div className="row">
        {lakovi.map((lak) => (
          <Card style={{ width: "400px" }} className="m-5" key={lak.lak_id}>
            <CardImg src="/images/lakovi.png" alt={lak.naziv} />
            <CardBody>
              <CardTitle>{lak.naziv}</CardTitle>
              <p>Boja: {lak.boja}</p>
              <p>Cijena: {lak.cijena}kn</p>
            </CardBody>
            <EditLak lak={lak} />
            <button
              className="btn btn-delete"
              onClick={() => deleteLak(lak.lak_id)}
            >
              Izbriši
            </button>
          </Card>
        ))}
      </div>
      <Link
        to="/lak/dodaj"
        className="btn btn-info btn-primary btn-lg btn-block fixed-bottom"
      >
        Dodaj lak za nokte
      </Link>
    </div>
  );
};

export default Lak;
