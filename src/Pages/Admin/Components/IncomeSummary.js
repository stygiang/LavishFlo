import React from "react";
import styled from "styled-components";
import { config } from "../../../config";
import { Line } from "react-chartjs-2";

const IncomeSummaryy = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas: "Info Bar Bar";
  background-color: #f6f6f6;
  padding: 1em;
  border-radius: 5px;
`;
const IncomeSummaryInfo = styled.div`
  grid-area: Info;
`;
const IncomeSummaryBar = styled.div`
  grid-area: Bar;
  letter-spacing: 1px;
  line-height: 1.2;
  h2 {
    font-size: 1.5rem;
  }
`;
const Text = styled.p`
  font-size: 1.2rem;
  span {
    color: ${config.colors.primary};
    font-weight: 600;
  }
`;
const IncomeSummaryText = styled.p`
  margin-top: 2.5em;
  font-size: 1.4rem;
  letter-spacing: 1px;
  line-height: 1.2;
`;
const Button = styled.p`
  display: inline-block;
  padding: 0.6em 1.5em;
  font-size: 1.3rem;
  background-color: ${config.colors.primary};
  border-radius: 20px;
  color: ${config.colors.light};
  margin: 1em 0;
  transition: transform 500ms;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
  &:active {
    transform: scale(0.9);
  }
`;

const IncomeSummary = () => {
  return (
    <div>
      <IncomeSummaryy>
        <IncomeSummaryInfo>
          <h2>Income Summary</h2>
          <Text>Over past week</Text>
          <Text>
            <span>-75%</span> vs last months
          </Text>
          <IncomeSummaryText>
            Lorem ipsum dolor sit amet, mel id vitae noluisse interesset, duo ea
            corpora nostrum vivendum. Nec cu exerci virtute fierent.
          </IncomeSummaryText>
          <Button>View Details</Button>
        </IncomeSummaryInfo>
        <IncomeSummaryBar>
          <Line
            height={"auto"}
            width={"auto"}
            data={{
              labels: [
                "Monday",
                "Tuesday",
                "Wednsday",
                "Thursday",
                "Friday",
                "Saturday",
                "sunday",
              ],
              datasets: [
                {
                  label: "Current Week",
                  data: [78, 45, 63, 108, 67, 73, 49],
                  backgroundColor: "rgba(84, 164, 255, .5)",
                  borderColor: "black",
                },
                {
                  label: "Last Week",
                  data: [38, 87, 12, 122, 37, 84, 87],
                  backgroundColor: "rgba(109, 136, 255, .5)",
                  borderColor: "black",
                },
              ],
            }}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              // legend: { display: false },
              // title: { display: false },

              scales: { yAxes: [{ ticks: { beginAtZero: true } }] },
            }}
          />
        </IncomeSummaryBar>
      </IncomeSummaryy>
    </div>
  );
};

export default IncomeSummary;
