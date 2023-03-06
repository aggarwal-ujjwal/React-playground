function Ternaryex(){
    let num = Math.random();
    return (
        <div className='App-main'>
            <h1>

                Random number {num} - { num >0.5 ? "Greater than 0.5" : "Less than equal to 0.5"}
            </h1>
        </div>
        
    )
}

export default Ternaryex;