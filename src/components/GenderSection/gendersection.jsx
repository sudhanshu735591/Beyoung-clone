import { Link } from "react-router-dom";
import "./gendersection.css";

function GenderSection(props){

    let {data, gender, shirts, demand} = props;
    return(
        <div className="parentDiv">
        <div className="mensection">{gender}</div>

        <div className="displayImage">
          <div className="demand">
            <div className="tshirt">{shirts}</div>
            <div className="highondemand">{demand}</div>
          </div>
          <div className="viewall">View All</div>
        </div>



        <div className="imageData">
            { 
              data.map((val)=>{
                  return(
                    
                    <div>
                      <Link to ={`imageDetails/${val._id}`}>
                        <img src = {val.displayImage}/>
                      </Link>
                    </div>
                  )
              })
            }
          </div>
      </div>
    )
}


export default GenderSection;