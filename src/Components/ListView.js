import React from "react";
import Button from '@material-ui/core/Button'
import { slide as Menu } from "react-burger-menu";
import "./Css/listView.scss";
import {Link } from "react-router-dom";




function ListView() {
  return (
    <div className="list-view">
      <div>
        <div className="list-view-menu">
        
        <Menu >
                <Button  variant="contained" style={{margin: '5px auto', display: "flex", padding:"2px 0px 0px 0px" , width: "150px" }} >งานวิจัย</Button>
                <Link to = "./Detail.js" >
                 <Button variant="contained" style={{margin: '5px auto', display: "flex", padding:"2px 0px 0px 0px" , width: "150px" }} >นักวิจัย</Button>
                  </Link>
                <Button variant="contained" style={{margin: '5px auto', display: "flex", padding:"2px 0px 0px 0px" , width: "150px"}} >เครือข่ายความร่วมมือ</Button>
                <Button variant="contained" style={{margin: '5px auto', display: "flex", padding:"2px 0px 0px 0px " , width: "150px" }} >ผลกระทบ</Button>
           
        </Menu>

        </div>
      </div>
    </div>
  );
}

export default ListView;



