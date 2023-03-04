import "../App.css";

function Header(props) {
    console.log(props);
    return (
        
        <h1 className="App-header"> 
            Hello there indeed , {props.name}-{props.color}
        </h1>
    );
}

export default Header;