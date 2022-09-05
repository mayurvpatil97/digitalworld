import React from "react";
import Cards from "../Cards";
import Sdata from "../Sdata";

const Service = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="tab-center">Our Services</h1>

        <div className="container-fluid mb-5 ">
          <div className="row">
            <div className="col-10 mx-auto ">
              <div className="row gy-5">
                {/* <Cards /> */}
                {Sdata.map((val, ind) => {
                  return (
                    <Cards key={ind} imgsrc={val.imgs} title={val.title} />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
