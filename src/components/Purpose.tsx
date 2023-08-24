import {
    ArrowPathIcon,
    ChevronRightIcon,
    CloudArrowUpIcon,
    Cog6ToothIcon,
    FingerPrintIcon,
    LockClosedIcon,
    ServerIcon,
  } from '@heroicons/react/20/solid'
  import { PresentationChartLineIcon, FaceSmileIcon, HomeModernIcon } from '@heroicons/react/24/outline'

const purposes = [
    {
      name: 'Peace of mind',
      description:
        'Our investment planning not only safeguards your financial future but also bolsters your mental and physical well-being. Because a secure tomorrow begins with a healthy today.',
      href: '#',
      icon: FaceSmileIcon,
    },
    {
      name: 'Strategic cash flow management',
      description:
         "We specialize in funding your cash flow in the most optimal manner, meticulously considering both tax implications and your long-term financial needs. It's not just about money; it's about smart financial planning for a secure future.",
      href: '#',
      icon: PresentationChartLineIcon,
    },
    {
      name: 'Life Style',
      description:
        'Our investment strategies are tailored to nurture and cultivate your financial growth, ensuring the lifestyle you envision for future years becomes a thriving reality.',
      href: '#',
      icon: HomeModernIcon,
    },
  ]

const Purpose = () => {
    return (
        <div className="mx-auto mt-20 max-w-7xl px-6 sm:mt-30 lg:px-8 text-black">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-400 hidden">Deploy faster</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-black sm:text-4xl">
              Purpose
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-900">
                Use this irreplaceable wealth to fund present and future spending needs
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {purposes.map((feature) => (
                <div key={feature.name} className="flex flex-col bg-white/60 p-8 rounded">
                  <dt className="text-base font-semibold leading-7 text-black">
                    <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-[#383839]">
                      <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-900">
                    <p className="flex-auto">{feature.description}</p>
                    <p className="mt-6">
                      <a href={feature.href} className="text-sm font-semibold leading-6 text-indigo-400 hidden">
                        Learn more <span aria-hidden="true">→</span>
                      </a>
                    </p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
    )
}

export default Purpose