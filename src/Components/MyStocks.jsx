import React from "react";
import styled from "styled-components";
import { HiArrowNarrowRight } from "react-icons/hi";
import valeLogo from "../Assets/vale-logo.png";
import cvcLogo from "../Assets/cvc-logo.png";
import petrobrasLogo from "../Assets/petrobras-logo.png";
import oiLogo from "../Assets/oi-logo.png";
import petzLogo from "../Assets/petz-logo.png";
import { cardStyle } from "./ReusableStyles";

export default function MyStocks() {
  const transactions = [
    {
      image: valeLogo,
      abrev: "VALE3 - ON",
      name: "Vale S.A.",
      amount: "+2,28%",
      value: "R$ 101,97 ",
    },
    {
      image: cvcLogo,
      abrev: "CVCB3 - ON",
      name: "CVC",
      amount: "-6,67%",
      value: "R$ 11,06 ",

    },
    {
      image: petrobrasLogo,
      abrev: "PETR3 - ON",
      name: "Petrobrás",
      amount: "-0,67%",
      value: "R$ 36,97 ",

    },

    {
      image: petzLogo,
      abrev: "PETZ3 - ON",
      name: "Petz",
      amount: "-4.16%",
      value: "R$ 17,52 ",

    },
    {
      image: oiLogo,
      abrev: "OIBR3 - ON",
      name: "Oi",
      amount: "-5,62%",
      value: "R$ 0,84",

    },
  ];

  return (
    <Section>
      <div className="title">
        <h2>Meus Ativos</h2>
      </div>
      <div className="transactions">
        {transactions.map((transaction) => {
          return (
            <div className="transaction">
              <div className="transaction__title" >
                <div className="transaction__title__image">
                  <img src={transaction.image} alt="" />
                </div>
                <div className="transaction__title__details" onClick={console.log("Fui clicado!")}>
                  <h3>{transaction.abrev}</h3>
                  <h5>{transaction.name}</h5>
                </div>
              </div>
              <div
                className={
                  transaction.amount.indexOf("-") != -1
                    ? "transaction__amount__loss"
                    : "transaction__amount__profit"
                }
              >
                <span>{transaction.amount}</span>
              </div>

              <div
                className={
                  transaction.amount.indexOf("-") != -1
                    ? "transaction__amount__loss__value"
                    : "transaction__amount__profit__value"
                }
              >
                <span>{transaction.value}</span>
              </div>
            </div>
          );
        })}
      </div>
      <a className="view" href="#">
        View all <HiArrowNarrowRight />
      </a>
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
  .transactions {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;
    .transaction {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      &__title {
        display: flex;
        gap: 0.6rem;
        &__image {
          img {
            height: 2.4rem;
            border-radius: 3rem;
          }
        }
        &__details {
        }
      }
      &__amount__profit {
        background-color: #d7e41e1d;
        padding: 0.2rem 0.5rem;
        width: 4.4rem;
        border-radius: 1rem;
        text-align: center;
        transition: 0.3s ease-in-out;
        &:hover {
          background-color: #2de975;
          span {
            color: #000;
          }
        }
        span {
          color: #2de975;
        }
      }
      &__amount__loss {
        background-color: #d7e41e1d;
        padding: 0.2rem 0.5rem;
        width: 4.4rem;
        border-radius: 1rem;
        text-align: center;
        transition: 0.3s ease-in-out;
        &:hover {
          background-color: #ff3434d7;
          span {
            color: #000;
          }
        }
        span {
          color: #ff3434d7;
        }
      }
      &__amount__profit__value {
        background-color: #d7e41e1d;
        padding: 0.2rem 0.5rem;
        width: 5.8rem;
        border-radius: 1rem;
        text-align: center;
        transition: 0.3s ease-in-out;
        &:hover {
          background-color: #2de975;
          span {
            color: #000;
          }
        }
        span {
          color: #2de975;
        }
      }
      &__amount__loss__value {
        background-color: #d7e41e1d;
        padding: 0.2rem 0.5rem;
        width: 5.8rem;
        border-radius: 1rem;
        text-align: center;
        transition: 0.3s ease-in-out;
        &:hover {
          background-color: #ff3434d7;
          span {
            color: #000;
          }
        }
        span {
          color: #ff3434d7;
        }
      }
    }
  }
  .view {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    text-decoration: none;
    color: #2de975;
    font-weight: bold;
    margin-top: 1rem;
    gap: 0.5rem;
    svg {
      transition: 0.3s ease-in-out;
      font-size: 1.4rem;
    }
    &:hover {
      svg {
        transform: translateX(0.5rem);
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 475px) {
    .transactions {
      .transaction {
        flex-direction: column;
        align-items: center;
        gap: 1rem;
      }
    }
  }
`;
