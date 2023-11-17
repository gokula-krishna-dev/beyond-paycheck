'use client';

import "bootstrap/dist/css/bootstrap.min.css";
import dynamic from 'next/dynamic'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { TypeAnimation } from 'react-type-animation';
import { Line, Doughnut } from 'react-chartjs-2';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import Table from "react-bootstrap/Table";

import React, { useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

ChartJS.register(ArcElement);

function LearnMoreModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Learn more
      </Button>

      <Modal show={show} onHide={handleClose} size="xl">
        <Modal.Header closeButton>
          <Modal.Title>Hey Chris,</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "Given your financial situation, I believe setting up automatic savings could be a real game-changer for you. Also, looking at your recent transactions, it might be worth reconsidering expenses in certain areas. For instance, you've had a few high spends on Entertainment and Travel. While it's important to enjoy life, maybe scaling back on these could help free up more funds for debt repayment.",
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: '2em', display: 'inline-block' }}
            repeat={Infinity}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Execute recommendation
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

function ViewStatementModal(transactionData: any) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  console.log(transactionData.transaction.doughnutData);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        View Statement
      </Button>


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Your transactions</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Doughnut data={transactionData.transaction.doughnutData} />
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Date</th>
                <th>Amount</th>
                <th>Category</th>
              </tr>
            </thead>
            <tbody>
              {transactionData.transaction.transactionData.map((transaction: any, index: number) => (
                <tr key={index}>
                  <td>{transaction.Date}</td>
                  <td>{transaction.Amount}</td>
                  <td>{transaction.Category}</td>
                </tr>
              ))}
            </tbody>
          </Table>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October'];

