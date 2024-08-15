import * as React from 'react';

import { ReactEchartsCustom } from './styles';

const colorList = [
  '#D6215B',
  '#006FFF',
  '#FFB448',
  '#ee6666',
  '#9d6fc9',
  '#3ba272',
  '#fc8452',
  '#9a60b4',
  '#ea7ccc',
];
const exampleData = [
  { value: 72, name: 'Other promo' },
  { value: 28, name: 'Price promo' },
];

export const Pie = ({ colors = colorList, data = exampleData, style, height = '280px' }) => {
  const dataWithoutZero = data?.map((percent) => (percent === 0 ? '' : percent));

  const option = {
    tooltip: {
      trigger: 'item',
    },

    color: colors,
    legend: {
      icon: 'circle',
      itemGap: 20,
      padding: 0,
      type: 'scroll',
      orient: 'horizontal',
      bottom: 26,
      width: '70%',
    },
    series: [
      {
        type: 'pie',
        radius: '50%',
        label: {
          show: true,
          formatter: '{c}%',
          fontSize: 15,
          backgroundColor: 'transparent',
          fontWeight: 'bold',
          position: 'inside',
          color: '#fff',
        },
        data: dataWithoutZero,
        top: '-20%',
      },
    ],
  };

  return (
    <ReactEchartsCustom
      option={option}
      opts={{ renderer: 'svg' }}
      style={style || { height, width: '50%', minWidth: '250px', maxWidth: '500px' }}
    />
  );
};
