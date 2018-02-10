import React from "react";
import MatchMenuComponent from "./match-menu-component";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const MatchGraphsComponent = props => {
  const Bars = props.barData.map((ele, i) => {
    return (
      <Bar
        key={i}
        name={ele.name}
        dataKey={ele.dataKey}
        stackId={ele.stackId}
        fill={ele.fill}
      />
    );
  });
  const Buttons = ["Physical","Magic","True"].map((ele,i)=>{
    return <button className="button" key={i+ele} onClick={()=>{props.changeSubGraph(ele)}}>{ele}</button>
  })
  
  return (
    <div>
      <ResponsiveContainer width="100%" height={500}>
        <BarChart
          width={100}
          height={300}
          data={props.data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          {Bars}
        </BarChart>
      </ResponsiveContainer>
      <div className="field">
        <div className="control">
            <button onClick={()=>{props.changeGraph("Gold")}} className="button">
              Gold
            </button>
            <button onClick={()=>{props.changeGraph("Dealt")}} className="button">
              Dealt
            </button>
            { props.type.includes("Dealt") ? Buttons : null }
            <button onClick={()=>{props.changeGraph("Taken")}} className="button">
              Taken
            </button>
            { props.type.includes("Taken") ? Buttons : null }
            <button onClick={()=>{props.changeGraph("Healing")}} className="button">
              Healing
            </button>
        </div>
      </div>      
    </div>
  );
};

export default MatchGraphsComponent;

