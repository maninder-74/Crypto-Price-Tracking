import React, { useEffect ,useState} from 'react'
import Chart from 'react-google-charts';
import '../LineChart/LineChart.css';

export default function LineChart({pastData}) {   
    const [data,setData] = useState([["Date","Prices"]]);
   useEffect(()=>{
 
      let copy = [["Date","Prices"]];
 
      if(pastData?.prices){
        pastData.prices.map((item)=>{
             copy.push([`${new Date(item[0]).toLocaleDateString().slice(0,-5)}`,
             item[1]
          ]);
        });
        setData(copy);
      }
   },[pastData]);

  return (
    <Chart
     chartType="LineChart"
     data={data}
     height="100%"
     legendToggle

    />
  );
}
