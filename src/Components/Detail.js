/* eslint-disable jsx-a11y/alt-text */
//import logo from './logo.svg';
//import React from 'react';
//import Button from "@material-ui/core/Button";
import Button from "reactstrap/lib/Button";
//import Container from "react-bootstrap/Container";
import { Col, Row } from "reactstrap";
import "./Css/Detail.css";

function Detail() {
  return (
    <div className="App">
      <div className="page-main content">
        <Row>
          <Col xs={4}>
            <img src={"22.jpg"} height={260} width={250} />
          </Col>

          <Col xs={6}>
            <h3
              className="subtitle is-7"
              style={{ margin: "30px 30px 30px 30px" }}
            >
              {" "}
              ชุมชนบ้านปราสาท
            </h3>
            <p>ตำบลระแงง อำเภอศรีขรภูมิ จังหวัดสุรินทร์</p>
          </Col>
        </Row>

        <Row>
          <Col>
            <img src={"."} height={300} width={250} />
          </Col>
          <Col xs={8}>
            <div class="page-leftber content"></div>
            <div class="button">
              <Button
                variant="contained"
                style={{ margin: "1px 1px 1px 1px", padding: "10px 45px" }}
              >
                ความเชี่ยวชาญ
              </Button>
              <Button
                variant="contained"
                style={{
                  blackguard: "1px 1px 1px 1px",
                  padding: "10px 45px",
                }}
              >
                ความรู้
              </Button>
              <Button
                variant="contained"
                style={{ margin: "1px 1px 1px 1px", padding: "10px 45px" }}
              >
                รางวัล
              </Button>
              <Button
                variant="contained"
                style={{ margin: "1px 1px 1px 1px", padding: "10px 45px" }}
              >
                งานวิจัยร่วม
              </Button>
              <Button
                variant="contained"
                style={{ margin: "1px 1px 1px 1px", padding: "10px 45px" }}
              >
                ผู้ประสานงาน
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
export default Detail;
