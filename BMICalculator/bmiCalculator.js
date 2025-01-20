const form=document.querySelector('form');
//this will give you an empty 
//const height = parseInt(document.querySelector(`#height`).value);

form.addEventListener('submit',function(e){
    e.preventDefault();

    const height =parseInt(document.querySelector('#height').value);
    const weight =parseInt(document.querySelector('#weight').value);
    const result =document.querySelector('#result');
    
    if(height === '' || height < 0 || isNaN(height)){
       // result.innerHTML= 'Please provide a valid height';
       result.innerHTML = 'Please provide a valid height';
    }
   // result.innerHTML = ` ${height}`;
    
   
    else if(weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML = 'Please provide a valid weight';
    }
    else{
        const bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);
       // result.innerHTML = `Your BMI is ${bmi}`;
        result.innerHTML = `<span>${bmi}</span>`;
     }
     
     let message;
     if(bmi<18.9){
        message=`Your BMI is ${bmi}. You are underweight category.`;
     }
     else if(bmi>18.9 || bmi<29.8){
        message = `Your BMI is ${bmi}. You are in normal weight category.`;
    }
     else {
        message =`Your BMI is ${bmi}. You are over weight.`;
    }

    result.innerHTML = `<p style="color: green;">${message}</p>`;

     /*let w1=18.9
     let w2=29.8
     if(`${bmi}`<=w1)
        result.innerHTML =`<span>u must gain some wait</span>`;
     else if(w1 => `${bmi}`<=w2 )
        result.innerHTML =`<span>u must gain some wait</span>`;
     else
       result.innerHTML =`<span>u are over wait please maintain it</span>`;*/
 });