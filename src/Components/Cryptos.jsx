import React from "react";
import styled from "styled-components";
import bitcoinLogo from "../Assets/bitcoin-logo.png";
import ethereumLogo from "../Assets/ethereum-logo.png";
import solanaLogo from "../Assets/solana-logo.png";
import { cardStyle } from "./ReusableStyles";

export default function Cryptos() {
  return (
    <Section>
      <div className="analytic">
        <div className="logo">
          <img src={bitcoinLogo} />
        </div>
        <div className="content">
          <h5>BITCOIN</h5>
          <h2>R$ 198.766,75</h2>
        </div>
      </div>

      <div className="analytic">
        <div className="logo">
          <img src={ethereumLogo} />
        </div>
        <div className="content">
          <h5>ETHEREUM</h5>
          <h2>R$ 13.441,46</h2>
        </div>
      </div>

      <div className="analytic">
        <div className="logo">
          <img src={solanaLogo} />
        </div>
        <div className="content">
          <h5>SOLANA</h5>
          <h2>R$ 452,83</h2>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  .analytic {
    ${cardStyle};
    padding: 1rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 1rem;
    transition: 0.5s ease-in-out;
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
}
`;
