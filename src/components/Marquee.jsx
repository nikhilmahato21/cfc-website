import React from 'react'
import { Flame } from 'lucide-react'

export default function Marquee() {
  const items = [
    'CRISPY OUTSIDE',
    'JUICY INSIDE',
    'HAND BATTERED',
    'DOUBLE FRIED',
    'LOCAL HEAT',
    'HOT DELIVERY',
    'NO SHORTCUTS',
    'PURE CRUNCH',
  ]

  return (
    <div className="my-4 lg:my-6 overflow-hidden bg-cfc-butter py-4 lg:py-6 rounded-3xl border-y-4 border-cfc-deep">
      <div className="marquee-track">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex items-center gap-6 lg:gap-10 px-6 lg:px-10 whitespace-nowrap">
            {items.map((item, j) => (
              <React.Fragment key={`${i}-${j}`}>
                <span className="font-display text-3xl lg:text-5xl text-cfc-deep tracking-wider">
                  {item}
                </span>
                <Flame className="w-6 h-6 lg:w-8 lg:h-8 text-cfc-red flex-shrink-0" fill="currentColor" />
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
