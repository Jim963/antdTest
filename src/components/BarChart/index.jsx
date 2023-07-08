import ReactEChartsCore from "echarts-for-react/lib/core";
import * as echarts from "echarts/core";
import { BarChart } from "echarts/charts";
import {
  TooltipComponent,
  GridComponent,
  LegendComponent,
} from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";
import { singleBarChartData as rawData } from "./dataStore";

echarts.use([
  BarChart,
  //   TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  CanvasRenderer,
]);

const BarChartTest = () => {
  const xAxisData = rawData.map((item) => item.month);
  const colorPicker = ["#2596be", "#f8af6a", "#103560", "#e28743"];
  const chartData = rawData.map((item, i) => {
    if (i >= colorPicker.length) i = i % 4;
    return {
      value: item.days,
      itemStyle: { color: colorPicker[i] },
    };
  });
  const options = {
    tooltip: {},
    legend: {
      show: true,
      formatter: (params) => {
        return "anjann";
      },
    },
    xAxis: {
      type: "category",
      data: xAxisData,
    },
    yAxis: { type: "value" },
    series: [
      {
        name: "Month",
        type: "bar",
        data: chartData,
        stack: "x",
        // label: {
        //   show: true,
        //   position: "top",
        //   formatter: (params) => {
        //     // console.log(params);
        //     return params.name;
        //   },
        // },
      },
      {
        name: "Another",
        type: "bar",
        data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
        stack: "x",
        // label: {
        //   show: true,
        //   position: "top",
        //   formatter: (params) => {
        //     // console.log(params);
        //     return params.name;
        //   },
        // },
      },
    ],
  };
  return (
    <div>
      <h1>React Echarts - Coloured Bar Chart</h1>
      <ReactEChartsCore echarts={echarts} lazyUpdate={true} option={options} />
    </div>
  );
};

export default BarChartTest;
