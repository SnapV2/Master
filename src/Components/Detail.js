import './Css/Detail.scss';
import Button from "@material-ui/core/Button";
import React from "react";
import { slide as Menu } from "react-burger-menu";
import "./Css/listView.scss";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


function Detail () {
  
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
 
  
  

return(
      <div className = "App">
     
        <div className="list-view-menu">
        <Menu >
              <Button variant="contained">หน้าแรก</Button>
              <Button >งานวิจัย</Button>
              <Button >พื้นที่งานวิจัย</Button>
              <Button >ข้อมูลนักวิจัย</Button>
        </Menu>
        </div> 

      

        
      </div>
  );
}


export default Detail ;