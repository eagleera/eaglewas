import React, { useEffect } from "react";
import styled from "styled-components";
import TypeIt from "typeit";
import GitHubButton from 'react-github-btn';
import { TwitterFollowButton } from 'react-twitter-embed';

const HeroSection = () => {
  useEffect(() => {
    new TypeIt(".type-effect", {
      cursor: false
    }).go();
    new TypeIt(".type-effect-description", {
      lifeLike: true,
      startDelay: 3000,
      speed: 40
    })
      .pause(700)
      .type(" (actually I like frontend more than backend).")
      .break()
      .pause(1000)
      .type("\n Sadly I suck at designing")
      .break()
      .pause(900)
      .type("\n I&apos;m also a big Pokémon fan (and I love beer).")
      .pause(1300)
      .delete(11)
      .type("REALLY LOVE BEER 🍺)")
      .go();
  });
  return (
    <HeroSectionSt>
      <div className="flex overflow-x-hidden">
        <div className="w-50 ph4 bg-white z-1">
          <Title>
            <span className="fs12">Hi!</span>
            <br />
            Daniel here.
          </Title>
          <Description>
            I&apos;m an IT student from México and a full-stack dev
            {/* <br />
            Sadly I suck at designing templates :(
            <br />
            I&apos;m also a big Pokémon fan (and I love beer). */}
          </Description>
        </div>
        <SlidingDiagonals>
          <div className="bg" />
          <div className="bg bg2" />
          <div className="bg bg3" />
          <div className="content">
            <TwitterFollowButton
              href="https://twitter.com/Eagleera?ref_src=twsrc%5Etfw"
              screenName="Eagleera"
              options={{size: 'large', showCount: false}}
            >
              Follow @Eagleera
            </TwitterFollowButton>
            <GitHubButton
              href="https://github.com/eagleera"
              data-size="large" 
              aria-label="Follow @eagleera on GitHub"
            > 
              Follow @eagleera
            </GitHubButton>
          </div>
        </SlidingDiagonals>
      </div>
    </HeroSectionSt>
  );
};

export default HeroSection;

// STYLES

const HeroSectionSt = styled.div.attrs(() => ({
  className: "container"
}))`
  height: calc(100vh - 4rem);
`;

const Title = styled.h1.attrs(() => ({
  className: "mb4 type-effect"
}))`
  font-size: 7rem;
  letter-spacing: 0.1rem;
  margin-top: 3rem;
`;

const Description = styled.h1.attrs(() => ({
  className: "mb4 type-effect-description"
}))`
  font-size: 1.5rem;
  letter-spacing: 0.1rem;
  line-height: 2.2rem;
`;

const SlidingDiagonals = styled.div.attrs(() => ({
  className: "w-50 bg-white relative"
}))`
  height: -webkit-fill-available;
  .content {
    z-index: 1;
    position: relative;
    height: -webkit-fill-available;
    display: flex;
    justify-content: space-evenly;
    align-items: flex-end;
    padding-bottom: 40px;
  }
`;
