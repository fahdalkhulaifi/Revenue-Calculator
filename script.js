function Calculate(){
    let PriceValue = document.getElementById('price').value;
    let RePercent = document.getElementById('RePercent').value;
    let ResultValue = document.getElementById('result').value;
    let total = document.getElementById('total').value;
    ResultValue = ((PriceValue * RePercent)/100);
    let price = Number(PriceValue);
    let result = Number(ResultValue);
    total = (price + result);
    document.getElementById("result").innerHTML = + result;
    document.getElementById("total").innerHTML =  + total;
  }