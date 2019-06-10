import React from "react";

export class Footer extends React.Component{
  render(){
    return(
      <div className="container">
            <div className="row mx-lg-5n bg-secondary">
                <div className="col-6">
                    <p className="text text-light"> Advanced Web Technologies SoSe 2019. All Rights Reserved.
                        <span class="glyphicon glyphicon-copyright-mark"></span>
                    </p>
                </div>
                <div className="col"></div>
                <div className="col"></div>
            </div>
      </div>
    );
  }
}

export default Footer;
