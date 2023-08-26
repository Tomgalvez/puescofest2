import React from "react";
import { tinaField, useTina } from "tinacms/dist/react";
import { Block } from "./Blockz";

export default function Somos({ data }) {
  //console.log(data.pagez);
  return (
    <section className="about-section dark-back" id="about">
      <div className="container">
        <div className="row">
          <div className="col-md-11 col-md-offset-1 col-sm-offset-0 col-lg-8 col-lg-offset-2 ">
            {data.pagez.intro
              ? data.pagez.intro.map(function (block, i) {
                  return (
                    <div key={i} data-tina-field={tinaField(block)}>
                      <Block {...block} />
                    </div>
                  );
                })
              : null}
          </div>
        </div>
      </div>
    </section>
  );
}
