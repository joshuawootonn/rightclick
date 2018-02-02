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
  console.log(props.data);
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
        {()=>{
          if(props.currentGraph === "Gold"){
            return(this.props.children)
          }
            

        }}
        
        
      </BarChart>
    </ResponsiveContainer>
  );
};

export default MatchGraphsComponent;
//<Bar dataKey="uv" stackId="a" fill="#82ca9d" />