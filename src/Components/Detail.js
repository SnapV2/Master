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
          <Col>
            <img src={"icon.png"} height={260} width={250} />
          </Col>
        </Row>
        <Col xs={9}>
          <h3 className="subtitle is-7">ชุมชนบ้านปราสาท</h3>
          <p>ตำบลระแงง อำเภอศรีขรภูมิ จังหวัดสุรินทร์</p>
        </Col>

        <Row>
          <Col xs={9}>
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

        {/* /.card */}
      </div>

      <p></p>
    </div>
  );
}
export default Detail;
