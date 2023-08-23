import FunnelChart from "./FunnelChart";

const AssetAllocation = () => {
  return (
    <div className="w-full px-20">
      <h3 className="text-3xl">Asset Allocation</h3>
      <p className="mt-12 text-lg">
        The overall portfolio lacks a cohesive plan. This is not surprising or
        anyone’s fault as it is a collection of securities as opposed to a
        carefully crafted portfolio. The allocation is a byproduct of the
        gathering of assets in one account and not strategic. Most importantly,
        the portfolio does not consider the most important factor in achieving
        investment goals – understanding risk versus returns.
      </p>
      <div className="h-[40rem] w-full mt-20">
        <FunnelChart
          data={[
            {
              id: "US Equities",
              label: "US Equities",
              value: 1192899,
              color: "hsl(6, 70%, 50%)",
            },
            {
                id: "Fixed Income",
                label: "Fixed Income",
                value: 625641,
                color: "hsl(329, 70%, 50%)",
              },
            {
              id: "International Equities",
              label: "International Equities",
              value: 17271,
              color: "hsl(6, 70%, 50%)",
            },
            {
                id: "Cash",
                label: "Cash",
                value: 4510,
                color: "hsl(161, 70%, 50%)",
              },
            {
              id: "Commodities",
              label: "Commodities",
              value: 0,
              color: "hsl(6, 70%, 50%)",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default AssetAllocation;
