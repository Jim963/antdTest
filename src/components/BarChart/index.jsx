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
      bottom: 20,
      itemHeight: 5,
      textStyle: {
        fontSize: 14,
        color: "#484848",
      },
      formatter: (params) => {
        return params;
      },
    },
    xAxis: {
      type: "category",
      data: xAxisData,
      show: false,
      axisLabel: {
        textStyle: { fontSize: 14, color: "#484848" },
      },
    },
    yAxis: {
      name: "元/日",
      nameTextStyle: {
        color: "#999",
      },
      type: "value",
      axisLabel: {
        textStyle: { fontSize: 14, color: "#484848" },
      },
      //   splitLine: { show: false },
    },
    series: [
      {
        name: "Line Pay 收款",
        type: "bar",
        barWidth: 10,
        data: chartData,
        stack: "x",
        itemStyle: {
          borderRadius: [0, 0, 23, 23],
        },
        label: {
          show: true,
          position: "bottom",
          formatter: (params) => {
            // console.log(params);
            return params.name;
          },
        },
      },
      {
        name: "現金收款",
        type: "bar",
        data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
        stack: "x",
        itemStyle: {
          borderRadius: [23, 23, 0, 0],
        },
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
