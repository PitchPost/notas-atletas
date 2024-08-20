let atletas = [
  {
    nome: "Cesar Abascal",
    notas: [10, 9.34, 8.42, 10, 7.88]
  },
  {
    nome: "Fernando Puntel",
    notas:  [8, 10, 10, 7, 9.33]
  },
  {
    nome: "Daiane Jelinsky",
    notas: [7, 10, 9.5, 9.5, 8]
  },
  {
    nome: "Bruno Castro",
    notas: [10, 10, 10, 9, 9.5]
  }
 ];
 
 function calcularMedia(atletas) {
   atletas.forEach(atleta => {
     let notaOrdem = atleta.notas.sort((a, b) => a - b);
     let notasComputa = notaOrdem.slice(1, 4); 
     let soma = 0;
     notasComputa.forEach(nota => {
       soma += nota;
     });
     let mediaValida = soma / notasComputa.length;
     
     console.log(`Atleta: ${atleta.nome}`);
     console.log(`Notas Obtidas: ${atleta.notas.join(", ")}`);
     console.log(`Média Válida: ${mediaValida.toFixed(2)}`); 
     console.log('');
   });
 }
 
 calcularMedia(atletas);
 
 console.log(calcularMedia) 

 

