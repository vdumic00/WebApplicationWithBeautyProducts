import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardImg, CardTitle } from "reactstrap";

import EditMaskara from "../components/editComponent/editMaskara";

const Maskara = () => {
  const [maskare, setMaskare] = useState([]);

  const dohvatiMaskare = async () => {
    try {
      const response = await fetch("http://localhost:5000/maskara");
      const jsonData = await response.json();

      setMaskare(jsonData);
    } catch (error) {
      console.error(error.message);
    }
  };

  const deleteMaskara = async (id) => {
    try {
      const deleteMaskara = await fetch(`http://localhost:5000/maskara/${id}`, {
        method: "DELETE",
      });

      setMaskare(maskare.filter((maskara) => maskara.maskara_id !== id));
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    dohvatiMaskare();
  }, []);

  return (
    <div className="container-fluid">
      <h1 className="display-3 title">MASKARE</h1>
      <div className="row">
        {maskare.map((maskara) => (
          <Card
            style={{ width: "400px" }}
            className="m-5"
            key={maskara.maskara_id}
          >
            <CardImg src="/images/maskare.png" alt={maskara.naziv} />
            <CardBody>
              <CardTitle>{maskara.naziv}</CardTitle>
              <p>Boja: {maskara.boja}</p>
              <p>Cijena: {maskara.cijena}kn</p>
            </CardBody>
            <EditMaskara maskara={maskara} />
            <button
              className="btn btn-delete"
              onClick={() => deleteMaskara(maskara.maskara_id)}
            >
              Izbriši
            </button>
          </Card>
        ))}
      </div>
      <Link
        to="/maskara/dodaj"
        className="btn btn-info btn-primary btn-lg btn-block fixed-bottom"
      >
        Dodaj maskaru
      </Link>
    </div>
  );
};

export default Maskara;
