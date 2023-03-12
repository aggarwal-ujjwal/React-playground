function Button(){
    const clickHandler = 
        () => console.log('Clicked')
    return (
        <button onClick={clickHandler}>
            Click me
            </button>
    );
}

export default Button;