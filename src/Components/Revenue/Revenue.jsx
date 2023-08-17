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

  const [rev, setRev] = React.useState(1)

    const data =[
      {
        id:1,
        labels: ['','Apr','May','Jun',''],
        datasets: [
            {
                label:'95.4k',
                data:[,7,9,5,],
                backgroundColor:'#FFB628',
                borderRadius:13,
                hoverBackgroundColor: 'rgba(50, 50, 93, 0.25)', // Set the hover background color with box shadow
            } 
        ]
    },
      {
        id:2,
        labels: [ 'Jan', 'Fed', 'Mar', 'Apr', 'May','Jun'],
        datasets: [
            {
                label: '95.4k',
                data:[3,6,5,7,9,6],
                backgroundColor:'#FFB628',
                borderRadius:10,
            } 
        ]
    },
      {
        id:3,
        labels: [  'Jul', 'Aug', "Sep", "Oct", "Nov", "Dec",'Jan', 'Fed', 'Mar', 'Apr', 'May','Jun'],
        datasets: [
            {
                label: '95.4k',
                data:[6,5,3,6,5,7,3,6,5,7,9,6],
                backgroundColor:'#FFB628',
                borderRadius:6,
            } 
        ]
    },
  ]

  const Data = data.filter((item) => item.id === rev) 



    const options =
    {
        scales: {
            y: {
              display: false,
            },
            x:{
                display:true,
                grid: {
                  display: false,
                },
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
              
              left: 10,
              right: 10,
             
            },
          },
          // Disable interaction for masking bottom corners
          interaction: {
            mode: 'index',
            intersect:false,
          }
    }

  return (
    <div className='Revenue'>
    <div className='stats-head'>
      <h4>Stats</h4>
      <a href=''>Details <ArrowForwardIcon/></a>
    </div>
        
        <div className='chart'>
       { Data.map((ele) => (
        <div>
        <Bar data={ele} options={options} />

        <style>
        {`
        .chart-container .react-chartjs-2-bar {
          border-radius: 6px;
          border-top: 0;
          border-bottom: 0;
          box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
        }
        `}
        </style>

        </div>
          ))
        }
        </div>

        <p style={{color:"rgba(0, 0, 0, 0.777)",fontWeight:"600", marginTop:"5px"}}>Net Revenue</p>

        <div className='years'>
          <button onClick={() => setRev(1)}>3m</button>
          <button onClick={() => setRev(2)}>6m</button>
          <button onClick={() => setRev(3)}>1 yr</button>
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