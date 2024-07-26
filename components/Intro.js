import React from "react";
import getConfig from "next/config";
import Link from "next/link";

const { publicRuntimeConfig } = getConfig();

export const Intro = ({ title, description, image }) => {
  return (
    <div className="bg-secondary py-5 px-5">
      <div className="container">
        <div className=" row align-items-center">
          <div className="col-sm-6">
            <h1 className="text-primary fw-bold display-3">{title}</h1>
            <p>{description}</p>
          </div>
          <div className="col-sm-6 text-center">
            <img
              className="img-fluid my-3 card-image"
              width="250"
              height="250"
              src={image}
              alt="profile of hashirshoaeb"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export const About = ({ title, description }) => {
  return (
    <div id="about" className="bg-white py-5 px-5">
      <div className="container">
        <h1 className="text-primary fw-bold">{title}</h1>
        <div className="px-sm-5">
          {description.map((value, index) => (
            <p key={index}>{value}</p>
          ))}
        </div>
      </div>
    </div>
  );
};
