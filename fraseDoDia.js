
const listaFrases = [
  "Liberdade",   // Dia 1
  "Serenidade",  // Dia 2
  "Coragem",     // Dia 3
  "Gratidão",    // Dia 4
  "Esperança",   // Dia 5

];

const dataInicio = new Date('Jun 02 2025');
dataInicio.setHours(0, 0, 0, 0);

const hoje = new Date();
hoje.setHours(0, 0, 0, 0);

const diferencaMs = Math.abs(hoje.getTime() - dataInicio.getTime());
const diasPassados = Math.floor(diferencaMs / (1000 * 60 * 60 * 24)); 

let FraseDoDia = "Fora do ciclo";

if (diasPassados >= 0 && diasPassados < listaFrases.length) {
  FraseDoDia = listaFrases[diasPassados];
} else if (diasPassados >= listaFrases.length) {
  const indice = diasPassados % listaFrases.length;
  FraseDoDia = listaFrases[indice];
}

console.log(`Data de início: ${dataInicio.toLocaleDateString('pt-BR')}`);
console.log(`Data atual: ${hoje.toLocaleDateString('pt-BR')}`);
console.log(`Dias passados: ${diasPassados}`);
console.log(`Palavra do dia: ${FraseDoDia}`);
