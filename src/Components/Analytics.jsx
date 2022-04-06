import React from "react";
import styled from "styled-components";
import ibovLogo from "../Assets/b3-logo.png";
import dolarLogo from "../Assets/dolar.png";
import euroLogo from "../Assets/euro-logo.png"
import goldLogo from "../Assets/gold.png"
import { cardStyle } from "./ReusableStyles";

export default function Analytics() {
  return (
    <Section>
      <div className="analytic">
        <div className="logo">
          <img src={ibovLogo} alt="Connection failed." />
        </div>
        <div className="content">
          <h5>IBOV</h5>
          <h2>114.474</h2>
        </div>
      </div>

      <div className="analytic">
        <div className="logo">
          <img src={dolarLogo} alt="Connection failed." />
        </div>
        <div className="content">
          <h5>US DÓLAR</h5>
          <h2>R$ 5,06</h2>
        </div>
      </div>

      <div className="analytic">
        <div className="logo">
          <img src={euroLogo} alt="Connection failed." />
        </div>
        <div className="content">
          <h5>EURO</h5>
          <h2>R$ 5,53</h2>
        </div>
      </div>

      <div className="analytic">
        <div className="logo">
          <img src={goldLogo} alt="Connection failed." />
        </div>
        <div className="content">
          <h5>GOLD</h5>
          <h2>R$ 316,67</h2>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  .analytic {
    ${cardStyle};
    padding: 1rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 1rem;
    transition: 0.3s ease-in-out;
    &:hover {
      background-color: #2de975;
      color: #000;
      svg {
        color: #fff;
      }
    }
    .logo {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .logo img {
      height: 50px;
      width: 50px;
      border-radius: 50%;
    }
  }
  .content {
    h2 {
      font-size: 13px;
    }
  }
`;
