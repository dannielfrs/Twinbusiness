import { Chart } from 'primereact/chart'
import React, { useState, useEffect } from 'react'
import styles from './GraphicPie.module.scss'

interface DoughnutProps {
  label?: string;
  total?: string;
  className?: string;
  labels?: string[];
  values?: number[];
  options?: any;
}

const Doughnut: React.FC<DoughnutProps> = ({
  labels,
  values,
  total,
  label,
  className,
  options = {
    cutout: 70,
    radius: 97,
    plugins: {
      legend: {
        labels: {
          usePointStyle: true
        },
        position: 'right'
      },
    }
  }
}) => {
  const [chartData, setChartData] = useState<any>({});
  const [chartOptions, setChartOptions] = useState<any>({});

  useEffect(() => {
    const data = {
      labels,
      datasets: [
        {
          data: values,
          backgroundColor: ['#6A6A6A', '#8B8B8B', '#B4B4B4', '#6A6A6A4A'],
          hoverBackgroundColor: ['#6A6A6A', '#8B8B8B', '#B4B4B4', '#6A6A6A4A'],
        },
      ],
    };
    setChartData(data);
    setChartOptions(options);
  }, [labels, values]);

  return (
    <div className={`${styles.doughnut} ${className}`}>
      <span className={styles.doughnut_value}>{total}</span>
      <Chart type="doughnut" data={chartData} options={chartOptions} />
      <label>{label}</label>
    </div>
  )
}

export default Doughnut
