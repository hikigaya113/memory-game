import React from 'react';
import "./Courses.css";
export default function Card(props) {
    return (
        <div
              className="col-xs-12 col-sm-6 col-md-5 col-lg-3"
              id="cards_landscape_wrap-2"
            >
              <div class="card-flyer">
                <div class="image-box">
                  <img
                    class="card-img-top"
                    src={props.src}
                    alt="Card"
                    height="200px"
                  />
                </div>
                <div class="card-body text-container">
                  <h5 class="card-title text-start">{props.title}</h5>
                  <p class="card-text text-start">
                    {props.desc}
                    <h4>
                      {props.price} <span class="span">{props.cutprice}</span>
                    </h4>
                    <h3>{props.rating}</h3>
                  </p>

                  <a
                    href={props.view}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="btn btn-dark"
                  >
                    View Course
                  </a>
                </div>
              </div>
            </div>
    )
}
