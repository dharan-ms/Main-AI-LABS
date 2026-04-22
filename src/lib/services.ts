import type { Service } from "@/components/ServiceRow";
import thumb1 from "@/assets/service-thumb-1.jpg";
import thumb2 from "@/assets/service-thumb-2.jpg";
import thumb3 from "@/assets/service-thumb-3.jpg";
import thumb4 from "@/assets/service-thumb-4.jpg";
import landingThumb from "@/assets/service-thumb-landing.png";
import modernThumb from "@/assets/service-thumb-modern.png";
import openClawThumb from "@/assets/service-thumb-openclaw.png";
import claudeOpsThumb from "@/assets/service-thumb-claudeops.png";
import automationsThumb from "@/assets/service-thumb-automations.png";
import aiAgentsThumb from "@/assets/service-thumb-aiagents.png";
import voiceCallersThumb from "@/assets/service-thumb-voicecallers.png";
import strategyThumb from "@/assets/service-thumb-strategy.png";

export const services: Service[] = [
  { number: "01", title: "Landing Pages", description: "Conversion-tuned single pages that load fast, look luxurious, and turn visitors into qualified leads.", variant: "violet", image: landingThumb },
  { number: "02", title: "Modern Websites", description: "Editorial multi-page sites with cinematic motion, refined typography, and pixel-perfect responsive design.", variant: "azure", image: modernThumb },
  { number: "03", title: "Open Claw Services", description: "Bespoke Anthropic-powered tooling — RAG, evals, agent harnesses, and production-grade Claude integrations.", tag: "LOCAL&CLOUD HOSTING", variant: "amber", image: openClawThumb },
  { number: "04", title: "Claude Code Operations", description: "Embed Claude Code into your engineering workflow. Migrations, refactors, code review and feature delivery at agency scale.", variant: "rose", image: claudeOpsThumb },
  { number: "05", title: "n8n / Make Automations", description: "Internal automations that quietly do the work of an ops team — billing, CRM sync, lead routing, reporting.", variant: "violet", image: automationsThumb },
  { number: "06", title: "Custom AI Agents", description: "Tool-using agents grounded in your data — research, sales prep, ticket triage, knowledge retrieval.", variant: "azure", image: aiAgentsThumb },
  { number: "07", title: "AI Voice Callers", description: "Natural-sounding voice agents that book calls, qualify leads, and handle inbound at any volume.", variant: "amber", image: voiceCallersThumb },
  { number: "08", title: "AI Strategy", description: "Workshops and roadmaps to identify high-leverage AI bets, then ship them with measurable ROI.", variant: "rose", image: strategyThumb },
];
