import React from 'react'
import "./Revenue.css"
import  {ArrowForwardIcon}  from '@chakra-ui/icons'
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'

import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
} from 'chart.js'

import { Bar } from "react-chartjs-2"; 

ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
)

function Revenue() {
    const data ={
        labels: ['Jan', 'Fed', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [
            {
                label: '369',
                data:[3, 6, 9, 5, 2, 7, 4],
                backgroundColor:'#FFB628',
                borderRadius:5,
            } 
        ]
    }

    const options =
    {
        scales: {
            y: {
              display: false,
            },
            x:{
                display:true,
            }
          },
          plugins: {
            legend: {
              display: false, // Set to true if you want to show legend
              position: 'top', // Available options: top, bottom, left, right
            },
          },
          layout: {
            padding: {
              top: 20,
              left: 10,
              right: 10,
              bottom: 0,
            },
          },
    }

  return (
    <div className='Revenue'>
    <div className='stats-head'>
      <h4>Stats</h4>
      <a href=''>Details <ArrowForwardIcon/></a>
    </div>
        
        <div className='chart'>
            <Bar
                data={data}
                options = {options}
            />
        </div>

        <p style={{color:"rgba(0, 0, 0, 0.777)",fontWeight:"600", marginTop:"5px"}}>Net Revenue</p>

        <div className='years'>
          <button>3m</button>
          <button>6m</button>
          <button>1 yr</button>
          <button>2 yrs</button>
          <button>Max</button>
        </div>

      <div className='stats-circle'>
        <div className='circle'>
        <p>Occupancy</p>
            <CircularProgress value={29} 
                trackColor = 'orange'
                size="100px"
                thickness="10px"
                color="#FEF5EA"
              >
            <CircularProgressLabel 
                  style={{
                      color:"orange",
                      fontWeight:"700",
                      margin:"auto",
                    
                  }}
            >61%</CircularProgressLabel>
            </CircularProgress>
          </div>

          <div className='Number'>
                <p>Avg Room Rate</p>
                  <h2>7,338</h2>
          </div>
      </div>

    </div>
  )
}

export default Revenue