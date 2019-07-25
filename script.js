const answerOne = ( )=> {
    var height = document.getElementById("vertHeight1").value;
    var length = document.getElementById("horizHeight1").value;
        return (-height + "/" + length + " = " + -5 + "/" + 4);
}
const calcSlope1 = ( ) => {
    document.getElementById("demo1").innerHTML = answerOne( );
};
// SECOND EXAMPLE
const answerTwo = ( )=> {
    var height = document.getElementById("vertHeight2").value;
    var length = document.getElementById("horizHeight2").value;
        return height + "/" + length;
}
const calcSlope2 = ( ) => {
    document.getElementById("demo2").innerHTML = answerTwo( );
};
// THIRD EXAMPLE
const answerThree = ( )=> {
    var height = document.getElementById("vertHeight3").value;
    var length = document.getElementById("horizHeight3").value;
        return (height + "/" + length + " = " + 3);
}
const calcSlope3 = ( ) => {
    document.getElementById("demo3").innerHTML = answerThree( );
};