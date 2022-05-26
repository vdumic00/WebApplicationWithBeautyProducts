import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardImg, CardTitle } from "reactstrap";

import EditParfem from "../components/editComponent/editParfem";

const Parfem = () => {
  const [parfemi, setParfemi] = useState([]);

  const dohvatiParfeme = async () => {
    try {
      const response = await fetch("http://localhost:5000/parfem");
      const jsonData = await response.json();

      setParfemi(jsonData);
    } catch (error) {
      console.error(error.message);
    }
  };

  const deleteParfem = async (id) => {
    try {
      const deleteParfem = await fetch(`http://localhost:5000/parfem/${id}`, {
        method: "DELETE",
      });

      setParfemi(parfemi.filter((parfem) => parfem.parfem_id !== id));
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    dohvatiParfeme();
  }, []);

  return (
    <div className="container-fluid">
      <h1 className="display-3 title">PARFEMI</h1>
      <div className="row">
        {parfemi.map((parfem) => (
          <Card
            style={{ width: "400px" }}
            className="m-5 "
            key={parfem.parfem_id}
          >
            <CardImg src="/images/parfemi.png" alt={parfem.naziv} />
            <CardBody>
              <CardTitle>{parfem.naziv}</CardTitle>
              <p>Cijena: {parfem.cijena}kn</p>
            </CardBody>
            <EditParfem parfem={parfem} />
            <button
              className="btn btn-delete"
              onClick={() => deleteParfem(parfem.parfem_id)}
            >
              Izbriši
            </button>
          </Card>
        ))}
      </div>
      <Link
        to="/parfem/dodaj"
        className="btn btn-info btn-primary btn-lg btn-block fixed-bottom"
      >
        Dodaj parfem
      </Link>
    </div>
  );
};

export default Parfem;
