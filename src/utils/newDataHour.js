export function generateDateHour() {
   // Crie um objeto Date para a data e hora atual
   const dataHoraAtual = new Date();

   // Defina as opções de formatação desejadas
   const opcoes = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false, // Use o formato de 24 horas
   };

   // Formate a data e hora usando toLocaleString() com as opções
   const dataHoraFormatada = dataHoraAtual.toLocaleString(undefined, opcoes);
   const dataSemVirgula    = dataHoraFormatada.replace(',', '')
   return dataSemVirgula;

}