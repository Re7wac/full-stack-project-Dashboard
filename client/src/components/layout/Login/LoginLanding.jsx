import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const LoginLanding = () => {
  return (
    <div style={{ height: "75vh" }} className="container ">
      <div className="col s12 center-align mt-5">
        <div className="col s6">
          <Button>
            <Link
              to="/register"
              style={{
                width: "140px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
              }}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Register
            </Link>
          </Button>
        </div>
        <div className="col s6 mt-3">
          <Button>
            <Link
              to="/register"
              style={{
                width: "140px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
              }}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Log in
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoginLanding;
