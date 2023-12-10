import "./menBanner.css";

function MenBanner(props){
    let {shirts, demand} = props;

    return(
        
      <div className="displayImage">
      <div className="demand">
        <div className="tshirt">{shirts}</div>
        <div className="highondemand">{demand}</div>
      </div>
      <div className="viewall">View All</div>
    </div>
    )
}


export default MenBanner;