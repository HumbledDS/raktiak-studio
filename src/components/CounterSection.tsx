"use client";

import Counter from "./Counter";

interface Stat {
  value: number;
  suffix?: string;
  label: string;
}

interface CounterSectionProps {
  stats: Stat[];
}

export default function CounterSection({ stats }: CounterSectionProps) {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div 
            key={index}
            className="transform transition-all duration-700"
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            <Counter
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              duration={2000 + (index * 200)}
            />
          </div>
        ))}
      </div>
    </div>
  );
} 