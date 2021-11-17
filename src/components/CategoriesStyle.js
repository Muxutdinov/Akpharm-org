import styled from "styled-components";
import main from '../assets/imges/main.png'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* height: 767px; */
  /* width: 1440px; */
  width: 100%;
  background: linear-gradient(90deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.61))
      center center / cover no-repeat,
    url(${main}) rgb(8, 20, 32);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;
