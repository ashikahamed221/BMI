function cal(){
    var height=document.getElementById('height').value
    var weight=document.getElementById('weight').value
     
    let bmi=weight/height**2;
    let result=bmi.toFixed(2);
    
    let output=document.getElementById('result');
    let level=document.getElementById('level');
    output.textContent="Your Bmi:" +result;
    let category=""
    
    if(result<18.5)
    {
        category="Under Weight"
    }
    else if(result<25)
    {
        category="Normal Weight"
    }
    else if(result<30)
    {
        category="Over Weight"
    }
    else if(result>31){
         category="Obese"
    }
    else{
        category="please enter your valid details"
    }
    let cat=document.getElementById('category')
    cat.innerHTML="<h5>you are :"+ category  
}
