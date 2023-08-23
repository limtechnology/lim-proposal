import AnimatedLogo from '@/components/AnimatedLogo'
import AssetAllocation from '@/components/AssetAllocation'
import FixedIncomeHoldings from '@/components/FixedIncomeHoldings'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 pt-0">
      <div className='bg-white flex flex-col items-center justify-between bg-[#f2eee8] pt-20'>
        <AnimatedLogo />
        <AssetAllocation />
        <FixedIncomeHoldings />
      </div>
    </main>
  )
}
