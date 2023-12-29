// import "./gendersection.css";

function GenderBanner(props) {
    const {gender, shirts, demand} = props;
    return (
        <div>
            <div className="mensection">{gender}</div>

            <div className="displayImage">
                <div className="demand">
                    <div className="tshirt">{shirts}</div>
                    <div className="highondemand">{demand}</div>
                </div>
                <div className="viewall">View All</div>
            </div>
        </div>
    )
}

export default GenderBanner;