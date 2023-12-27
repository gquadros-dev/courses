import React, { useState } from 'react';
import { Container } from '../../styles/GlobalStyles';
import BarChart from '../../components/BarChart';
import LineChart from '../../components/LineChart';
import PieChart from '../../components/PieChart';
import { UserData } from '../../data';

export default function MyLineChart() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.city),
    datasets: [
      {
        label: 'Users per city',
        data: UserData.map((data) => data.people),
        backgroundColor: [
          'rgba(75, 192, 192, 1)',
          '#ecf0f1',
          '#50AF95',
          '#f3ba2f',
          '#2a71d0',
        ],
        borderColor: ['black'],
        borderWidth: 2,
      },
    ],
  });

  return (
    <Container>
      <LineChart chartData={userData} />
      <div>
        ------------------------------------------------------------------------------
      </div>
      <BarChart chartData={userData} />
      <div>
        ------------------------------------------------------------------------------
      </div>
      <PieChart chartData={userData} />
    </Container>
  );
}
