import PieChart from "./PieChart";

const FixedIncomeHoldings = () => {
  return (
    <div className="w-full px-20 mt-40">
      <h3 className="text-3xl">Fixed Income Holdings</h3>
      <p className="mt-12 text-lg">
      The details on the mutual funds comprising the fixed income portfolio are available in the presentation.
The following is a summary of the sector allocation of the combined funds
      </p>
      <div className="h-[40rem] w-full mt-20">
        <PieChart
          data={[
            {
              id: "Government",
              label: "Government",
              value: 86902,
              color: "hsl(6, 70%, 50%)",
            },
            {
              id: "Corporate",
              label: "Corporate",
              value: 103418 ,
              color: "hsl(6, 70%, 50%)",
            },
            {
              id: "Securitized",
              label: "Securitized",
              value: 151718,
              color: "hsl(6, 70%, 50%)",
            },
            {
              id: "Municipal",
              label: "Municipal",
              value: 214157,
              color: "hsl(329, 70%, 50%)",
            },
            {
              id: "Cash/Derivatives",
              label: "Cash/Derivatives",
              value: 69446,
              color: "hsl(161, 70%, 50%)",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default FixedIncomeHoldings;
