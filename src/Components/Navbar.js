import React, {Component} from "react";
import Navbarstyle from "./Navbarstyle.css";

class Navbar extends Component 
{
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
          <>
             <div className = "Navbar_component" >
                    <div className = "img_part" >
                        <img src = "images/amazon logo 11 .png"/>
                    </div>
                    <div className = "address_part" >
                        <i class="fas fa-map-marker-alt"></i>
                    <span>  Banglore   </span>
                    </div>
                    <div className="searchbar">
                        <div>
                            <select>
                                <option value = "All" >   All  </option>
                                <option value = "Clothes" > Clothes  </option>
                                <option value = "Bags"> Bags  </option>
                                <option value = "Shoes" > Shoes   </option>
                                <option value = "Toys">  Toys    </option>
                            </select>
                       </div>
                          <input type = "search" />
                        <button>  <i class="fal fa-search"></i> </button>
             
                    </div>
                    <div className="third-part">
                                <div className="third-one">
                                    <span> Hello , Sign In </span>
                                    <span>Accounts & List  </span>
                                </div>
                                <div className="third-two">
                                    <span>  Return   </span>
                                    <span> & Order  </span>
                                </div>
                                <div className="third-last">
                                <i class="fas fa-shopping-cart"></i>
                                <span> Cart  </span>
                                </div>
                    </div>
             </div>
         </>
         );
    }
}
 
export default  Navbar ;