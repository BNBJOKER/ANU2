import { FAQItem, RoadmapPhase } from "./types";

export const SOCIAL_LINKS = {
  twitter: "https://x.com/ANU200913",
  telegram: "https://t.me/Anu_Protocol"
};

export const FAQ_DATA: FAQItem[] = [
  // Mechanism
  {
    category: 'Mechanism',
    question: "Why is the total supply set to 200,913?",
    answer: "This is a tribute number. January 3, 2009, is the day the Bitcoin Genesis Block was mined. We use this epoch-making 'time code' as the initial supply of ANU, aiming to inherit Satoshi's decentralized will and build a truly sovereign and independent value network."
  },
  {
    category: 'Mechanism',
    question: "How is the 2.4% daily auto-burn executed?",
    answer: "The burn logic is driven by smart contract code without human intervention. The protocol automatically deducts <span class='text-anu-yellow font-bold'>2.4%</span> from the total supply daily and sends it to the black hole address. This extreme deflation means your percentage of ANU in the total pool passively increases over time."
  },
  {
    category: 'Mechanism',
    question: "How does the daily 5% LP burn affect the price?",
    answer: "Liquidity Pool (LP) burning is the core price support mechanism of Anu Protocol. By destroying <span class='text-anu-yellow font-bold'>5%</span> of the liquidity pool daily, it effectively increases the value density per coin. It not only suppresses selling pressure but also continuously raises the floor price, forming a 'deflation + price increase' dual-drive mode."
  },
  // Rewards
  {
    category: 'Rewards',
    question: "How do I get the 3% LP burn dividends?",
    answer: "ANU encourages long-term community builders. As long as your personal address holds <span class='text-anu-yellow font-bold'>≥ 21 ANU</span>, the system automatically recognizes your qualification. You will enjoy <span class='text-anu-yellow font-bold'>3%</span> value dividends from the LP burn in real-time.<br/><br/><span class='italic text-gray-400'>Note: 21 is a tribute to Bitcoin's 21 million total supply, and also the golden key to ANU wealth.</span>"
  },
  {
    category: 'Rewards',
    question: "What is the 'Ecosystem Early Bird Equity'?",
    answer: "ANU is not just a token; it is the mother coin of the entire Anu ecosystem. Future decentralized applications (DApps), cross-chain protocols, and infrastructure we plan will issue original stock dividends or airdrops to ANU holders. Holding ANU is equivalent to holding original shares of the entire protocol development."
  },
  {
    category: 'Rewards',
    question: "Are there any trading restrictions? (e.g., lock-ups or cooldowns)",
    answer: "There are no invisible limits. Anu Protocol follows the principle of <span class='text-anu-yellow font-bold'>'Absolute Freedom'</span>. No forced binding, no exit barriers. We believe true consensus is built on free will, allowing users to buy and sell freely according to their own financial needs."
  },
  // Security
  {
    category: 'Security',
    question: "How is contract security and decentralization ensured?",
    answer: "Anu Protocol's contract logic is set to be immutable from the start. All burn and dividend rules are automatically executed by code, realizing 'Code is Law'. No centralized institution can interfere with the operation of the protocol."
  },
  {
    category: 'Security',
    question: "What happens after deflation reaches 21,000?",
    answer: "When the total supply deflates to <span class='text-anu-yellow font-bold'>21,000</span>, ANU will reach its logical 'absolute scarcity state'. At that time, the protocol will enter a completely stable operation period, relying on extremely low total volume to support huge ecological application value, becoming one of the most precious value carriers in the decentralized world."
  }
];

export const ROADMAP_DATA: RoadmapPhase[] = [
  {
    phase: "Phase 1: Genesis",
    keyword: "200,913 Protocol Launch",
    description: "Activate self-burning contract, start community consensus building."
  },
  {
    phase: "Phase 2: Resonance",
    keyword: "Extreme Scarcity Manifests",
    description: "As supply drops rapidly, activate ecosystem early bird dividend plan."
  },
  {
    phase: "Phase 3: Order",
    keyword: "Ecosystem Infrastructure",
    description: "ANU becomes the core medium for cross-chain and value flow in the decentralized world."
  }
];