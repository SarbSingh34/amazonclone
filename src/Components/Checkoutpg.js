import eact from "react";

function Checkoutitems(props)
{
  return (
    <div>
          <div className = "main_checkitem">
                <div>
                    <img style =  {{width:'12%'}}  src = {props.definition.img} />
                </div>
                <div>
                    <span > {props.definition.name}     </span>
                    <span> {props.definition.price}    </span>
                    <span>  {props.definition.status}  </span>
                </div>
          </div>
   </div>
    )
}
export default Checkoutitems;