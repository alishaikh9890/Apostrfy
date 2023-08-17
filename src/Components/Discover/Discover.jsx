import React from 'react'
import './Discover.css'
import  {ArrowForwardIcon}  from '@chakra-ui/icons'

const data =[
    {
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmZxYbLCrNpyu3nIw7VzMFany4TO5cDSsmbXmWeFJWSg&s",
        name:"Bohemia Rapper",
        dates:{
                first:"12/09/2023",
                last:"14/09/2023"
        },
        para:"lorem ipsum dolar sit amet, constetur adpiscing elit."
    },
    {
        img:"https://www.places-concert.com/images/visuels/festivals_anjunadeep_open_air_london_16122022112735.jpg",
        name:"Anjunadeep",
        dates:{
                first:"15/09/2023",
                last:"16/09/2023"
        },
        para:"lorem ipsum dolar sit amet, constetur adpiscing elit."
    },
    {
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmZxYbLCrNpyu3nIw7VzMFany4TO5cDSsmbXmWeFJWSg&s",
        name:"Bohemia Rapper",
        dates:{
                first:"12/09/2023",
                last:"14/09/2023"
        },
        para:"lorem ipsum dolar sit amet, constetur adpiscing elit."
    },
    {
        img:"https://www.places-concert.com/images/visuels/festivals_anjunadeep_open_air_london_16122022112735.jpg",
        name:"Anjunadeep",
        dates:{
                first:"15/09/2023",
                last:"16/09/2023"
        },
        para:"lorem ipsum dolar sit amet, constetur adpiscing elit."
    },
]


function Discover() {
  return (
    <div className='Discover'>
    <h4>Discover</h4>
       <div className='discover'>
            {data.map((ele) => (
                <div className='element'>
                    <img src={ele.img} />
                    <h4>{ele.name}</h4>
                    <div><p>{ele.dates.first}</p><p>{ele.dates.last}</p></div>
                    <p>{ele.para}</p>
                    <a href=''>Details <ArrowForwardIcon/></a>
                </div>
            ))}
       </div>
      
    </div>
  )
}

export default Discover