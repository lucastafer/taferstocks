import React from "react";
import styled from "styled-components";
import Chart from "react-apexcharts";
import { cardStyle } from "./ReusableStyles";

export default function PizzaChart() {
  return (
    <Section>
      <div className="title">
        <h2>Wallet Distribution</h2>
      </div>
      <div className="piechart-div">
        <Chart
          type="donut"
          width={400}
          height={400}
          series={[2848.00, 1400.80, 1132.00, 2000.00]}
          options={{
            labels: ["Ações", "FIIs", "Criptomoedas", "CDB"],
            chart:{
              foreColor: '#fff',
            },
            tooltip: {
              y: {
                formatter: (val) => {
                  return `R$ ${val}`;
                },
              },
            },
            title: {
              text: "",
            },
          }}
        ></Chart>
      </div>
    </Section>
  );
}

const Section = styled.section`
  ${cardStyle};
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .title {
    h2 {
      color: #2de975;
      font-family: "Alegreya Sans", cursive;
      letter-spacing: 0.2rem;
    }
  }
  .piechart-div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 4rem;
  }
}
`;
