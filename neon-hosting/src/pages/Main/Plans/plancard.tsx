import { MediumButton } from "@/components/ui/buttons";
import { defaultPlan } from "./page";

type PlanCardProps<S = string> = {
  id: number,
  colorDesc: S,
  textColorDesc: S,
  title: S,
  price: S,
  period: S,
  desc: S,
  extraInfo: S | false,
  list: Array<S>,
  planType: "fixed" | "payg"
};

const planButtons = {
  fixed: "Selecionar Plano",
  payg: "Começar Agora"
}

const PlanCard = ({ id, colorDesc, textColorDesc, desc, title, price, period, extraInfo, list, planType }: PlanCardProps) => {
  return (
    <div
      className={`rounded-2xl p-8 bg-zinc-900 relative flex flex-col ${
        defaultPlan === id
          ? "border border-red-500 shadow-[0_0_25px_rgba(255,0,0,0.5)]"
          : ""
      }`}
    >
      <div
        className={`absolute -top-3 left-1/2 -translate-x-1/2 ${colorDesc} ${textColorDesc} text-xs px-3 py-1 rounded-full`}
      >
        {desc}
      </div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <div className="text-4xl font-bold mb-2">
        {price} <span className="text-lg text-gray-400">/{period}</span>
      </div>
      {extraInfo && (
        <div className="text-sm text-gray-400 mb-6">{extraInfo}</div>
      )}
      <ul className="space-y-3 mb-8 text-gray-300">
        {list.map((value, i) => {
          return <li key={`plan.${id}.${i}`}>{value}</li>;
        })}
      </ul>

      <MediumButton
        onClick={() => {}}
        value={planButtons[planType]}
        className={`mt-auto ${defaultPlan === id ? "bg-red-500" : ""}`}
      />
    </div>
  );
};

export default PlanCard;