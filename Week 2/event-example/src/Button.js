// function Button(){
//     const clickHandler = 
//         () => console.log('Clicked')
//     return (
//         <button onClick={clickHandler}>
//             Click me
//             </button>
//     );
// }

// export default Button;

function Button(){
    const clickHandler = 
        () => console.log('Mouse Over')
    return (
        <button onMouseOver={clickHandler}>
            Mouse Over
            </button>
    );
}

export default Button;