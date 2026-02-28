import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  BarChart,
  Bar,
} from "recharts";

const DataChart = ({ data }) => {
  return (
    <BarChart width={200} height={"100%"} data={data}>
      {/* <CartesianGrid stroke="#ccc" /> */}
      {/* <XAxis dataKey={"date"} />
      <YAxis /> */}
      <Tooltip />
      {/* <Legend /> */}
      <Bar
        dataKey={"views"}
        fill="#0d6953"
        radius={15}
        animationDuration={5000}
        animationEasing="ease-out"
      />
      <Bar
        dataKey={"clicks"}
        fill="#55cf84"
        radius={15}
        animationDuration={5000}
        animationEasing="ease-out"
      />
      <Bar
        dataKey={"conversions"}
        fill="#38a180"
        radius={15}
        animationDuration={5000}
        animationEasing="ease-out"
      />
    </BarChart>
  );
};
export default DataChart;
