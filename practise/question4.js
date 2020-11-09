function factorial(num){
    var fact=1;
    while(num>0){
        fact=fact*num;
        num--;
    }
    console.log(fact);
}
factorial(5)