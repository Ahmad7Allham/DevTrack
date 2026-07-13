type StatsCardProps = {
    title: string;
    value: number;
};

export default function StatsCard({ title, value }: StatsCardProps) {
    return (
        <div className=" bg-slate-800 border-2 border-slate-700 rounded-2xl p-6 hover:border-cyan-400 hover:-translate-y-1  transition-all duration-400">
            <p className="text-slate-400 text-sm">{title}</p>
            <h2 className="text-3xl font-bold mt-2">{value}</h2>
        </div>
    );
}
