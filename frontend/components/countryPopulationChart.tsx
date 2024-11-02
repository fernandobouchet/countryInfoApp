"use client";

import { Bar, BarChart, XAxis } from "recharts";

import { ChartConfig, ChartContainer } from "@/components/ui/chart";

const chartConfig = {
  value: {
    label: "Population",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

interface Props {
  populationCounts: [{ year: number; value: number }];
}
export default function CountryPopulationChart({ populationCounts }: Props) {
  return (
    <ChartContainer
      config={chartConfig}
      className="min-h-[200px] w-full max-w-lg"
    >
      <BarChart accessibilityLayer data={populationCounts}>
        <XAxis
          dataKey="year"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
        />

        <Bar dataKey="value" fill={"hsl(var(--chart-1))"} radius={4} />
      </BarChart>
    </ChartContainer>
  );
}
