function Functioncallexample(){

    const getRandomNumber = () => Math.random()*10

    return (
        <div>
            <h1> Here's a random number : {getRandomNumber()} </h1>
        </div>
    );
}

export default Functioncallexample;