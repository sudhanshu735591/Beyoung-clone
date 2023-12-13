
import "./button.css";

function Button(props)  {
    let {text, className, onClick} = props;
    
    return(
        <button onClick={onClick} className={className}>{text}</button>
    )
}



export default Button;