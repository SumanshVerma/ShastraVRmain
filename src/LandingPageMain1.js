import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
export const LandingPageMain1 = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <LandingPageMainRoot class>
      <BlackFlexColumn>
        <Untitled>
          <FlexColumn>
            <Element1>
              <FlexRow>
                <Image1
                  src={`https://file.rendit.io/n/fFplmBadtlXCntOK0bhW.png`}
                />
                <Image2
                  src={`https://file.rendit.io/n/rswpAgRwLzQVUrxIc4qK.svg`}
                />
                <Text1>HOME</Text1>
                <Image3
                  src={`https://file.rendit.io/n/rswpAgRwLzQVUrxIc4qK.svg`}
                />
                <Text2>PROJECTS</Text2>
                <Image4
                  src={`https://file.rendit.io/n/rswpAgRwLzQVUrxIc4qK.svg`}
                />
                <Asset
                  src={`https://file.rendit.io/n/Mjk8akG49CgUSS1gHsIr.png`}
                />
                <Image5
                  src={`https://file.rendit.io/n/rswpAgRwLzQVUrxIc4qK.svg`}
                />
                <Text3>SHASTRA NFT COLLECTION</Text3>
                <ArrowForward
                  src={`https://file.rendit.io/n/BWz2HOC2oAeV61yQQHYM.svg`}
                />
              </FlexRow>
              <Image6
                src={`https://file.rendit.io/n/9uoyHaNi3jTLs2T5ZfHJ.svg`}
              />
            </Element1>
            <Text4>
              WE BUILD
              <br />
              VIRTUAL REALITY
              <br />
              EXPERIENCES{" "}
            </Text4>
          </FlexColumn>
        </Untitled>
        <Component data-aos="fade-up" data-aos-delay="100">
          <FlexColumn1>
            <Icon1 src={`https://file.rendit.io/n/iThBkAY5vNw6JHX55SfG.svg`} />
            <Text5>VIRTUAL WORLD</Text5>
            <Paragraph margin={`0`}>
              3D virtual worlds focused on social connection
            </Paragraph>
          </FlexColumn1>
          <FlexColumn2>
            <Icon src={`https://file.rendit.io/n/v4HmuEaPXJeN2AHWqqgR.svg`} />
            <Text6>VR READY CONTENT</Text6>
            <Paragraph margin={`0px 0px 0px 1.81px`}>
              360 videos and high-end, fully immersive experiences.
            </Paragraph>
          </FlexColumn2>
          <FlexColumn3>
            <Icon2 src={`https://file.rendit.io/n/KvnNPjxjSZ9OSkmKD1iR.svg`} />
            <Text7>CUSTOM</Text7>
            <Paragraph2>
              Customised Virtual Reality experience and conent .
            </Paragraph2>
          </FlexColumn3>
        </Component>
        <Element2>
          <TimberwolfFlexColumn>
            <Text8 data-aos="fade-left" data-aos-delay="200">
              ShastraVR
              <Paragraph3>
                {" "}
                is a company focused on the development of Virtual Worlds and VR
                Ready Content. We specialize in the design and development of
                immersive VR experiences that are designed to change your
                perception of reality.
              </Paragraph3>
            </Text8>
          </TimberwolfFlexColumn>
          <Element3 data-aos="fade-right" data-aos-delay="200">
            <ABOUTUS
              src={`https://file.rendit.io/n/KG0TemEKyGrmBm2y2eD5.svg`}
            />
            <Image7 src={`https://file.rendit.io/n/fKGz0spUg0hJNcoehgic.svg`} />
          </Element3>
        </Element2>
        <S>
          <Image8 src={`https://file.rendit.io/n/NvCOIVtD1wZZhxzqOKiK.svg`} />
          <Element4 />
        </S>
        <Image9 src={`https://file.rendit.io/n/ucybTl61XrIYNQDEBXGF.svg`} />
        <FlexRow1>
          <Element5>
            <FlexRow2>
              {[
                {
                  childText: `Contact`
                },
                {
                  childText: `Join Us`
                },
                {
                  childText: `Feed`
                },
                {
                  childText: `Privacy`
                }
              ].map((data) => (
                <Text12>{data.childText}</Text12>
              ))}
            </FlexRow2>
          </Element5>
          <FacebookNegative
            src={`https://file.rendit.io/n/7bYXqWze0IYzgTjIXCRM.svg`}
          />
          <FacebookNegative
            src={`https://file.rendit.io/n/Ws7QeOdkEoC98DZSrNNN.svg`}
          />
          <FacebookNegative
            src={`https://file.rendit.io/n/Zof0Sl1vdr4aKOp26n70.svg`}
          />
          <LinkedInNegative
            src={`https://file.rendit.io/n/jQNJ3tatLlp4nwvcdQ4H.svg`}
          />
        </FlexRow1>
      </BlackFlexColumn>
    </LandingPageMainRoot>
  );
};

