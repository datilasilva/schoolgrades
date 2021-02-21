/* Rockeseat Discover Course - Challenge: transform school grades from the numerical system to the characters "A" "B" "C" "D" "FAILED"*/ 
/*Curso Rockeseat Discover - Desafio: transformar as notas escolares do sistema numérico para os caracteres "A" "B" "C" "D" "FALHOU"*/ 
      
    let gerarNotas = function (gradeSchool) {
        if (gradeSchool >= 90 && gradeSchool <= 100) return "A";
        if (gradeSchool >= 80 && gradeSchool <= 89) return "B";
        if (gradeSchool >= 70 && gradeSchool <= 79) return "C";
        if (gradeSchool >= 60 && gradeSchool <= 69) return "D";
        if (gradeSchool >= 50 && gradeSchool <= 59) return "E"; 
        else return "FAILED!" 
    } 

    var gradeJohn = gerarNotas(56);
     console.log(gradeJohn); 
    var gradeAna = gerarNotas(96);
     console.log(gradeAna);
    var gradeMaria = gerarNotas(66);
     console.log(gradeMaria);
     var gradeAntony = gerarNotas(49);
     console.log(gradeAntony);  
    var gradeJosef = gerarNotas(72);
     console.log(gradeJosef);
    var gradeLud = gerarNotas(85);
     console.log(gradeLud);  
     
     
        
        
   
   