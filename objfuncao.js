const calculadora={
    numero1:10,
    numero2:5,
    multiplicar(){
        return this.numero1*this.numero2},
    dividir(){
     return this.numero1/this.numero2},
    somar(){
        return this.numero1+this.numero2},
        subtrair(){
            return this.numero1-this.numero2}
        }

        module.exports=calculadora

    
    
    
    
    
    
    
    console.log(calculadora.multiplicar());
    console.log(calculadora.dividir());
    console.log(calculadora.somar());
    console.log(calculadora.subtrair())