import { useState } from "react";
import Image from "next/image";

import PrimaryButton from "@/components/PrimaryButton";
import StatBadge from "@/components/StatBadge";
import FeatureCard from "@/components/FeatureCard";
import IndustryCard from "@/components/IndustryCard";
import LanguageSwitch from "@/components/LanguageSwitch";

export default function Home() {
  const [lang, setLang] = useState<"en" | "ar">("en");
  const isAr = lang === "ar";

  return (
    <main
      lang={lang}
      dir={isAr ? "rtl" : "ltr"}
      className="min-h-screen"
    >
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <Image src="/NEXTRAX.png" alt="NEXTRAX" width={140} height={40} />
          <div className="flex items-center gap-6">
            <LanguageSwitch
              lang={lang}
              onToggle={() => setLang(isAr ? "en" : "ar")}
            />
            <PrimaryButton href="http://41.199.252.119/login">
              {isAr ? "تسجيل الدخول" : "Login"}
            </PrimaryButton>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-5xl mx-auto text-center px-6 pt-32 pb-24">
        <h1 className="text-[56px] leading-tight font-semibold mb-6">
          {isAr
            ? "مش بتتابع… إنت بتقود أسطول"
            : "You don’t track fleets. You command them."}
        </h1>
        <p className="text-xl opacity-80 mb-10">
          {isAr
            ? "منصة ذكاء تشغيلي تنبؤية لإدارة الأساطيل على مستوى مؤسسي."
            : "A predictive operational intelligence platform for enterprise fleets."}
        </p>
        <PrimaryButton href="http://41.199.252.119/login">
          {isAr ? "الدخول إلى المنصة" : "Access Platform"}
        </PrimaryButton>
      </section>

      {/* Intelligence Strip */}
      <section className="border-y border-white/10 py-10">
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-8">
          <StatBadge label="Online Vehicles" value="12,480" tone="success" />
          <StatBadge label="Events / sec" value="3,240" tone="accent" />
          <StatBadge label="Avg Response" value="420ms" tone="warning" />
        </div>
      </section>

      {/* Capabilities */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-4 gap-6">
        <FeatureCard title="Predict" description="Anticipate failures, risks, and delays before they happen." />
        <FeatureCard title="Decide" description="AI-assisted operational decisions in real time." />
        <FeatureCard title="Act" description="Execute actions automatically across fleets." />
        <FeatureCard title="Learn" description="Continuous optimization from historical outcomes." />
      </section>

      {/* Use Cases */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <h2 className="text-4xl font-medium mb-10 text-center">
          {isAr ? "حالات الاستخدام" : "Industries"}
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          <IndustryCard title={isAr ? "النقل والخدمات اللوجستية" : "Logistics"} />
          <IndustryCard title={isAr ? "الأمن والحكومة" : "Government & Security"} />
          <IndustryCard title={isAr ? "التأمين الذكي" : "Insurance"} />
        </div>
      </section>

      {/* Trust */}
      <section className="border-t border-white/10 py-20 text-center">
        <p className="opacity-70">
          99.9% uptime · 1M+ devices ready · Government-grade security
        </p>
      </section>
    </main>
  );
}

