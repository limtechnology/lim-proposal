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
    const sector =   holding.metadata.sector;
    sectorMapData.set(
      sector,
      [...(sectorMapData.get(sector) || []), holding]
    );
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
    barChartData.push({ sector: sector.sector, amount: totalValue });
  }

  let nivoTreeData: any = { name: "sectors", children: []};
  for (let sector of sectorArray) {
    nivoTreeData.children.push({
      name: sector.sector,
      children: sector.holdings.map((holding: any) => ({
        name: holding.metadata.stock_display_name,
        value: holding.num_of_shares * holding.avg_price_per_share,
        ticker: holding.stock_id,
      })),
    })
  }

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
      <Section className="bg-neutral-50 flex flex-col">
        <div>
          <p className="mt-2 text-3xl block font-bold tracking-tight text-black sm:text-4xl">
            Section Allocation
          </p>
        </div>
        <div className="justify-content-between align-center w-[60vw] h-[38vh]">
          <BarChart data={barChartData} />
        </div>
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
