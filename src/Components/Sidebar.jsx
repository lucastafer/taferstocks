import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Typical from "react-typical";
import { MdSpaceDashboard } from "react-icons/md";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { AiOutlineStock } from "react-icons/ai";
import { BsNewspaper } from "react-icons/bs";
import { MdOutlineHelp } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";

export default function Sidebar() {
  const [currentLink, setCurrentLink] = useState();

  return (
    <>
      <Section>
        <div className="top">
          <div className="brand">
            <span className="primary-text">
              {" "}
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "",
                    200,
                    "RocketBots 🚀",
                    1000,
                    "",
                    200,
                    "RocketBots 💰",
                    1000,
                    "",
                    200,
                    "RocketBots 💵",
                    1000,
                    "",
                    200,
                    "RocketBots 💶",
                    1000,
                    "",
                    200,
                    "RocketBots 💴",
                    1000,
                    "",
                    200,
                    "RocketBots 🪙",
                    1000,
                  ]}
                />
              </h1>
            </span>{" "}
          </div>

          <div className="toggle"></div>
          <div className="links">
            <ul>
              <li
                onClick={() => setCurrentLink(1)}
                className={currentLink === 1 ? "active" : ""}
              >
                <a href="#">
                  <MdSpaceDashboard />
                  <span>Dashboard</span>
                </a>
              </li>
              <li
                onClick={() => setCurrentLink(2)}
                className={currentLink === 2 ? "active" : ""}
              >
                <a href="#">
                  <FaRegMoneyBillAlt />
                  <span>Meus Ativos</span>
                </a>
              </li>{" "}
              <li
                onClick={() => setCurrentLink(3)}
                className={currentLink === 3 ? "active" : ""}
              >
                <a href="#">
                  <AiOutlineStock />
                  <span>Mercado</span>
                </a>
              </li>{" "}
              <li
                onClick={() => setCurrentLink(4)}
                className={currentLink === 4 ? "active" : ""}
              >
                <a href="#">
                  <BsNewspaper />
                  <span>Notícias</span>
                </a>
              </li>{" "}
              <li
                onClick={() => setCurrentLink(5)}
                className={currentLink === 5 ? "active" : ""}
              >
                <a href="#">
                  <MdOutlineHelp />
                  <span>Ajuda</span>
                </a>
              </li>
              <li
                onClick={() => setCurrentLink(6)}
                className={currentLink === 6 ? "active" : ""}
              >
                <a href="#">
                  <IoSettings />
                  <span>Configurações</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="logout">
          <a href="#">
            <FiLogOut />
            <span className="logout">Logout</span>
          </a>
        </div>
      </Section>
    </>
  );
}

const Section = styled.section`
  position: fixed;
  left: 0;
  background-color: #212121;
  height: 100vh;
  width: 18vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;
  gap: 2rem;
  .primary-text h1 {
    font-size: 40px;
  }
  .top {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
    .toggle {
      display: none;
    }
    .brand {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      svg {
        color: #2de975;
        font-size: 2rem;
      }
      span {
        font-size: 2rem;
        color: #2de975;
        font-family: "Alegreya Sans", cursive;
      }
    }
    .links {
      display: flex;
      justify-content: center;
      ul {
        list-style-type: none;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        li {
          padding: 0.6rem 1rem;
          border-radius: 0.6rem;
          &:hover {
            background-color: #2de975;
            transition: 0.1s ease-in;
            a {
              color: black;
            }
          }
          a {
            text-decoration: none;
            display: flex;
            gap: 1rem;
            color: white;
          }
        }
        .active {
          background-color: #2de975;
          a {
            color: #000;
          }
        }
      }
    }
  }
  .logout {
    padding: 0.3rem 1rem;
    border-radius: 0.6rem;
    &:hover {
      background-color: #da0037;
      transition: 0.1s ease-in;
    }
    a {
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      color: white;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    position: initial;
    width: 100%;
    height: max-content;
    padding: 1rem;
    .top {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: 0 1rem;
      .toggle {
        display: block;
        color: white;
        z-index: 99;
        svg {
          font-size: 1.4rem;
        }
      }
      .brand {
        gap: 1rem;
        justify-content: flex-start;
      }
    }
    .top > .links,
    .logout {
      display: none;
    }
  }
`;