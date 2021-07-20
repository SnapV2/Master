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
          <Col>
            <img src={"."} height={300} width={250} />
          </Col>
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

      <div class="grid">
        <div class="page-footer content">
          <h3 className="subtitle is-7"> </h3>
        </div>
        <div class="page-leftber content">
          <img src={"./RMUTI_KORAT.png"} height={120} width={70} />
          <img src={"./logo3.png"} height={120} width={70} />

          <h3 className="subtitle is-7">หน้าแรก</h3>
          <h3 className="subtitle is-7">งานวิจัย</h3>
          <h3 className="subtitle is-7">พื้นที่งานวิจัย</h3>
          <h3 className="subtitle is-7">ข้อมูลนักวิจัย</h3>
          <h3 className="subtitle is-7">ข้อมูลนักวิจัย</h3>
        </div>

        <div class="page-main content">
          <div>
            <img src={"."} height={300} width={250} />

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
          </div>
        </div>
      </div>
      <p></p>
    </div>
  );
}
export default Detail;
