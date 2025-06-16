import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend
);

export default function CashOverTimeChart({ timeStates, cashStates }: { timeStates: number[], cashStates: number[] }) {
  const data = {
    labels: timeStates.map((elem) => {
        return Math.round(10*elem)/10
    }),
    datasets: [
      {
        label: 'Cash Over Time',
        data: cashStates,
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }
    ]
  };

  const options: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: 'top' },
      title: {
        display: true,
        text: 'Cash Over Time Simulation',
      },
    },
  };

  return <Line data={data} options={options} />;
}
