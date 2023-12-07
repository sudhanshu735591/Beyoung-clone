
import "./button.css";

function Button(props)  {
    let {text, className} = props;
    
    return(
        <button className={className}>{text}</button>
    )
}



export default Button;