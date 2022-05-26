import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardImg, CardTitle } from "reactstrap";

const Pocetna = () => {
  return (
    <div className="container-fluid">
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="jumbo">SVIJET LJEPOTE</h1>
        </div>
      </div>
      <div className="row">
        <Card style={{ width: "400px" }} className="m-5">
          <CardImg src="/images/parfemi.png" alt="" />
          <CardBody>
            <CardTitle>PARFEMI</CardTitle>
            <Link to="/parfem" className="btn btn-outline-dark">
              Pogledaj parfeme
            </Link>
          </CardBody>
        </Card>
        <Card style={{ width: "400px" }} className="m-5">
          <CardImg src="/images/ruzevi.png" alt="" />
          <CardBody>
            <CardTitle>RUŽEVI</CardTitle>
            <Link to="/ruz" className="btn btn-outline-dark">
              Pogledaj ruževe
            </Link>
          </CardBody>
        </Card>
        <Card style={{ width: "400px" }} className="m-5">
          <CardImg src="/images/lakovi.png" alt="" />
          <CardBody>
            <CardTitle>LAKOVI ZA NOKTE</CardTitle>
            <Link to="/lak" className="btn btn-outline-dark">
              Pogledaj lakove za nokte
            </Link>
          </CardBody>
        </Card>
        <Card style={{ width: "400px" }} className="m-5">
          <CardImg src="/images/puderi.png" alt="" />
          <CardBody>
            <CardTitle>PUDERI</CardTitle>
            <Link to="/puder" className="btn btn-outline-dark">
              Pogledaj pudere
            </Link>
          </CardBody>
        </Card>
        <Card style={{ width: "400px" }} className="m-5">
          <CardImg src="/images/maskare.png" alt="" />
          <CardBody>
            <CardTitle>MASKARE</CardTitle>
            <Link to="/maskara" className="btn btn-outline-dark">
              Pogledaj maskare
            </Link>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default Pocetna;
