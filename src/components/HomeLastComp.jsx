import React from "react";
import { NavLink } from "react-router-dom";
import Calling from "../assets/icons/Calling.png";
import Locations from "../assets/icons/Location.png";
import iconblue from "../assets/icons/iconblue.png";
import Call from "../assets/icons/Call.png";
import Loc from "../assets/icons/Loc.png";
import {
  Area,
  Container,
  FirstButton,
  FirstLeft,
  FirstOne,
  FirstRight,
  FirstRightButtom,
  FirstRightItem,
  FirstRightTop,
  FirstText,
  FirstTitle,
  FirstTwo,
  Img,
  Imgs,
  Input,
  IntupTitle,
  LastRightWrapper,
  LastText,
  LastTextWrapper,
  Location,
  Num,
  Phone,
  PhoneWrapper,
  RightButton,
  RightInputWrapper,
  SecondLastWrapper,
  SecondLeft,
  SecondLeftText,
  SecondLeftTitle,
  SecondOne,
  SecondRight,
  SecondTwo,
  ThirdBigCon,
  ThirdConCenter,
  ThirdContainer,
  ThirdImg,
  ThirdMiddleText,
  ThirdMiddleTitle,
  WrapperFirst,
  WrapperSecond,
  WrapperThird,
  Border
} from "./HomeLastCompStyle";

const HomeLastComp = () => {
  return (
    <Container>
      <WrapperFirst>
        <FirstOne>
          <FirstLeft>
            <FirstTitle>30+ hamkorlar</FirstTitle>
            <FirstText>
              Hozirgi kunga kelib, butun dunyo boʻyicha 30 dan ortiq hamkorlar
              bilan ish yuritib kelmoqdamiz.
            </FirstText>
            <FirstButton>Barcha hamkorlar</FirstButton>
          </FirstLeft>
        </FirstOne>
        <FirstTwo>
          <FirstRight>
            <FirstRightTop>
              <FirstRightItem></FirstRightItem>
              <FirstRightItem></FirstRightItem>
              <FirstRightItem></FirstRightItem>
              <FirstRightItem></FirstRightItem>
            </FirstRightTop>
            <FirstRightButtom>
              <FirstRightItem></FirstRightItem>
              <FirstRightItem></FirstRightItem>
              <FirstRightItem></FirstRightItem>
              <FirstRightItem></FirstRightItem>
            </FirstRightButtom>
          </FirstRight>
        </FirstTwo>
      </WrapperFirst>
      <WrapperSecond>
        <SecondOne>
          <SecondLeft>
            <SecondLeftTitle>
              Ariza qoldiring va biz siz bilan bogʻlanamiz
            </SecondLeftTitle>
            <SecondLeftText>
              Hamkorlik boʻyicha takliflaringiz yoki mahsulotlarni ulgurji
              koʻrinishda sotib olish boʻyicha savollaringiz boʻlsa, ariza
              qoldiring va biz siz bilan bogʻlanib, barcha savollaringizga javob
              beramiz.
            </SecondLeftText>
            <SecondLastWrapper>
              <PhoneWrapper>
                <Img src={Calling} />
                <Phone>+998 71 208 67 84</Phone>
              </PhoneWrapper>
              <PhoneWrapper>
                <Img src={Locations} />
                <Location>
                  Olmazor tumani, Kichik halqa yoʻli koʻchasi, 5-A
                </Location>
              </PhoneWrapper>
            </SecondLastWrapper>
          </SecondLeft>
        </SecondOne>
        <SecondTwo>
          <SecondRight>
            <RightInputWrapper>
              <IntupTitle>Ism sharifingiz</IntupTitle>
              <Input />
            </RightInputWrapper>
            <RightInputWrapper>
              <IntupTitle>Telefon raqamingiz</IntupTitle>
              <Input />
            </RightInputWrapper>
            <RightInputWrapper>
              <IntupTitle>Sizni nima qiziqtiryapti</IntupTitle>
              <Area />
            </RightInputWrapper>
            <RightInputWrapper>
              <RightButton>Yuborish</RightButton>
            </RightInputWrapper>
          </SecondRight>
        </SecondTwo>
      </WrapperSecond>
      <WrapperThird>
        <ThirdContainer>
          <ThirdBigCon one>
            <ThirdImg src={iconblue} />
            <Num>+998 71 208 67 84</Num>
          </ThirdBigCon>
          <ThirdConCenter>
            <ThirdMiddleTitle>Kompaniya haqida</ThirdMiddleTitle>
            <NavLink
              to="/categories"
              className="nav"
              activeClassName="nav-active"
            >
              <ThirdMiddleText>Maxsulotlar katalogi</ThirdMiddleText>
            </NavLink>
            <NavLink
              to="/partners"
              className="nav"
              activeClassName="nav-active"
            >
              <ThirdMiddleText>Hamkorlar</ThirdMiddleText>
            </NavLink>
          </ThirdConCenter>
          <ThirdBigCon>
            <ThirdMiddleTitle last>Biz bilan bogʻlaning</ThirdMiddleTitle>
            <LastRightWrapper>
              <Imgs src={Call} />
              <ThirdMiddleText one>+998 71 208 67 84</ThirdMiddleText>
            </LastRightWrapper>
            <LastRightWrapper two>
              <Imgs src={Loc} />
              <ThirdMiddleText>
                Olmazor tumani, Kichik halqa yoʻli koʻchasi, 5-A
              </ThirdMiddleText>
            </LastRightWrapper>
          </ThirdBigCon>
        </ThirdContainer>
      </WrapperThird>
      <LastTextWrapper>
        <Border />
        <LastText>
          © 2021 Akpharm Distribution. Barcha huquqlar himoyalangan.
        </LastText>
      </LastTextWrapper>
    </Container>
  );
};

export default HomeLastComp;
