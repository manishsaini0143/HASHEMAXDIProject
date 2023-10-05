import React from 'react';
import { View, Text } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const data = {
  labels: ['1D', '5D', '1M', '3M', '6M', 'YTD'],
  datasets: [
    {
      data: [15, 50, 70, 35, 90, 30, 45, 55],
      color: (opacity = 1) => `rgba(74, 81, 226, ${opacity = 1})`,
      strokeWidth: 2,
    },
    {
      data: [15, 80, 60, 50, 70, 50, 70, 60,],
      color: (opacity = 1) => `rgba(34, 197, 94, ${opacity = 1})`,
      strokeWidth: 2,
    },
    {
      data: [40, 60, 40, 25, 30, 65, 76, 85, 120],
      color: (opacity = 1) => `rgba(210, 167, 132, ${opacity = 1})`,
      strokeWidth: 2,
    },
    {
      data: [10, 80, 44, 55, 76, 70, 80, 99, 19],
      color: (opacity = 1) => `rgba(239, 68, 68, ${opacity = 1})`,
      strokeWidth: 2,
    },
  ],
};

const chartConfig = {
  backgroundGradientFrom: '#0D1134',
  backgroundGradientTo: '#0D1134',
  color: (opacity = 1) => `rgba(222, 444, 555, ${opacity})`,

  decimalPlaces: 0, // Number of decimal places for Y-axis labels
};
const dataList = [90, 80, 70, 60, 50, 40, 30, 20, 10, 0]

const Calenders = () => {
  return (
    <View style={{ flexDirection: 'row', }}>
      <View style={{ position: 'absolute', zIndex: 100, left: 15, margin: 5 }}>
        {dataList.map(i => {
          return (
            <Text style={{ margin: 1, color: '#FFFFFF', backgroundColor: '#1E293B' }}> {i}</Text>
          )
        })}
        <Text style={{ color: '#FFFFFF' }}>sm</Text>
      </View>
      <LineChart
        data={data}
        withDots={false}
        width={400}
        height={250}
        withHorizontalLabels={false}
        chartConfig={chartConfig}
      />
    </View>
  );
};

export default Calenders;