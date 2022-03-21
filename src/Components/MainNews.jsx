import React from "react";
import styled from "styled-components";
import { BiWorld } from "react-icons/bi";
import {MdWaterDrop} from 'react-icons/md'
import { MdLocalHospital } from "react-icons/md";
import { cardStyle } from "./ReusableStyles";

export default function MainNews() {
  const news = [
    {
      icon: <BiWorld />,
      text: "Russia-Ukraine war: what we know on day 14 of the Russian invasion",
    },
    {
      icon: <MdWaterDrop />,
      text: "Ukraine conflict: Petrol at fresh record as oil and gas prices soar",
    },
    {
      icon: <MdLocalHospital />,
      text: "With high inflation, Raia Drogasil (RADL3) get out of BB-BI recommended team.",
    },
  ];
  return (
    <Section>
      <div className="title">
        <h2>Notícias do momento</h2>
      </div>
      <div className="news">
        {news.map((notice) => {
          return (
            <div className="notice">
              <div className="info">
                {notice.icon}
                <h4>{notice.text}</h4>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
const Section = styled.section`
  ${cardStyle};
  .title {
    h2 {
      color: #2DE975;
      font-family: "Alegreya Sans", cursive;
      letter-spacing: 0.2rem;
    }
  }
  .news {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;
    .notice {
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;
      .info {
        display: flex;
        gap: 1rem;
        align-items: center;
      }
      svg {
        font-size: 1.4rem;
      }
      &:nth-of-type(2) {
        border-top: 0.01rem solid #6c6e6e;
        border-bottom: 0.01rem solid #6c6e6e;
        padding: 0.8rem 0;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    svg {
      font-size: 2rem !important;
    }
  }
`;
