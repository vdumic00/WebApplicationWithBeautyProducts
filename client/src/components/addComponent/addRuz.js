import React, { useState } from "react";
import { Card } from "reactstrap";

const AddRuz = () => {
  const [naziv, setNaziv] = useState("");
  const [cijena, setCijena] = useState("");
  const [boja, setBoja] = useState("");

  const onDodaj = async (e) => {
    e.preventDefault();
    try {
      const body = { naziv, boja, cijena };
      const response = await fetch("http://localhost:5000/ruz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      window.location = "/ruz";
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="container-fluid">
      <h1 className="display-3 title">DODAJ RUŽ</h1>
      <div className="container-fluid card-form">
        <Card className="card-add mx-auto">
          <form className="forma was-validated">
            <div className="form-group">
              <label className="card-naziv">Naziv</label>
              <input
                type="naziv"
                className="form-control"
                id="inputNaziv"
                placeholder="Unesite naziv ruža"
                value={naziv}
                onChange={(e) => setNaziv(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label className="card-naziv">Boja</label>
              <input
                type="boja"
                className="form-control"
                id="inputBoja"
                placeholder="Unesite boju ruža"
                value={boja}
                onChange={(e) => setBoja(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label className="card-naziv">Cijena (kn)</label>
              <input
                type="cijena"
                className="form-control"
                id="inputCijena"
                placeholder="Unesite cijenu"
                value={cijena}
                onChange={(e) => setCijena(e.target.value)}
                required
              />
            </div>
            <div className="form-group text-center">
              <img
                src="/images/ruzevi.png"
                style={{ width: "250px" }}
                alt="ruz"
              />
            </div>
            <div className="form-group text-center">
              <button
                type="submit"
                className="btn btn-delete btn-add"
                onClick={onDodaj}
              >
                Dodaj
              </button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default AddRuz;
