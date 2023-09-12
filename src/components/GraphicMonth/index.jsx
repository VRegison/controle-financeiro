import ReactApexChart from 'react-apexcharts';

export const GraphicMonth = () => {
  const chartData = {
    series: [
      {
        name: 'Mês 1',
        data: [180, 200, 500],
      },
      {
        name: 'Mês 2',
        data: [400,100],
      },
      {
        name: 'Mês 3',
        data: [900, 780, 1000],
      },
    ],
    options: {
      chart: {
        type: 'line',
      },
      xaxis: {
        categories: [
          'Dia 1', 'Dia 2', 'Dia 3', 'Dia 4', 'Dia 5', 'Dia 6',
          'Dia 7', 'Dia 8', 'Dia 9', 'Dia 10', 'Dia 11', 'Dia 12'
        ],
      },
      colors: ['#FF5733', '#36A2EB', '#FFC300'],
      markers: {
        size: 4,
      },
    },
  };

  return (
    <div id="chart">
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="line"
        height={350}
      />
    </div>
  );
};

