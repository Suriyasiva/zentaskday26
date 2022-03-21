import React from "react";
import "./App.css";
function Cards() {
  return (
    <div className="container">
      <div className="row bg-primary">
        <div className="col-sm-4">
          {/* free------------------------------------------------------- */}
          <div class="card m-5" style={{ width: "18rem" }}>
            <h2 class="text-center text-muted subscribtion">FREE</h2>
            <h3 class="text-center  numbers">
              $0<span className="month">/month</span>
            </h3>

            <hr></hr>
            <ul class="list cardul">
              <li class="list m-2">
                <span>
                  {" "}
                  <i class="bi bi-check-lg"></i>
                </span>{" "}
                Single User
              </li>

              <li class="list m-2">
                <i class="bi bi-check-lg"></i> 5GB Storage
              </li>
              <li class="list m-2">
                <i class="bi bi-check-lg"></i> Unlimited Public Projects
              </li>
              <li class="list m-2">
                <i class="bi bi-check2"></i> Community Access
              </li>
              <li class="list m-2 text-muted">
                <i class="bi bi-x-lg"></i> Unlimited Private Projects
              </li>
              <li class="list m-2 text-muted">
                <i class="bi bi-x-lg"></i> Dedicated Phone Support
              </li>
              <li class="list m-2 text-muted">
                <i class="bi bi-x-lg"></i> Free Subdomain
              </li>
              <li class="list m-2 text-muted">
                <i class="bi bi-x-lg"></i> Monthly Status Reports
              </li>
            </ul>
            <button className="btn btn-primary rounded-pill">Button</button>
          </div>
        </div>
        <div className="col-sm-4">
          {/* plue-------------------------------------------- */}
          <div class="card m-5" style={{ width: "18rem" }}>
            {" "}
            <h2 class="text-center text-muted  subscribtion">PLUS</h2>
            <h3 class="text-center numbers">
              $9<span className="month">/month</span>
            </h3>
            <hr></hr>
            <ul class="list cardul">
              <li class="list  m-2">
                <i class="bi bi-check-lg"></i> <strong>5 Users</strong>
              </li>
              <li class="list m-2">
                <i class="bi bi-check-lg "></i> 50GB Storage
              </li>
              <li class="list m-2">
                <i class="bi bi-check-lg "></i> Unlimited Public Projects
              </li>
              <li class="list m-2">
                <i class="bi bi-check-lg"></i> Community Access
              </li>
              <li class="list m-2">
                <i class="bi bi-check-lg"></i> Unlimited Private Projects
              </li>
              <li class="list m-2">
                <i class="bi bi-check-lg "></i> Dedicated Phone Support
              </li>
              <li class="list m-2">
                <i class="bi bi-check-lg "></i> Free Subdomain
              </li>
              <li class="list m-2 text-muted">
                <i class="bi bi-x-lg "></i> Monthly Status Reports
              </li>
            </ul>
            <button className="btn btn-primary rounded-pill">Button</button>
          </div>
        </div>
        <div className="col-sm-4">
          {/* pro--------------------------------------------------- */}
          <div class="card m-5" style={{ width: "18rem" }}>
            <h2 class="text-center text-muted subscribtion">PRO</h2>
            <h3 class="text-center numbers">
              $49<span className="month">/month</span>
            </h3>
            <hr></hr>
            <ul class="list cardul">
              <li class="list m-2">
                <i class="bi bi-check-lg"></i> <strong>Unlimited Users</strong>
              </li>
              <li class="list m-2">
                <i class="bi bi-check-lg"></i> 150GB Storage
              </li>
              <li class="list m-2">
                <i class="bi bi-check-lg"></i> Unlimited Public Projects
              </li>
              <li class="list m-2">
                <i class="bi bi-check-lg"></i> Community Access
              </li>
              <li class="list m-2">
                <i class="bi bi-check-lg"></i> Unlimited Private Projects
              </li>
              <li class="list m-2">
                <i class="bi bi-check-lg"></i> Dedicated Phone Support
              </li>
              <li class="list m-2">
                <i class="bi bi-check-lg"></i> <strong>Unlimited</strong> Free
                Subdomains
              </li>
              <li class="list m-2">
                <i class="bi bi-check-lg"></i> Monthly Status Reports
              </li>
            </ul>
            <button className="btn btn-primary rounded-pill">Button</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Cards;
