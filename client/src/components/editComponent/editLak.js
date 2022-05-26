import React, { useState, Fragment } from "react";

const EditLak = ({ lak }) => {
  const [naziv, setNaziv] = useState("");
  const [cijena, setCijena] = useState("");
  const [boja, setBoja] = useState("");

  const updateLak = async (e) => {
    e.preventDefault();
    try {
      const body = { naziv, boja, cijena };
      const response = await fetch(`http://localhost:5000/lak/${lak.lak_id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      window.location = "/lak";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-success"
        data-toggle="modal"
        data-target={`#id${lak.lak_id}`}
        onClick={() => {
          setNaziv(lak.naziv);
          setBoja(lak.boja);
          setCijena(lak.cijena);
        }}
      >
        Uredi
      </button>
      <div
        className="modal"
        id={`id${lak.lak_id}`}
        onClick={() => {
          setNaziv(lak.naziv);
          setBoja(lak.boja);
          setCijena(lak.cijena);
        }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Uredi lak za nokte</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                onClick={() => {
                  setNaziv(lak.naziv);
                  setBoja(lak.boja);
                  setCijena(lak.cijena);
                }}
              >
                &times;
              </button>
            </div>
            <div className="modal-body">
              <p>Naziv</p>
              <input
                type="text"
                className="form-control"
                value={naziv}
                onChange={(e) => setNaziv(e.target.value)}
              />
            </div>
            <div className="modal-body">
              <p>Boja</p>
              <input
                type="text"
                className="form-control"
                value={boja}
                onChange={(e) => setBoja(e.target.value)}
              />
            </div>
            <div className="modal-body">
              <p>Cijena</p>
              <input
                type="text"
                className="form-control"
                value={cijena}
                onChange={(e) => setCijena(e.target.value)}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-success"
                data-dismiss="modal"
                onClick={(e) => updateLak(e)}
              >
                Uredi
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
                onClick={() => {
                  setNaziv(lak.naziv);
                  setBoja(lak.boja);
                  setCijena(lak.cijena);
                }}
              >
                Zatvori
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditLak;
