import React from 'react'
import './Booking.css'
import  {ArrowForwardIcon}  from '@chakra-ui/icons'
import { RiArrowLeftSLine} from 'react-icons/ri';
import { RiArrowRightSLine } from 'react-icons/ri';
import { GoDotFill } from 'react-icons/go';

const calData = [
     {
        index:1,
        month:"May",
        days:["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
        dates:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
     },
     {
        index:2,
        month:"Jun",
        days:["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
        dates:["", "", "", 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
     },
     {
        index:3,
        month:"July",
        days:["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
        dates:["","" ,"" ,"" ,"", 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
     },
     {
        index:4,
        month:"August",
        days:["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
        dates:["",1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
     },
     {
        index:5,
        month:"September",
        days:["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
        dates:["","","","",1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
     },
     {
        index:6,
        month:"October",
        days:["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
        dates:["","","","","","",1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
     },
     {
        index:7,
        month:"November",
        days:["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
        dates:["","",1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
     },
     {
        index:8,
        month:"December",
        days:["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
        dates:["","","","",1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
     },
     {
        index:9,
        month:"January",
        days:["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
        dates:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
     },
     {
        index:10,
        month:"February",
        days:["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
        dates:["","","",1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28]
     },
     {
        index:11,
        month:"March",
        days:["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
        dates:["","","","",1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,31]
     },
     {
        index:12,
        month:"April",
        days:["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
        dates:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
     },
]


   


function Bookings() {
    
    const [page, setPage] = React.useState(1);

    
    const Data = calData.filter((item) => item.index === page);

  return (
    <div className='Booking'>
        <div className='booking-head'>
            <h4>Bookings</h4>
            <a href=''>Details <ArrowForwardIcon/></a>
        </div>

        <div className='months'>
        <button onClick={() => setPage(page - 1)} disabled={page===1}><RiArrowLeftSLine className='arrIcon'/></button>
         
        {Data.map(ele => <p>{ele.month}</p>)}
        
        <button onClick={() => setPage(page + 1)} disabled={page=== 12} ><RiArrowRightSLine className='arrIcon'/></button>
        </div>
        <div className='calender'>
        
       {  Data.map((ele) => (
            <div className='sub-calender'>
                <div className='days'>
                  {ele.days.map((day) =>(
                    <h5>{day}</h5>
                  ))}  
                </div>

                <div className='dates'>
                {ele.dates.map((date) =>(
                    <p>{date}</p>
                  ))} 
                </div>

                <div className='nights'>
                    <h5><GoDotFill className='nightIcon1'/>Nights Booked</h5>
                    <h5><GoDotFill className='nightIcon2'/>Nights Available</h5>
                </div>
            </div>
        ))}
        </div>
    </div>
  )
}

export default Bookings