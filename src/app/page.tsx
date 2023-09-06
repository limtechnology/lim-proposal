"use client";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";
import Section from "@/components/Section";
import AnimatedLogo from "@/components/AnimatedLogo";
import LearText from "@/components/LearText";
import Purpose from "@/components/Purpose";
import BarChart from "@/components/BarChart";
import TreeMap from "@/components/TreeMap";
import PieChart from "@/components/PieChart";
import { a } from "react-spring";

export default function Page() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const rawData = {
    document_id: "doc_xxx",
    created_at: "2023-08-01",
    data: {
      accounts_in_total: {},
      holdings: [
        {
          stock_id: "AAPL",
          num_of_shares: 1000,
          avg_price_per_share: 100,
          metadata: {
            beta: 0.8,
            sector: "Technology",
            stock_display_name: "Apple Inc.",
          },
        },
        {
          stock_id: "SBUX",
          num_of_shares: 750,
          avg_price_per_share: 2000,
          metadata: {
            beta: 1.1,
            sector: "Consumer Cyclical",
            stock_display_name: "Starbucks",
          },
        },
        {
          stock_id: "MSFT",
          num_of_shares: 500,
          avg_price_per_share: 300,
          metadata: {
            beta: 0.9,
            sector: "Technology",
            stock_display_name: "Microsoft Corporation",
          },
        },
        {
          stock_id: "AMZN",
          num_of_shares: 300,
          avg_price_per_share: 3500,
          metadata: {
            beta: 1.2,
            sector: "Technology",
            stock_display_name: "Amazon.com, Inc.",
          },
        },
        {
          stock_id: "TSLA",
          num_of_shares: 1000,
          avg_price_per_share: 700,
          metadata: {
            beta: 1.5,
            sector: "Automotive",
            stock_display_name: "Tesla, Inc.",
          },
        },
      ],
    },
  };

  let sectorMapData = new Map();
  for (let holding of rawData.data.holdings) {
    const sector = holding.metadata.sector;
    sectorMapData.set(sector, [...(sectorMapData.get(sector) || []), holding]);
  }

  const sectorArray = Array.from(sectorMapData, ([name, value]) => ({
    sector: name,
    holdings: value,
  }));

  let barChartData = [];
  for (let sector of sectorArray) {
    let totalValue = 0;
    for (let holding of sector.holdings) {
      totalValue += holding.num_of_shares * holding.avg_price_per_share;
    }
    barChartData.push({
      sector: sector.sector,
      sp: totalValue / 2,
      amount: totalValue,
    });
  }

  let nivoTreeData: any = { name: "sectors", children: [] };
  for (let sector of sectorArray) {
    nivoTreeData.children.push({
      name: sector.sector,
      children: sector.holdings.map((holding: any) => ({
        name: holding.metadata.stock_display_name,
        value: holding.num_of_shares * holding.avg_price_per_share,
        ticker: holding.stock_id,
      })),
    });
  }

  const pieChartData: any = [
    { id: "equities", label: "US Equities", value: "1023806" },
    { id: "vti", label: "VTI", value: "528948" },
    { id: "voo", label: "VOO", value: "340039" },
    { id: "cash", label: "Cash", value: "184657" },
    { id: "international", label: "International", value: "145381" },
    { id: "fixed", label: "Fixed Income", value: "93342" },
    { id: "commodities", label: "Commodities", value: "0" },
  ];

  return (
    <div className="font-mono">
      <Section className="fill-white bg-[#383839]">
        <div>
          <AnimatedLogo />
          <LearText />
        </div>
      </Section>
      <Section className="background-fancy text-black relative">
        <Purpose />
      </Section>
      <Section className="background-pie flex flex-col">
        <div>
          <p className="mt-2 text-3xl block font-bold tracking-tight text-black sm:text-4xl">
            Total Asset Allocation
          </p>
        </div>
        <div className="flex justify-between mt-32 w-full max-w-[960px] rounded p-10">
          <div>
            <p className="max-w-[460px] text-xl">
              Your investment portfolio comprises several key assets: US
              Equities with a value of $1,023,806, VTI at $528,948, VOO at
              $340,039, $184,657 in cash, $145,381 in international holdings,
              $93,342 in fixed income, and no current investments in
              commodities. These diversified accounts represent your financial
              assets, each serving a distinct purpose in your investment
              strategy. Regularly assessing and managing these holdings in line
              with your financial objectives is crucial.
            </p>
          </div>
          <div className="justify-content-right align-items-right w-[60vw] h-[60vh] max-w-[500px] max-h-[500px]">
            <PieChart data={pieChartData} />
          </div>
        </div>
      </Section>
      <Section className="background-texture flex flex-col">
        <div>
          <p className="mt-2 text-3xl block font-bold tracking-tight text-white sm:text-4xl">
            Sector Allocation
          </p>
        </div>
        <div className="justify-content-between align-center w-[60vw] h-[38vh]">
          <BarChart data={barChartData} />
        </div>
        <p className="text-white max-w-4xl text-lg">
        {"In your investment portfolio, we, at LIM, have strategically allocated funds to three key sectors. As per our investment decisions, your investments in the 'Technology' sector currently stand at $1,300,000, significantly exceeding the standard S&P sector allocation of $650,000. Likewise, in the 'Consumer Cyclical' sector, we've directed $1,500,000, surpassing the S&P's $750,000 allocation. Lastly, in the 'Automotive' sector, we've invested $700,000, diverging from the S&P's typical allocation of $350,000. These allocations reflect our distinct investment strategy, tailored to your financial objectives, which may differ from the standard S&P sector allocations."}
        </p>
      </Section>
      <Section className=" bg-[#f2eee8] flex flex-col">
        <div>
          <p className="mt-2 text-3xl block font-bold tracking-tight text-black sm:text-4xl mb-10">
            Stock Analysis
          </p>
        </div>
        <div className="justify-content-between align-center w-[68vw] h-[68vh]">
          <TreeMap data={nivoTreeData} />
        </div>
      </Section>
      <div className="fixed bottom-0 left-0 bg-black py-2 px-6">
        <p className="uppercase text-white">Confidential</p>
      </div>
      <motion.div
        className="fixed top bg-[#7b7b7e] h-3 top-0 w-full"
        style={{ scaleX }}
      />
    </div>
  );
}
