const calculateTemp = () => {

     const numberTemp=document.getElementById('temp').Value;
      
     const tempSelected= document.getElementById('temp_diff');
      const valueTemp = temp_diff.options[tempSelected.selectedIndex];
         
const celToFah =(cel) => {
      let  fahrenheit =  Math.round( (cel*9/5)+32);
      return fahrenheit;
}


const FahToCel =(fehr) => {
      let  clesius =  Math.round( (fehr-32)+5/9);
      return clesius65;
}
      let result;
      if(valueTemp ='cel') {
            result =celToFah(numberTemp);
            document.getElementById('resultContainer').innerHTML =' =${result}°Fahrenheit';
      }else {
            result =FahToCel(numberTemp);
            document.getElementById('resultContainer').innerHTML =' =${result}°Clesius';
           
            }
}