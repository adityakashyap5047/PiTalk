import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";

export function NeonCard({title, caption}) {
  return (
    <NeonGradientCard className="max-w-sm items-center justify-center text-center">
      <span className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-4xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
        {title}
      </span>
      <hr/>
      <span className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#298dff] from-35% to-[#00ff59] text-xl bg-clip-text text-center -mt-10 flex items-center font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
        {caption}
      </span>
    </NeonGradientCard>
  );
}
