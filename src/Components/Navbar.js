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
             {/* Main Navbar component */}
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

                          <div className = "searchbar">
                                <div className="part">
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
                          </div>

                          <div className="third-part" >
                                    <div className="third-one">
                                        <div style = {{fontSize:'12px',fontWeight:'bolder'}}>
                                            Hello , Sign In </div>
                                        <div style = {{fontSize:'16px',fontWeight:'bolder'}}> Accounts & List  </div>
                                    </div>
                                    <div className="third-two">
                                        <div  style = {{fontSize:'12px',fontWeight:'bolder'}}>  Return   </div>
                                        <div  style = {{fontSize:'16px',fontWeight:'bolder'}}> & Order  </div>
                                    </div>
                                    <div className="third-last">
                                        
                                    <span  style =  {{fontSize:'26px',fontWeight:'bolder'}} >  <i class="fas fa-shopping-cart"></i>   </span>   
                                    <span  style  =  {{fontSize:'20px',fontWeight:'bolder'}}>   Cart  </span>
                                    </div>
                          </div>
               </div>

               {/*  Footer navbar component */}
         
                 <div className="footer_part">
                     <div className="content-part" style = {{display: 'flex'}}>
                         <div className="footer_text"> 
                       <i style = {{color:'white'}} class="fas fa-align-justify"></i>
                        </div>
                       
                          <div className="footer_text"> Best Seller </div>
                          <div className="footer_text">  Mobile  </div>
                          <div className="footer_text">  Amazon Pay  </div>
                          <div className="footer_text">  Fashion  </div>
                          <div className="footer_text">  Prime  </div>
                          <div className="footer_text">  Computers  </div>
                          <div className="footer_text">  Amazon   </div>
                          <div className="footer_text">  Books   </div>
                          
                     </div>
                 </div>

         </>
         );
    }
}
 
export default  Navbar ;