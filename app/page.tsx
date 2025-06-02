import Faqs from "./components/faqs/faqs";
import Awareness from "./components/sections/home/awareness";
import FinancialAssistant from "./components/sections/home/financial-assistant";
import Security from "./components/sections/home/security";

import SpendingAnalysis from "./components/sections/home/spending-analysis";
import Support from "./components/sections/home/support";
import Transfer from "./components/sections/home/transfer";
import UseCases from "./components/sections/home/use-cases";

export default function Home() {
  return (
    <div className="bg-[#121212]   min-h-screen">
      <FinancialAssistant />
      <Transfer />
      <SpendingAnalysis />

      <Support />
      <Awareness />
      <UseCases />
      <Security />
      <Faqs />
    </div>
  );
}
