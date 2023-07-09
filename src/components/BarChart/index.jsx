import ReactEChartsCore from "echarts-for-react/lib/core";
import * as echarts from "echarts/core";
import { BarChart } from "echarts/charts";
import {
  TooltipComponent,
  GridComponent,
  LegendComponent,
} from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";
import { ConfigProvider, Card } from "antd";
import { defaultOptions, linePayOption, cashOption } from "./options";
import { singleBarChartData as rawData } from "./dataStore";

echarts.use([
  BarChart,
  //   TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  CanvasRenderer,
]);

const BarChartTest = ({ title = "測試標題" }) => {
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
    ...defaultOptions,
    xAxis: {
      ...defaultOptions.xAxis,
      data: xAxisData,
    },
    series: [{ ...linePayOption, data: chartData }, { ...cashOption }],
  };

  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            paddingLG: 0,
            boxShadowTertiary: "0px 3px 12px 0px rgba(0, 0, 0, 0.08)",
          },
        }}
      >
        <div className="text-[18px] xl:text-[22px] font-bold p-[8px]">
          {title}
        </div>
        <Card
          bordered={false}
          className="p-[10px] xl:p-[20px] rounded-[24px] shadow-xl"
        >
          <ReactEChartsCore
            echarts={echarts}
            lazyUpdate={true}
            option={options}
          />
        </Card>
      </ConfigProvider>
    </>
  );
};

export default BarChartTest;
