import './App.css';
import {useState} from 'react';
// 0 : SUN , 1 : MON ... 6 : Sat
function check_open(key, today){
  console.log("key",key);
  const open_close = [
  {key : 1, //Lib
  open_day: [0,1,2,3,4,5,6], 
  open_hour : [
  {day : 0, hour : [13,18]},
  {day : 1, hour : [8,20]},
  {day : 2, hour : [8,20]},
  {day : 3, hour : [8,20]},
  {day : 4, hour : [8,20]},
  {day : 5, hour : [8,18]},
  {day : 6, hour : [8,18]},]
},
  {key :2, //gym
  open_day: [0,1,2,3,4,5,6],
  open_hour: [
    {day : 0, hour : [9,22]},
    {day : 1, hour : [6,23]},
    {day : 2, hour : [6,23]},
    {day : 3, hour : [6,23]},
    {day : 4, hour : [6,23]},
    {day : 5, hour : [6,23]},
    {day : 6, hour : [9,18]},]
},
  {key : 3, //food
  open_day: [1,2,3,4,5],
  open_hour: [
    {day : 1, hour : [10,17]},
    {day : 2, hour : [10,17]},
    {day : 3, hour : [10,17]},
    {day : 4, hour : [10,17]},
    {day : 5, hour : [10,17]},]
  },
  {key : 4, //union
  open_day: [0,1,2,3,4,5,6],
    open_hour: [
    {day : 0, hour : [12,23]},
    {day : 1, hour : [7,23]},
    {day : 2, hour : [7,23]},
    {day : 3, hour : [7,23]},
    {day : 4, hour : [7,23]},
    {day : 5, hour : [7,20]},
    {day : 6, hour : [8,20]},]
  }
]; // 1 book, 2 gym, 3 food, 4 union
  let info = open_close[key]; // info has openday, openhour
  let today_day = today.getDay(); // 0~6
  let today_hour = today.getHours(); // 0~23
  console.log(today_hour);
  console.log(info);
  //compare openday -> hour
  if(info.open_day.includes(today_day)){
    return (info.open_hour[today_day].hour[0] <= today_hour && info.open_hour[today_day].hour[1] > today_hour) //check the open_hour in today's day
  }else{
    return false;
  }
}

function ButtonGroup(props){
  
  const rst = [];
  for(let i = 0; i < props.path.length; i++){
    rst.push(<button key = {props.path[i].id} className = 'button_group' onClick = {()=>{
      console.log(props.path[i].id);
      let open_status = check_open(props.path[i].id, props.today);
      console.log(open_status);

      // check the orient-area tag
      let orient_area = document.getElementsByClassName('button_group');
      // img tag
      let status_img = document.createElement('img');
      status_img.id = 'open_closed_pic';
      
      // img container tag(div)
      let status_img_div = document.createElement('div');
      status_img_div.id = 'open_closed_div';
      
      // x button to go back
      let x_button = document.createElement('button');
      x_button.id = 'x_button';
      x_button.innerHTML = ' X ';
      x_button.onclick = function(){status_img_div.remove()};

      //if true : place open card // if false : place close card
      if(open_status){
        status_img.src = 'img/open.png';
      }else{
        status_img.src = 'img/closed.png';
      }
      status_img_div.appendChild(status_img); // append img to div
      status_img_div.appendChild(x_button); // append button to div
      orient_area[0].appendChild(status_img_div); // append div to the point of button 0
    }
  }>
      <img id = 'img_group' className = 'img_group' src = {props.path[i].path} alt = 'img group:button'></img>
      <div className = "button_group_name">{props.path[i].name}</div>
    </button>)
  }
  return <>{rst}</>
}


function TimeDisplay(probs){
  let year = probs.time.getFullYear(); // 년도
  let month = probs.time.getMonth() + 1;  // 월
  let date = probs.time.getDate();  // 날짜
  let day = probs.time.getDay();  // 요일
  let hours = probs.time.getHours(); // 시
  let minutes = String(probs.time.getMinutes()).padStart(2,"0");  // 분
  
  const day_swith = [
    'Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'
  ]
  
  return <>
      <h3 className = "time_display">Current Time : {month}-{date}-{year}/({day_swith[day]})/{hours}:{minutes}</h3>
    </>
  }
  
  // function Desc(){
  //   return  <>
  //   <div className = 'desc_warp'>
    
  //   <div className = "desc_div">
  //     <h3>INFO</h3>
  //     <div className = "info_fac">blah</div>
  //     <div className = "call_fac">415-000-0000</div>
  //     <div className = "web_fac">www.daffasdafaadsfd</div>

  //   </div>
    
  //   <div className = "desc_div">
  //     <h3>LOCATION</h3>
  //   </div>
    
  //   </div>
  //   </>
  // }
  // function OPENCLOSED_CARD(props){
  //   console.log(props.img);
  //   return <div>
  //     <img src = {props.img}>
  //     </img>
  //   </div>
      
  
  // }
  function App() {
    let today = new Date();
    const img_path = [
      {id : 0, path : 'img/open-book.png', name : "LIBRARY"},
      {id : 1, path : 'img/dumbbell.png', name : "GYM"},
      {id : 2, path : 'img/food.png', name : 'FOOD-PANTRY'},
      {id : 3, path : 'img/relax.png', name : 'SU'},
    ]


    // const [status, setStatus] = useState(null);

  return (
    <>
    <div id = 'body'>
    <img  className = 'title_img' src  = 'img/SJSU.png' alt = 'sjsu title img'></img>
    <h1 className = 'header'>SJSU Facility OPEN/CLOSED</h1>
    <TimeDisplay time = {today}></TimeDisplay>
    <div className = 'total'>
      <ButtonGroup path = {img_path} today = {today} onChangeMode = {()=> {
      setStatus(false);
    }}></ButtonGroup>
    </div>
    <br/>
    {/* <OPENCLOSED_CARD img = 'img/closed.png'></OPENCLOSED_CARD> */}
    {/* <Desc></Desc> */}
    <br/>
    <footer id = 'footer'>All operation hours are based on SJSU official website</footer>
    </div>
    </>
  );
}

export default App;
