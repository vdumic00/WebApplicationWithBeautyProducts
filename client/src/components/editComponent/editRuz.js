import React, { useState, Fragment } from "react";

const EditRuz = ({ ruz }) => {
  const [naziv, setNaziv] = useState("");
  const [cijena, setCijena] = useState("");
  const [boja, setBoja] = useState("");

  const updateRuz = async (e) => {
    e.preventDefault();
    try {
      const body = { naziv, boja, cijena };
      const response = await fetch(`http://localhost:5000/ruz/${ruz.ruz_id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      window.location = "/ruz";
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
        data-target={`#id${ruz.ruz_id}`}
        onClick={() => {
          setNaziv(ruz.naziv);
          setBoja(ruz.boja);
          setCijena(ruz.cijena);
        }}
      >
        Uredi
      </button>
      <div
        className="modal"
        id={`id${ruz.ruz_id}`}
        onClick={() => {
          setNaziv(ruz.naziv);
          setBoja(ruz.boja);
          setCijena(ruz.cijena);
        }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Uredi ruž</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                onClick={() => {
                  setNaziv(ruz.naziv);
                  setBoja(ruz.boja);
                  setCijena(ruz.cijena);
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
                onClick={(e) => updateRuz(e)}
              >
                Uredi
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
                onClick={() => {
                  setNaziv(ruz.naziv);
                  setBoja(ruz.boja);
                  setCijena(ruz.cijena);
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

export default EditRuz;
