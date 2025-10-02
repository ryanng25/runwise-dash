interface StatsCardProps {
  title: string;
  value: number;
}

export function StatsCard({ title, value }: StatsCardProps) {
  return (
    <div className="bg-[#EF6D58] rounded-lg p-8 text-center">
      <h3 className="text-white/90 text-base font-normal mb-2">{title}</h3>
      <p className="text-white text-5xl font-bold">{value}</p>
    </div>
  );
}
