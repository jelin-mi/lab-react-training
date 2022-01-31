function Random({
    min,
    max, 
    children
}){
    return (
       <p>
         {children} {Math.floor(Math.random() * (max - min + 1) ) + min}
       </p>
    );
}

export default Random;