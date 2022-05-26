const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

app.use(cors());
app.use(express.json());

/////////////////////////////////////////////////////
// DODAVANJE

// Dodaj parfem
app.post("/parfem", async (req, res) => {
  try {
    const { naziv, cijena } = req.body;
    const noviParfem = await pool.query(
      "INSERT INTO parfem (naziv, cijena) VALUES($1, $2) RETURNING *",
      [naziv, cijena]
    );

    res.json(noviParfem.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

// Dodaj lak
app.post("/lak", async (req, res) => {
  try {
    const { naziv, cijena, boja } = req.body;
    const noviLak = await pool.query(
      "INSERT INTO lak (naziv, cijena, boja) VALUES($1, $2, $3) RETURNING *",
      [naziv, cijena, boja]
    );

    res.json(noviLak.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

// Dodaj maskaru
app.post("/maskara", async (req, res) => {
  try {
    const { naziv, cijena, boja } = req.body;
    const novaMaskara = await pool.query(
      "INSERT INTO maskara (naziv, cijena, boja) VALUES($1, $2, $3) RETURNING *",
      [naziv, cijena, boja]
    );

    res.json(novaMaskara.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

// Dodaj ruž
app.post("/ruz", async (req, res) => {
  try {
    const { naziv, cijena, boja } = req.body;
    const noviRuz = await pool.query(
      "INSERT INTO ruz (naziv, cijena, boja) VALUES($1, $2, $3) RETURNING *",
      [naziv, cijena, boja]
    );

    res.json(noviRuz.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

// Dodaj puder
app.post("/puder", async (req, res) => {
  try {
    const { naziv, cijena } = req.body;
    const noviPuder = await pool.query(
      "INSERT INTO puder (naziv, cijena) VALUES($1, $2) RETURNING *",
      [naziv, cijena]
    );

    res.json(noviPuder.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

/////////////////////////////////////////////////////
// UKLANJANJE

// Ukloni parfem
app.delete("/parfem/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const izbrisiParfem = await pool.query(
      "DELETE FROM parfem WHERE parfem_id = $1",
      [id]
    );
    res.json("Parfem je uklonjen!");
  } catch (error) {
    console.error(error.message);
  }
});

// Ukloni lak
app.delete("/lak/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const izbrisiLak = await pool.query("DELETE FROM lak WHERE lak_id = $1", [
      id,
    ]);
    res.json("Lak je uklonjen!");
  } catch (error) {
    console.error(error.message);
  }
});

// Ukloni maskaru
app.delete("/maskara/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const izbrisiMaskaru = await pool.query(
      "DELETE FROM maskara WHERE maskara_id = $1",
      [id]
    );
    res.json("Maskara je uklonjena!");
  } catch (error) {
    console.error(error.message);
  }
});

// Ukloni ruž
app.delete("/ruz/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const izbrisiRuz = await pool.query("DELETE FROM ruz WHERE ruz_id = $1", [
      id,
    ]);
    res.json("Ruž je uklonjen!");
  } catch (error) {
    console.error(error.message);
  }
});

// Ukloni puder
app.delete("/puder/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const izbrisiPuder = await pool.query(
      "DELETE FROM puder WHERE puder_id = $1",
      [id]
    );
    res.json("Puder je uklonjen!");
  } catch (error) {
    console.error(error.message);
  }
});

/////////////////////////////////////////////////////
// DOHVAĆANJE

// Dohvati parfeme
app.get("/parfem", async (req, res) => {
  try {
    const sviParfemi = await pool.query("SELECT * FROM parfem");
    res.json(sviParfemi.rows);
  } catch (error) {
    console.error(error.message);
  }
});

// Dohvati lakove
app.get("/lak", async (req, res) => {
  try {
    const sviLakovi = await pool.query("SELECT * FROM lak");
    res.json(sviLakovi.rows);
  } catch (error) {
    console.error(error.message);
  }
});

// Dohvati maskare
app.get("/maskara", async (req, res) => {
  try {
    const sveMaskare = await pool.query("SELECT * FROM maskara");
    res.json(sveMaskare.rows);
  } catch (error) {
    console.error(error.message);
  }
});

// Dohvati ruževe
app.get("/ruz", async (req, res) => {
  try {
    const sviRuzevi = await pool.query("SELECT * FROM ruz");
    res.json(sviRuzevi.rows);
  } catch (error) {
    console.error(error.message);
  }
});

// Dohvati pudere
app.get("/puder", async (req, res) => {
  try {
    const sviPuderi = await pool.query("SELECT * FROM puder");
    res.json(sviPuderi.rows);
  } catch (error) {
    console.error(error.message);
  }
});

/////////////////////////////////////////////////////
// POJEDINAČNO DOHVAĆANJE

// Dohvati pojedinačne parfeme
app.get("/parfem/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const parfem = await pool.query(
      "SELECT * FROM parfem WHERE parfem_id = $1",
      [id]
    );
    res.json(parfem.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

// Dohvati pojedinačne lakove
app.get("/lak/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const lak = await pool.query("SELECT * FROM lak WHERE lak_id = $1", [id]);
    res.json(lak.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

// Dohvati pojedinačne maskare
app.get("/maskara/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const maskara = await pool.query(
      "SELECT * FROM maskara WHERE maskara_id = $1",
      [id]
    );
    res.json(maskara.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

// Dohvati pojedinačne ruževe
app.get("/ruz/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const ruz = await pool.query("SELECT * FROM ruz WHERE ruz_id = $1", [id]);
    res.json(ruz.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

// Dohvati pojedinačne pudere
app.get("/puder/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const puder = await pool.query("SELECT * FROM puder WHERE puder_id = $1", [
      id,
    ]);
    res.json(puder.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

/////////////////////////////////////////////////////
// AŽURIRANJE

// Ažuriraj parfem
app.put("/parfem/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { naziv, cijena } = req.body;
    const azurirajParfem = await pool.query(
      "UPDATE parfem SET naziv = $1, cijena = $2 WHERE parfem_id = $3",
      [naziv, cijena, id]
    );
    res.json("Parfem je ažuriran!");
  } catch (error) {
    console.error(error.message);
  }
});

// Ažuriraj lak
app.put("/lak/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { naziv, cijena, boja } = req.body;
    const azurirajLak = await pool.query(
      "UPDATE lak SET naziv = $1, cijena = $2, boja = $3 WHERE lak_id = $4",
      [naziv, cijena, boja, id]
    );
    res.json("Lak je ažuriran!");
  } catch (error) {
    console.error(error.message);
  }
});

// Ažuriraj maskaru
app.put("/maskara/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { naziv, cijena, boja } = req.body;
    const azurirajMaskaru = await pool.query(
      "UPDATE maskara SET naziv = $1, cijena = $2, boja = $3 WHERE maskara_id = $4",
      [naziv, cijena, boja, id]
    );
    res.json("Maskara je ažurirana!");
  } catch (error) {
    console.error(error.message);
  }
});

// Ažuriraj ruž
app.put("/ruz/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { naziv, cijena, boja } = req.body;
    const azurirajRuz = await pool.query(
      "UPDATE ruz SET naziv = $1, cijena = $2, boja = $3 WHERE ruz_id = $4",
      [naziv, cijena, boja, id]
    );
    res.json("Ruz je ažuriran!");
  } catch (error) {
    console.error(error.message);
  }
});

// Ažuriraj puder
app.put("/puder/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { naziv, cijena } = req.body;
    const azurirajPuder = await pool.query(
      "UPDATE puder SET naziv = $1, cijena = $2 WHERE puder_id = $3",
      [naziv, cijena, id]
    );
    res.json("Puder je ažuriran!");
  } catch (error) {
    console.error(error.message);
  }
});

app.listen(5000, () => {
  console.log("Server has started on port 5000");
});
