import React, { useState, Fragment } from "react";

const EditParfem = ({ parfem }) => {
  const [naziv, setNaziv] = useState("");
  const [cijena, setCijena] = useState("");

  const updateParfem = async (e) => {
    e.preventDefault();
    try {
      const body = { naziv, cijena };
      const response = await fetch(
        `http://localhost:5000/parfem/${parfem.parfem_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );

      window.location = "/parfem";
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
        data-target={`#id${parfem.parfem_id}`}
        onClick={() => {
          setNaziv(parfem.naziv);
          setCijena(parfem.cijena);
        }}
      >
        Uredi
      </button>
      <div
        className="modal"
        id={`id${parfem.parfem_id}`}
        onClick={() => {
          setNaziv(parfem.naziv);
          setCijena(parfem.cijena);
        }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Uredi parfem</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                onClick={() => {
                  setNaziv(parfem.naziv);
                  setCijena(parfem.cijena);
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
                onClick={(e) => updateParfem(e)}
              >
                Uredi
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
                onClick={() => {
                  setNaziv(parfem.naziv);
                  setCijena(parfem.cijena);
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

export default EditParfem;
