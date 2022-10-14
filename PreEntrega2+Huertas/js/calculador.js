 function trianguloRectangulo() {
   var ladoA = eval(document.unTriangulo.ladoA.value.replace(",",".").replace(/ /g,""));
   var ladoB = eval(document.unTriangulo.ladoB.value.replace(",",".").replace(/ /g,""));
   var ladoC = eval(document.unTriangulo.ladoC.value.replace(",",".").replace(/ /g,""));
   var alfa = eval(document.unTriangulo.alfa.value.replace(",",".").replace(/ /g,""));
   var beta = eval(document.unTriangulo.beta.value.replace(",",".").replace(/ /g,""));
   var unidadU = document.unTriangulo.unidadU.value;
   var calcular = document.unTriangulo.calcular.value; 
   
   if ((document.unTriangulo.ladoA.value != "")&&(document.unTriangulo.ladoB.value != "")) { //a,b   
      
   } else if ((document.unTriangulo.ladoA.value != "")&&(document.unTriangulo.ladoC.value != "")) { //a,c
     if (ladoA > ladoC) {  //test prepony
      document.unTriangulo.ladoC.value = "ERROR: a > c";
      return;
     } else {
      ladoB = Math.sqrt(ladoC*ladoC - ladoA*ladoA); 
      
     }
   } else if ((document.unTriangulo.ladoA.value != "")&&(document.unTriangulo.alfa.value != "")) { //a, alfa
    if (document.unTriangulo.unidadU.value != "rad") {
     alfa =  alfa * Math.PI / 180;
    }
    ladoB = ladoA / Math.tan(alfa); 
    
   } else if ((document.unTriangulo.ladoA.value != "")&&(document.unTriangulo.beta.value != "")) { //a,beta
    if (document.unTriangulo.unidadU.value != "rad") {
     beta =  beta * Math.PI / 180;
    }
    ladoB = ladoA * Math.tan(beta);
    
   } else if ((document.unTriangulo.ladoB.value != "")&&(document.unTriangulo.ladoC.value != "")) { //b,c
     if (ladoB > ladoC) {  //test prepony
      document.unTriangulo.ladoC.value = "ERROR: b > c";
      return;
     } else {
      ladoA = Math.sqrt(ladoC*ladoC - ladoB*ladoB);  
      
     }
   } else if ((document.unTriangulo.ladoB.value != "")&&(document.unTriangulo.alfa.value != "")) {  //b,alfa
    if (document.unTriangulo.unidadU.value != "rad") {
     alfa =  alfa * Math.PI / 180;
    }
    ladoA = ladoB * Math.tan(alfa); 
    
   } else if ((document.unTriangulo.ladoB.value != "")&&(document.unTriangulo.beta.value != "")) {  //b, beta
    if (document.unTriangulo.unidadU.value != "rad") {
     beta =  beta * Math.PI / 180;
    }
    ladoA = ladoB / Math.tan(beta); 
    
   } else if ((document.unTriangulo.ladoC.value != "")&&(document.unTriangulo.alfa.value != "")) { //c,alfa
    if (document.unTriangulo.unidadU.value != "rad") {
     alfa =  alfa * Math.PI / 180;
    }
    ladoA = ladoC * Math.sin(alfa);
    ladoB = ladoC * Math.cos(alfa);   
    
   } else if ((document.unTriangulo.ladoC.value != "")&&(document.unTriangulo.beta.value != "")) { //c, beta
    if (document.unTriangulo.unidadU.value != "rad") {
     beta =  beta * Math.PI / 180;
    }
    ladoA = ladoC * Math.cos(beta);
    ladoB = ladoC * Math.sin(beta);  
    
   } else {
    error1.style.color = "#cf000f";
    error1.style.fontWeight = "bold";  
    location.href = "#error1";
    return;
   }
  
  ladoC = Math.sqrt(ladoA*ladoA + ladoB*ladoB); 
  alfa = Math.asin(ladoA/ladoC);
  beta = Math.asin(ladoB/ladoC);
  if (unidadU != "rad") {
   alfa = alfa * 180 / Math.PI;
   beta = beta * 180 / Math.PI;
   }
  document.unTriangulo.alfa.value = ((alfa.toFixed(4)).toString()).replace(".",",");
  document.unTriangulo.beta.value = ((beta.toFixed(4)).toString()).replace(".",",");
  

  

  
  document.unTriangulo.ladoA.value = ((ladoA.toFixed(calcular)).toString()).replace(/\B(?=(?:\d{3})+(?!\d))/g, " ").replace(".",",");
  document.unTriangulo.ladoB.value = ((ladoB.toFixed(calcular)).toString()).replace(/\B(?=(?:\d{3})+(?!\d))/g, " ").replace(".",",");
  document.unTriangulo.ladoC.value = ((ladoC.toFixed(calcular)).toString()).replace(/\B(?=(?:\d{3})+(?!\d))/g, " ").replace(".",","); 
  

  }

  function vaciarDML() {
    if (document.unTriangulo.calcular.value == "2") {
      document.unTriangulo.calcular.value = "";
    }
   }
   function llenarDML() {
    if (document.unTriangulo.calcular.value == "") {
      document.unTriangulo.calcular.value = "2";
    }
   }
   

