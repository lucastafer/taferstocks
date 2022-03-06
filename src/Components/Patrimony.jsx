import React from "react";
import styled from "styled-components";
import { AreaChart, Area, Tooltip, ResponsiveContainer } from "recharts";
import { cardStyle } from "./ReusableStyles";

const Valor = [
  {
    Valor: 7000,
  },
  {
    Valor: 6300,
  },
  {
    Valor: 6700,
  },
  {
    Valor: 6400,
  },
  {
    Valor: 6800,
  },
  {
    Valor: 6300,
  },
  {
    Valor: 5800,
  },
  {
    Valor: 5700,
  },
  {
    Valor: 6000,
  },
  {
    Valor: 6280,
  },
  {
    Valor: 6380,
  },
  {
    Valor: 6680,
  },
  {
    Valor: 6500,
  },
  {
    Valor: 6300,
  },
  {
    Valor: 5900,
  },
  {
    Valor: 5800,
  },
  {
    Valor: 6000,
  },
  {
    Valor: 5300,
  },
  {
    Valor: 5100,
  },
  {
    Valor: 5000,
  },
  {
    Valor: 5000,
  },
  {
    Valor: 5300,
  },
  {
    Valor: 6000,
  },
  {
    Valor: 6300,
  },
  {
    Valor: 6780,
  },
  {
    Valor: 6800,
  },
  {
    Valor: 7000,
  },
  {
    Valor: 7200,
  },
  {
    Valor:7380.80,
  },
];

export default function Patrimony() {
  return (
    <Section>
      <div className="top">
        <div className="info">
          <h5>Meu Patrimônio em Fevereiro</h5>
          <h1>R$ 7.380,80</h1>
          <div className="growth">
            <span>+5.44%</span>
          </div>
        </div>
      </div>
      <div className="chart">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={300}
            height={200}
            data={Valor}
            margin={{ top: 0, left: 0, right: 0, bottom: 0 }}
          >
            <Tooltip cursor={false} />
            <Area
              animationBegin={800}
              animationDuration={2000}
              type="monotone"
              dataKey="Valor"
              stroke="#2DE975"
              fill="#8068233e"
              strokeWidth={4}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

    </Section>
  );
}
const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-height: 15rem;
  ${cardStyle}
  padding: 2rem 0 0 0;
  .top {
    .info {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.2rem;
      h1 {
        font-size: 2rem;
      }
      .growth {
        background-color: #d7e41e1d;
        padding: 0.5rem;
        border-radius: 1rem;
        transition: 0.3s ease-in-out;
        &:hover {
          background-color: #2DE975;
          span {
            color: black;
          }
        }
        span {
          color: #2DE975;
        }
      }
    }
  }
  .chart {
    height: 70%;
    .recharts-default-tooltip {
      background-color: black !important;
      border-color: black !important;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
  }
`;
