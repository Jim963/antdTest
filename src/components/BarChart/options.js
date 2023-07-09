export const defaultOptions = {
  tooltip: {},
  grid: {
    top: 30,
    right: 0,
    left: 60,
    bottom: 60,
  },
  legend: {
    show: true,
    bottom: 0,
    itemHeight: 5,
    padding: [16, 0, 0, 0],
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
    distance: 13,
    formatter: (params) => {
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
  //     return params.name;
  //   },
  // },
};
