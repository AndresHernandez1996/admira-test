import * as React from 'react';
import formatCurrency from '@utils/formatCurrency';
import { ReactEchartsCustom } from './styles';

const individualBar = {
  iconStyle: {
    borderColor: 'rgba(0,111,255,1)',
  },
  legend: {
    icon: 'circle',
    itemGap: 20,
    padding: 0,
    type: 'scroll',
    orient: 'horizontal',
    top: 26,
    width: '70%',
  },
  barGap: { barGap: 0, barCategoryGap: '40%' },
};

export const defaultColors = [
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

const Bar = ({ data, colors = defaultColors, type = 'money', country, padding = '8px' }) => {
  const formatSeries = (series) =>
    series?.map((item) => ({
      data: item.data,
      name: item.name,
      type: item.type || 'line',
      stack: false,
      showSymbol: false,
      ...individualBar.barGap,
    }));

  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
      valueFormatter: (value) => {
        if (type === 'money')
          return formatCurrency({ amount: value, country, minimumFractionDigits: 2 });
        if (type === 'number') return formatCurrency({ amount: value, country, graph: true });
        if (type === 'percentage') return `${value}%`;
        return value;
      },
    },

    legend: individualBar.legend,
    toolbox: {
      feature: {
        mark: { show: true },
        dataView: { readOnly: false },
        magicType: {
          show: true,
          type: ['line', 'bar', 'stack', 'tiled'],
        },
        saveAsImage: {
          title: 'Download',
          type: 'png',
        },
      },
      iconStyle: individualBar.iconStyle,
    },
    xAxis: [
      {
        type: 'category',
        data: data?.xAxisData,
      },
    ],
    yAxis: [
      {
        type: 'value',
        axisLabel: {
          formatter: (value) => {
            let val = value;
            if (type === 'money') val = `$${Intl.NumberFormat('de-DE').format(value)}`;
            else if (type === 'percentage') val = `${value}%`;
            else if (type === 'number') val = Intl.NumberFormat('de-DE').format(value);

            if (val === '0' || val === '$0') return '';

            return val;
          },
        },
      },
    ],

    series: data?.options ? formatSeries(data?.options) : formatSeries(data?.series),
    color: colors,
    options: data?.options && data?.options,
  };

  return (
    <ReactEchartsCustom
      option={option}
      opts={{ renderer: 'svg' }}
      style={{ height: '400px', padding }}
    />
  );
};

export default Bar;
