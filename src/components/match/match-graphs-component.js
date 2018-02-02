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
  console.log("matchgraphcomponent",props.data);
  return (
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
        <Bar name="Magic" dataKey="magic1" stackId="a" fill="#A239CA" />
        <Bar name="Physical" dataKey="physical1" stackId="a" fill="#4717F6" />
        <Bar name="True" dataKey="true1" stackId="a" fill="#A239CA" />
        <Bar name="Magic" dataKey="magic2" stackId="a" fill="#A239CA" />
        <Bar name="Physical" dataKey="physical2" stackId="a" fill="#4717F6" />
        <Bar name="True" dataKey="true2" stackId="a" fill="#A239CA" />
        
        
      </BarChart>
    </ResponsiveContainer>
  );
};

export default MatchGraphsComponent;
//<Bar dataKey="uv" stackId="a" fill="#82ca9d" />

// Gold
// <Bar name="Gold" dataKey="gold1" stackId="a" fill="#A239CA" />
//         <Bar name="Gold" dataKey="gold2" stackId="a" fill="#4717F6" />


// Damage
// <Bar name="Magic" dataKey="magic1" stackId="a" fill="#A239CA" />
//         <Bar name="Physical" dataKey="physical1" stackId="a" fill="#4717F6" />
//         <Bar name="True" dataKey="true1" stackId="a" fill="#A239CA" />
//         <Bar name="Magic" dataKey="magic2" stackId="a" fill="#A239CA" />
//         <Bar name="Physical" dataKey="physical2" stackId="a" fill="#4717F6" />
//         <Bar name="True" dataKey="true2" stackId="a" fill="#A239CA" />


// REceived
// <Bar name="Gold" dataKey="gold1" stackId="a" fill="#A239CA" />
//         <Bar name="Gold" dataKey="gold2" stackId="a" fill="#4717F6" />


// Healing
// <Bar name="Healing" dataKey="heal1" stackId="a" fill="#A239CA" />
//         <Bar name="Healing" dataKey="heal1" stackId="a" fill="#4717F6" />