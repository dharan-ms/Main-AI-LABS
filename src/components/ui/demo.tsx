import { GradientTracing } from "@/components/ui/gradient-tracing";

const Demo = () => (
  <GradientTracing
    width={300}
    height={100}
    path="M0,50 C25,0 50,100 75,50 S125,0 150,50 S200,100 225,50 S275,0 300,50 M0,50 C25,100 50,0 75,50 S125,100 150,50 S200,0 225,50 S275,100 300,50"
    gradientColors={["#FF6B6B", "#FF6B6B", "#4ECDC4"]}
  />
);

export { Demo };
