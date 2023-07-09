export const defaultOptions = {
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
    data: [],
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
  series: [],
};

// data in series
export const linePayOption = {
  name: "Line Pay 收款",
  type: "bar",
  barWidth: 10,
  data: [],
  stack: "x",
  itemStyle: {
    borderRadius: [0, 0, 23, 23],
    color: "#275682",
  },
  label: {
    show: true,
    position: "bottom",
    formatter: (params) => {
      // console.log(params);
      return params.name;
    },
  },
};

// data in series
export const cashOption = {
  name: "現金收款",
  type: "bar",
  data: [],
  stack: "x",
  itemStyle: {
    borderRadius: [23, 23, 0, 0],
    color: "#75A1CA",
  },
  // label: {
  //   show: true,
  //   position: "top",
  //   formatter: (params) => {
  //     // console.log(params);
  //     return params.name;
  //   },
  // },
};
