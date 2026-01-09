import React from 'react';
import { FAQItem, RoadmapPhase } from './types';

export const SOCIAL_LINKS = {
  twitter: "https://x.com/ANU200913",
  telegram: "https://t.me/Anu_Protocol"
};

export const ROADMAP_DATA: RoadmapPhase[] = [
  {
    phase: "Phase I: GENESIS",
    title: "Protocol Activation",
    description: "200,913 Protocol Launch. Activation of the Auto-Burn Contract. Establishing the initial community consensus."
  },
  {
    phase: "Phase II: RESONANCE",
    title: "Extreme Scarcity",
    description: "As supply rapidly decreases, the 'Early Bird Equity' dividend system is activated for holders."
  },
  {
    phase: "Phase III: ORDER",
    title: "Infrastructure",
    description: "ANU becomes the core medium for cross-chain value transfer and the foundation of the sovereign ecosystem."
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    category: "Mechanism & Logic",
    question: "Why is the total supply 200,913?",
    answer: <>
      It is a tribute. On <span className="font-bold text-anu-darkGold">January 3, 2009</span>, the Genesis Block of Bitcoin was mined. We use this time-code as our initial supply to honor the will of decentralization.
    </>
  },
  {
    category: "Mechanism & Logic",
    question: "How does the 2.4% Daily Auto-Burn work?",
    answer: <>
      The burn is hard-coded into the smart contract. Every day, <span className="font-bold text-anu-darkGold">2.4%</span> of the total supply is mathematically removed. This is a physical reduction in supply, increasing the value density of every remaining token.
    </>
  },
  {
    category: "Mechanism & Logic",
    question: "How does the 5% Liquidity Burn affect price?",
    answer: <>
      By burning <span className="font-bold text-anu-darkGold">5%</span> of the Liquidity Pool daily, we permanently raise the price floor. It builds a mathematical wall against downside volatility.
    </>
  },
  {
    category: "Rewards",
    question: "How do I get the 3% Dividend?",
    answer: <>
      Hold <span className="font-bold text-anu-darkGold">≥ 21 ANU</span>. You are not just a holder; you are a node. The protocol automatically routes 3% of the burn value to eligible wallets.
    </>
  },
  {
    category: "Rewards",
    question: "What is 'Early Bird Equity'?",
    answer: <>
      ANU is the governance mother-token. Holders receive "original shares" (airdrops/whitelist) for all future DApps and infrastructure built on the Anu Protocol.
    </>
  },
  {
    category: "Security",
    question: "Is the contract safe?",
    answer: <>
      <span className="font-bold text-anu-darkGold">Code is Law.</span> The contract is immutable. No central authority can freeze assets or alter the burn rate.
    </>
  },
  {
    category: "Security",
    question: "What happens at 21,000 supply?",
    answer: <>
      The burn stops. The protocol enters the "Absolute Scarcity" era, becoming a stable, ultra-scarce store of value for the ecosystem.
    </>
  }
];
