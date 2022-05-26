import React, { useState, Fragment } from "react";

const EditPuder = ({ puder }) => {
  const [naziv, setNaziv] = useState("");
  const [cijena, setCijena] = useState("");

  const updatePuder = async (e) => {
    e.preventDefault();
    try {
      const body = { naziv, cijena };
      const response = await fetch(
        `http://localhost:5000/puder/${puder.puder_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );

      window.location = "/puder";
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
        data-target={`#id${puder.puder_id}`}
        onClick={() => {
          setNaziv(puder.naziv);
          setCijena(puder.cijena);
        }}
      >
        Uredi
      </button>
      <div
        className="modal"
        id={`id${puder.puder_id}`}
        onClick={() => {
          setNaziv(puder.naziv);
          setCijena(puder.cijena);
        }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Uredi puder</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                onClick={() => {
                  setNaziv(puder.naziv);
                  setCijena(puder.cijena);
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
                onClick={(e) => updatePuder(e)}
              >
                Uredi
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
                onClick={() => {
                  setNaziv(puder.naziv);
                  setCijena(puder.cijena);
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

export default EditPuder;
