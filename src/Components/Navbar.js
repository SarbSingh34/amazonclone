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
                 <div className="first-part">
                            <div className = "img_part" >
                                <img src = "images/amazon logo 11 .png"/>
                            </div>
                            <div className="address_part">
                              <i class="fas fa-map-marker-alt"></i>
                              <span>  Banglore   </span>
                            </div>
                             
                         
                 </div>
                    
                        <div className="searchbar">
                               <div className="dropdown-first">
                                  <select>
                                       <option value = "All"> All </option>
                                       <option value = "All"> Bags </option>
                                       <option value = "All"> Toys  </option>
                                       <option value = "All">  Caps </option>
                                       <option value = "All"> Clothes </option>
                                  </select>
                                </div>
                               <div className="dropdown-second">
                                   <input type = "search" />
                               </div>
                               <div className="dropdown-third">
                                 <button> <i class="far fa-search"></i></button>
                               </div>
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