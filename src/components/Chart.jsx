import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ProductsChart = () => {
  const data = {
    labels: [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ],
    datasets: [
      {
        label: "Produto 1",
        data: [40, 15, 25, 50, 70, 10, 5, 20, 34, 60, 34, 11], 
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
      {
        label: "Produto 2",
        data: [40, 15, 25, 50, 70, 10, 5, 20, 34, 60, 34, 11], 
        backgroundColor: "rgba(153, 102, 255, 0.6)",
      },
      {
        label: "Produto 3",
        data: [40, 15, 25, 50, 70, 10, 5, 20, 34, 60, 34, 11], 
        backgroundColor: "rgba(238, 17, 17, 0.6)",
      },
      {
        label: "Produto 4",
        data: [40, 15, 25, 50, 70, 10, 5, 20, 34, 60, 34, 11], 
        backgroundColor: "rgba(215, 16, 241, 0.6)",
      },
      {
        label: "Produto 5",
        data: [40, 15, 25, 50, 70, 10, 5, 20, 34, 60, 34, 11], 
        backgroundColor: "rgba(77, 255, 64, 0.6)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Produtos Vendidos por Mês",
        color: "#74e27b",
        font: {
          size: 24,
        },
      },
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default ProductsChart;
