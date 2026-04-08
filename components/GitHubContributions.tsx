'use client';

import { useState, useEffect } from 'react';

const WEEKS = 52;
const DAYS = 7;
const MONTHS = ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'];

function getColor(level: number): string {
  const colors = ['#161b22', '#1a3a1a', '#166534', '#16a34a', '#4ade80'];
  return colors[Math.min(level, 4)];
}

function generateContributions(): number[][] {
  const grid: number[][] = [];
  for (let w = 0; w < WEEKS; w++) {
    const week: number[] = [];
    for (let d = 0; d < DAYS; d++) {
      const rand = Math.random();
      let level = 0;
      if (rand > 0.55) level = 1;
      if (rand > 0.70) level = 2;
      if (rand > 0.82) level = 3;
      if (rand > 0.93) level = 4;
      // More activity towards recent months
      if (w > 42 && rand > 0.4) level = Math.max(level, 1);
      if (w > 46 && rand > 0.3) level = Math.max(level, 2);
      week.push(level);
    }
    grid.push(week);
  }
  return grid;
}

export default function GitHubContributions() {
  const [grid, setGrid] = useState<number[][]>([]);

  useEffect(() => {
    setGrid(generateContributions());
  }, []);

  if (grid.length === 0) {
    return <section className="max-w-6xl mx-auto px-6 py-16 min-h-[150px]"></section>;
  }

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <div className="overflow-x-auto scrollbar-hidden">
        {/* Month labels */}
        <div className="flex gap-[3px] mb-1 ml-0" style={{ paddingLeft: 0 }}>
          {MONTHS.map((month, i) => (
            <div
              key={month}
              className="text-[11px] text-[#6b7280]"
              style={{ width: `${(WEEKS / MONTHS.length) * 13}px`, flexShrink: 0 }}
            >
              {month}
            </div>
          ))}
        </div>

        {/* Grid */}
        <div className="flex gap-[3px]">
          {grid.map((week, wi) => (
            <div key={wi} className="flex flex-col gap-[3px]">
              {week.map((level, di) => (
                <div
                  key={di}
                  title={`${level} contribution${level !== 1 ? 's' : ''}`}
                  className="w-[10px] h-[10px] rounded-[2px] cursor-pointer hover:ring-1 hover:ring-white/30 transition-all duration-100"
                  style={{ backgroundColor: getColor(level) }}
                />
              ))}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between mt-3">
          <span className="text-[11px] text-[#6b7280]">2639 contributions in the last year</span>
          <div className="flex items-center gap-1.5">
            <span className="text-[11px] text-[#6b7280]">Less</span>
            {[0, 1, 2, 3, 4].map((l) => (
              <div
                key={l}
                className="w-[10px] h-[10px] rounded-[2px]"
                style={{ backgroundColor: getColor(l) }}
              />
            ))}
            <span className="text-[11px] text-[#6b7280]">More</span>
          </div>
        </div>
      </div>
    </section>
  );
}
