import React from "react";
import styled from "styled-components";
import Analytics from "./Analytics";
import Cryptos from "./Cryptos";
import Patrimony from "./Patrimony";
import MainNews from "./MainNews";
import Navbar from "./Navbar";
import PizzaChart from "./PizzaChart";
import MyStocks from "./MyStocks";
import Candlestick from "./CandleStick";

export default function Dashboard() {
  return (
    <Section>
      <Navbar />
      <div className="grid">
        <div className="row__one">
          <Analytics />
          <Cryptos/>
        </div>
        <div className="row__two">
          <MyStocks />
          <Candlestick/>
          <PizzaChart />
        </div>
        <div className="row__three">
          <Patrimony/>
          <MainNews/>
          </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin-left: 18vw;
  padding: 2rem;
  height: 100%;
  .grid {
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 1rem;
    margin-top: 2rem;
    .row__one {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      height: 50%;
      gap: 1rem;
    }
    .row__two {
      padding-top: 12px;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1rem;
      height: 50%;
    }
    .row__three {
      padding-top: 12px;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
      height: 50%;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 475px) {
    margin-left: 0;
    .grid {
      .row__one,
      .row__two,
      .row__three {
        grid-template-columns: repeat(1, 1fr);
      }
    }
  }
`;
