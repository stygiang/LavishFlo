import React from "react";
import styled from "styled-components";
import { Line } from "react-chartjs-2";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  background-color: #f6f6f6;
  padding: 1em;
`;
const Header = styled.div`
  margin-bottom: 1em;
  h2 {
    font-size: 1.5rem;
    font-weight: 600px;
    letter-spacing: 1px;
    line-height: 1;
  }
`;
const InfoBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 1.3em 0;
`;
const Box = styled.div`
  text-align: center;
  padding: 1em;
`;
const Price = styled.p`
  font-size: 2rem;
  font-weight: 700;
`;
const Text = styled.p`
  letter-spacing: 1.5px;
  line-height: 1;
  text-transform: capitalize;
`;

const TotalRevenue = () => {
  return (
    <Container>
      <Header>
        <h1>Total Revenue</h1>
      </Header>
      <Line
        legend={{ labels: { fontStyle: 1.9 } }}
        data={{
          labels: ["janurary", "feburary", "march", "april", "may"],

          datasets: [
            {
              label: "total",
              data: [1098, 786, 947, 2765, 1000],
              backgroundColor: "rgba(84, 164, 255, 1)",
              pointBackgroundColor: "transparent",
            },
          ],
        }}
        options={{
          responsive: true,
          title: { display: false },
          legend: { display: false },
        }}
      />
      <InfoBox>
        <Box>
          <Price>$400</Price>
          <Text>total Revenue</Text>
        </Box>
        <Box>
          <Price>17</Price>
          <Text>Open campaigns</Text>
        </Box>
      </InfoBox>
    </Container>
  );
};

export default TotalRevenue;
