import ReactApexChart from 'react-apexcharts';
import './style.css';
export function Graphic(props) {

   const chartData = {
      series: [
         props.saldo, props.receita, props.despesa, 1000
      ],
      options: {
         chart: {
            type: 'pie',
         },
         labels: ['Saldo', 'Receita', 'Despesa', 'Crédito'],
         colors: ['#0d6efd', '#198754', '#dc3545', '#ffc107'], // Altere as cores aqui

      },
   };

   return (
      <div className='grafic-main'>

         <ReactApexChart
            options={chartData.options}
            series={chartData.series}
            type="pie"
            height={350}
         />
      </div>
   )
}