import React from 'react';
import { Container } from '../../styles/GlobalStyles';
import {
  XYPlot,
  LineSeries,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
} from 'react-vis';

const data = [
  { x: 0, y: 8 },
  { x: 1, y: 5 },
  { x: 2, y: 4 },
  { x: 3, y: 9 },
  { x: 4, y: 1 },
];

export default function MyLineChart() {
  return (
    <Container>
      <XYPlot width={300} height={300}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
        <LineSeries data={data} />
      </XYPlot>
    </Container>
  );
}