const data = {
  labels,
  datasets: [
    {
      label: 'Savings',
      data: [0, 10, 5, 2, 20, 30, 45, 50, 60, 70],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
    {
      label: 'Debt',
      data: [10, 15, 20, 10, 25, 35, 40, 45, 50, 55],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
};

const rawDataset = {
  'alex': {
    isGoodProfile: true,
    chart: {
      labels,
      datasets: [
        {
          label: 'Savings',
          data: [24562.33, 20321.38, 31759.85, 17286.69, 89773.39, 73726.09, 15930.77, 19747.16, 40969.34, 73270.93, 67599.83],
          borderColor: 'rgb(53, 162, 235)',
          backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
        {
          label: 'Debt',
          data: [26894.31, 22548.38, 22509.79, 24937.49, 29104.12, 29257.3, 29914.47, 32033.29, 26803.51, 29495.25, 27622.61],
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
      ],
    },
    transactions: [
      { "Date": "2023-10-06", "Category": "Medical", "Amount": -34.73 },
      { "Date": "2023-08-18", "Category": "Electronics", "Amount": -419.81 },
      { "Date": "2023-07-18", "Category": "Entertainment", "Amount": -487.5 },
      { "Date": "2023-06-27", "Category": "Groceries", "Amount": -182.91 },
      { "Date": "2023-06-25", "Category": "Utilities", "Amount": -441.3 },
      { "Date": "2023-06-08", "Category": "Medical", "Amount": -97.23 },
      { "Date": "2023-05-12", "Category": "Dining Out", "Amount": -355.69 },
      { "Date": "2023-04-20", "Category": "Education", "Amount": -285.74 },
      { "Date": "2023-04-18", "Category": "Medical", "Amount": -455.96 },
      { "Date": "2023-04-12", "Category": "Entertainment", "Amount": -77.05 }
    ],
    doughnut: {
      labels: ["Essentials", "Non-essentials"],
      datasets: [{
        label: 'Spend by category',
        data: [52.78, 47.22],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 205, 86)',
        ],
        hoverOffset: 4
      }]
    }
  },
  'jordan': {
    isGoodProfile: true,
    chart: {
      labels,
      datasets: [
        {
          label: 'Savings',
          data: [14542.21, 85096.6, 96314.56, 112009.75, 111286.94, 56304.36, 1126.9, 114276.62, 35955.21, 100925.36, 51137.7],
          borderColor: 'rgb(53, 162, 235)',
          backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
        {
          label: 'Debt',
          data: [18266.68, 21560.21, 24102.89, 25552.74, 21552.29, 22508.12, 25899.74, 24263.36, 18161.31, 25124.83, 20445.69],
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
      ],
    },
    transactions: [
      { "Date": "2023-10-06", "Category": "Medical", "Amount": -34.73 },
      { "Date": "2023-08-18", "Category": "Electronics", "Amount": -419.81 },
      { "Date": "2023-07-18", "Category": "Entertainment", "Amount": -487.5 },
      { "Date": "2023-06-27", "Category": "Groceries", "Amount": -182.91 },
      { "Date": "2023-06-25", "Category": "Utilities", "Amount": -441.3 },
      { "Date": "2023-06-08", "Category": "Medical", "Amount": -97.23 },
      { "Date": "2023-05-12", "Category": "Dining Out", "Amount": -355.69 },
      { "Date": "2023-04-20", "Category": "Education", "Amount": -285.74 },
      { "Date": "2023-04-18", "Category": "Medical", "Amount": -455.96 },
      { "Date": "2023-04-12", "Category": "Entertainment", "Amount": -77.05 }
    ],
    doughnut: {
      labels: ["Essentials", "Non-essentials"],
      datasets: [{
        label: 'Spend by category',
        data: [52.78, 47.22],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 205, 86)',
        ],
        hoverOffset: 4
      }]
    }
  },
  'smith': {
    isGoodProfile: false,
    chart: {
      labels,
      datasets: [
        {
          label: 'Savings',
          data: [7311.36, 45515.76, 43838.35, 100.47, 49228.99, 35886.46, 31768.78, 17444.2, 5591.25, 40510.14, 50772.9],
          borderColor: 'rgb(53, 162, 235)',
          backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
        {
          label: 'Debt',
          data: [23219.61, 22112.55, 25968.18, 27320.54, 22419.54, 28441.04, 29480.62, 21668.33, 26229.44, 29196.62, 30285.35],
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
      ],
    },
    transactions: [
      { "Date": "2023-09-27", "Category": "Groceries", "Amount": -266.31 },
      { "Date": "2023-08-20", "Category": "Utilities", "Amount": -436.26 },
      { "Date": "2023-08-05", "Category": "Entertainment", "Amount": -485.27 },
      { "Date": "2023-05-20", "Category": "Electronics", "Amount": -499.71 },
      { "Date": "2023-05-03", "Category": "Groceries", "Amount": -299.76 },
      { "Date": "2023-04-07", "Category": "Travel", "Amount": -280.59 },
      { "Date": "2023-03-28", "Category": "Travel", "Amount": -118.27 },
      { "Date": "2023-03-07", "Category": "Entertainment", "Amount": -243.68 },
      { "Date": "2023-02-19", "Category": "Utilities", "Amount": -460.01 },
      { "Date": "2023-02-06", "Category": "Miscellaneous", "Amount": -483.33 }
    ],
    doughnut: {
      labels: ["Essentials", "Non-essentials"],
      datasets: [{
        label: 'Spend by category',
        data: [40.93, 59.07],
        backgroundColor: [
          'rgb(255, 205, 86)',
          'rgb(255, 99, 132)',
        ],
        hoverOffset: 4
      }]
    }
  },
  'chris': {
    isGoodProfile: false,
    chart: {
      labels,
      datasets: [
        {
          label: 'Savings',
          data: [8915.45, 21277.52, 4036.1, 21476.86, 24412.78, 4092.88, 15912.22, 18081.82, 2302.16, 18154.07, 25261.63],
          borderColor: 'rgb(53, 162, 235)',
          backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
        {
          label: 'Debt',
          data: [99867.72, 92695.69, 93751.03, 111603.41, 123311.21, 115632.68, 109086.74, 88978.4, 92977.23, 85047.66, 87260.04],
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
      ],
    },
    transactions: [
      { "Date": "2023-09-27", "Category": "Groceries", "Amount": -266.31 },
      { "Date": "2023-08-20", "Category": "Utilities", "Amount": -436.26 },
      { "Date": "2023-08-05", "Category": "Entertainment", "Amount": -485.27 },
      { "Date": "2023-05-20", "Category": "Electronics", "Amount": -499.71 },
      { "Date": "2023-05-03", "Category": "Groceries", "Amount": -299.76 },
      { "Date": "2023-04-07", "Category": "Travel", "Amount": -280.59 },
      { "Date": "2023-03-28", "Category": "Travel", "Amount": -118.27 },
      { "Date": "2023-03-07", "Category": "Entertainment", "Amount": -243.68 },
      { "Date": "2023-02-19", "Category": "Utilities", "Amount": -460.01 },
      { "Date": "2023-02-06", "Category": "Miscellaneous", "Amount": -483.33 }
    ],
    doughnut: {
      labels: ["Essentials", "Non-essentials"],
      datasets: [{
        label: 'Spend by category',
        data: [40.93, 59.07],
        backgroundColor: [
          'rgb(255, 205, 86)',
          'rgb(255, 99, 132)',
        ],
        hoverOffset: 4
      }]
    }

  },
}

const Home = () => {
  const [isGoodProfile, setIsGoodProfile] = useState(true);
  const [chartData, setChartData] = useState(rawDataset['alex'].chart);
  const [transactionData, setTransactionData] = useState(rawDataset['alex'].transactions);
  const [doughnutData, setDoughnutData] = useState(rawDataset['alex'].doughnut);

  const handleClick = (name: string) => {
    console.log(name);
    setIsGoodProfile(() => rawDataset[name].isGoodProfile);
    setChartData(() => rawDataset[name].chart);
    setTransactionData(() => rawDataset[name].transactions);
    setDoughnutData(() => rawDataset[name].doughnut);
  };

  console.log(chartData)
  return (
    <div className={isGoodProfile ? "green" : "danger"}>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Beyond Paycheck</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Persona" id="basic-nav-dropdown">
                <NavDropdown.Item onClick={() => handleClick('alex')}>Alex</NavDropdown.Item>
                <NavDropdown.Item onClick={() => handleClick('jordan')}>
                  Jordan
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => handleClick('smith')}>Smith</NavDropdown.Item>
                <NavDropdown.Item onClick={() => handleClick('chris')}>Chris</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div style={{ marginTop: '1em' }}>
        <Container>
          <Row>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Net worth</Card.Title>
                  <Card.Text style={{ textAlign: 'center' }}>
                    <Line data={chartData} />
                    <ViewStatementModal transaction={{ transactionData, doughnutData }} />
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Your recommendation</Card.Title>
                  <Carousel slide={true}>
                    <Carousel.Item>
                      <Image src="/prudential.png" height={"340px"} width={"600"} />
                    </Carousel.Item>
                    <Carousel.Item>
                      <Image src="/dbs.png" height={"340px"} width={"600"} />
                    </Carousel.Item>
                    <Carousel.Item>
                      <Image src="/choclate.png" height={"340px"} width={"600"} />
                    </Carousel.Item>
                  </Carousel>
                  <div style={{ textAlign: 'center', marginTop: '1em' }}>
                    <LearnMoreModal />
                  </div>

                </Card.Body>
              </Card>
            </Col>
          </Row>

        </Container>

      </div>
    </div>
  )
}

export default dynamic(() => Promise.resolve(Home), {
  ssr: false
})
