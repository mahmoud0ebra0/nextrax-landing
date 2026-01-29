type Props = {
  label: string;
  value: string;
  tone: "success" | "accent" | "warning";
};

const toneMap = {
  success: "text-[var(--color-success)]",
  accent: "text-[var(--color-accent)]",
  warning: "text-[var(--color-warning)]",
};

export default function StatBadge({ label, value, tone }: Props) {
  return (
    <div className="text-center">
      <div className={`text-3xl font-semibold ${toneMap[tone]}`}>
        {value}
      </div>
      <div className="text-sm opacity-70">{label}</div>
    </div>
  );
}
