type Props = {
  title: string;
};

export default function IndustryCard({ title }: Props) {
  return (
    <div className="rounded-xl bg-white/5 px-6 py-4
                    hover:bg-white/10 transition">
      {title}
    </div>
  );
}
