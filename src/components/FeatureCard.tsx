type Props = {
  title: string;
  description: string;
};

export default function FeatureCard({ title, description }: Props) {
  return (
    <div className="rounded-2xl border border-white/10 p-6
                    hover:border-[var(--color-accent)]
                    transition-all duration-300 ease-out">
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="text-sm opacity-80 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