const Paragraph = styled.div`
  width: 368px;
  font-size: 20px;
  font-family: Montserrat;
  color: #ffffff;
  margin: ${(props) => props.margin};
`;
const Text12 = styled.div`
  font-size: 20px;
  font-family: Montserrat;
  color: #ffffff;
`;
const FacebookNegative = styled.img`
  width: 31px;
  height: 31px;
  margin: 0px 52px 0px 0px;
`;
const LandingPageMainRoot = styled.div`
  width: 1920px;
  background-color: #ffffff;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const BlackFlexColumn = styled.div`
  height: 4320px;
  background-color: #1a1a1a;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
const Untitled = styled.div`
  background-image: url("https://file.rendit.io/n/1Mq97WmFWktkk0ukhPTa.png");
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px 0px 122px 0px;
`;
const FlexColumn = styled.div`
  height: 1080px;
  background-image: url("https://file.rendit.io/n/SOOjz1VHAO7AeO8GBJoF.svg");
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 549px;
  align-items: flex-start;
`;
const Element1 = styled.div`
  align-self: stretch;
  height: 100px;
  position: relative;
  min-width: 1920px;
`;
const FlexRow = styled.div`
  width: 1840px;
  height: 76px;
  background-image: url("https://file.rendit.io/n/SwXsM0XvaIEBJoPZLeAk.svg");
  background-size: cover;
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
  padding: 0px 40px 23px 40px;
  background: rgba(0, 0, 0, 0.1);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(7px);
  -webkit-backdrop-filter: blur(7px);
  border-radius: none;
`;
const Image1 = styled.img`
  width: 124px;
  height: 53px;
  margin: 0px 70px 0px 0px;
`;
const Image2 = styled.img`
  width: 2px;
  height: 100px;
  align-self: flex-start;
  margin: 0px 114px 0px 0px;
`;
const Text1 = styled.div`
  width: 84px;
  height: 22px;
  font-size: 24px;
  font-family: Montserrat;
  color: #ffffff;
  margin: 0px 115px 16px 0px;
  &:hover {
    text-shadow: 0 0 5px #ffffff;
    cursor: default;
  }
`;
const Image3 = styled.img`
  width: 2px;
  height: 100px;
  align-self: flex-start;
  margin: 0px 115px 0px 0px;
`;
const Text2 = styled.div`
  width: 128px;
  height: 22px;
  font-size: 24px;
  font-family: Montserrat;
  color: #ffffff;
  margin: 0px 71px 17px 0px;
  &:hover {
    text-shadow: 0 0 5px #ffffff;
    cursor: default;
  }
`;
const Image4 = styled.img`
  width: 2px;
  height: 100px;
  align-self: flex-start;
  margin: 0px 59px 0px 0px;
`;
const Asset = styled.img`
  width: 78px;
  height: 26px;
  margin: 0px 58px 17px 0px;
`;
const Image5 = styled.img`
  width: 2px;
  height: 100px;
  align-self: flex-start;
  margin: 0px 84px 0px 0px;
`;
const Text3 = styled.div`
  width: 343px;
  height: 22px;
  font-size: 24px;
  font-family: Montserrat;
  color: #ffffff;
  margin: 0px 31px 17px 0px;
  &:hover {
    text-shadow: 0 0 5px #ffffff;
    cursor: default;
  }
`;
const ArrowForward = styled.img`
  width: 120.5px;
  height: 23.16px;
  margin: 0px 0px 10.2px 0px;
`;
const Image6 = styled.img`
  width: 1920px;
  height: 3px;
  position: absolute;
  top: 97px;
`;
const Text4 = styled.div`
  font-size: 96px;
  font-family: Montserrat;
  text-decoration: underline;
  color: #ffffff;
  margin: -50px 0px 0px 76px;
  white-space: pre-wrap;
`;
const Component = styled.div`
  display: flex;
  flex-direction: row;
  gap: 42px;
  justify-content: space-between;
  align-items: center;
  margin: 0px 0px 199px 0px;
`;
const FlexColumn1 = styled.div`
  border-color: #ffffff;
  border-style: solid;
  width: 369.19px;
  height: 249px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  align-items: flex-end;
  border-radius: 52px;
  padding: 34px 35px 34px 37.81px;
  border-width: 1px;
  background-color: #1e1e1e;
  &:hover {
    -webkit-filter: invert(1);
    filter: invert(1);
    cursor: default;
  }
`;
const Icon1 = styled.img`
  width: 76.07px;
  height: 73.33px;
  align-self: flex-start;
  margin: 0px 0px 36.67px 0px;
`;
const Text5 = styled.div`
  width: 368px;
  font-size: 36px;
  font-family: Montserrat;
  font-weight: 600;
  color: #ffffff;
  margin: 0px 0px 17px 0px;
`;
const FlexColumn2 = styled.div`
  border-color: #ffffff;
  border-style: solid;
  width: 388.81px;
  height: 249.25px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 52px;
  padding: 33.87px 18px 33.87px 35.19px;
  border-width: 1px;
  background-color:#1E1E1E;
  &:hover {
    -webkit-filter: invert(1);
  filter: invert(1);
  cursor: default;
`;
const Icon = styled.img`
  width: 77.38px;
  height: 73.96px;
  margin: 0px 0px 36.16px 0px;
`;
const Text6 = styled.div`
  width: 387px;
  font-size: 36px;
  font-family: Montserrat;
  font-weight: 600;
  color: #ffffff;
  align-self: flex-end;
  margin: 0px 0px 17px 0px;
`;
const FlexColumn3 = styled.div`
  border-color: #ffffff;
  border-style: solid;
  width: 368.76px;
  height: 250.52px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 52px;
  padding: 33.24px 13px 33.24px 60.24px;
  border-width: 1px;
  background-color:#1E1E1E;
  &:hover {
    -webkit-filter: invert(1);
  filter: invert(1);
  cursor: default;
`;
const Icon2 = styled.img`
  width: 76.12px;
  height: 73.69px;
  margin: 0px 0px 37.07px 0px;
`;
const Text7 = styled.div`
  width: 173px;
  font-size: 36px;
  font-family: Montserrat;
  font-weight: 600;
  color: #ffffff;
  margin: 0px 0px 17px 0.76px;
`;
const Paragraph2 = styled.div`
  width: 368px;
  font-size: 20px;
  font-family: Montserrat;
  color: #ffffff;
  align-self: flex-end;
`;
const Element2 = styled.div`
  height: 992px;
  position: relative;
  min-width: 1920px;
  margin: 0px 0px 1259px 0px;
`;
const TimberwolfFlexColumn = styled.div`
  height: 728px;
  background-color: #d9d9d9;
  display: flex;
  position: absolute;
  top: 264px;
  left: 670px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 37px 0px 38px;
`;
const Text8 = styled.div`
  height: 532px;
  font-size: 60px;
  font-family: Montserrat;
  font-weight: 600;
`;
const Paragraph3 = styled.div`
  font-size: 60px;
  font-family: Montserrat;
  font-weight: 500;
  display: contents;
  white-space: pre-wrap;
`;
const Element3 = styled.div`
  border-color: #d9d9d9;
  border-style: solid;
  width: 836px;
  height: 416px;
  position: absolute;
  border-width: 1px;
`;
const ABOUTUS = styled.img`
  width: 548px;
  height: 285px;
  position: absolute;
  top: 48px;
  left: 75px;
`;
const Image7 = styled.img`
  width: 106.89px;
  height: 106.89px;
  position: absolute;
  top: 229.5px;
  left: 358.61px;
`;
const S = styled.div`
  width: 68px;
  height: 74px;
  align-self: flex-end;
  position: relative;
  margin: 0px 233px 112.5px 0px;
`;
const Image8 = styled.img`
  width: 22.09px;
  height: 32.39px;
  position: absolute;
  top: 20.15px;
  left: 23.25px;
`;
const Element4 = styled.div`
  border-color: #ffffff;
  border-style: solid;
  width: 65px;
  height: 71px;
  position: absolute;
  top: -1.5px;
  left: -1.5px;
  border-width: 3px;
`;
const Image9 = styled.img`
  width: 1460px;
  height: 1px;
  margin: 0px 0px 62.5px 0px;
`;
const FlexRow1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 0px 230px;
`;
const Element5 = styled.div`
  align-self: stretch;
  width: 527px;
  height: 38px;
  position: relative;
  flex-grow: 1;
  margin: 0px 653px 0px 0px;
`;
const FlexRow2 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 84px;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  top: 4px;
`;
const LinkedInNegative = styled.img`
  width: 31px;
  height: 31px;
`;
