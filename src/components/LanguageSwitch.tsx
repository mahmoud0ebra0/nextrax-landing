type Props = {
  lang: "en" | "ar";
  onToggle: () => void;
};

export default function LanguageSwitch({ lang, onToggle }: Props) {
  return (
    <button
      onClick={onToggle}
      className="opacity-80 hover:opacity-100 transition"
      aria-label="Toggle language"
    >
      {lang === "en" ? "AR" : "EN"}
    </button>
  );
}
