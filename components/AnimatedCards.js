import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      caption:
        "Facing challenges while learning? Share your doubts in real-time and get expert advice instantly.",
      title: "Clear Your Doubts Anytime",
      
    },
    {
      caption:
        "Discover trending technologies, tutorials, and resources to stay ahead in the tech world.",
      title: "Stay Updated with Latest Technologies",
      
      
    },
    {
      caption:
        "Engage with like-minded peers, exchange ideas, and build meaningful connections.",
      title: "Join a Community of Learners",
      
      
    },
    {
      caption:
        "Access curated resources, solve problems together, and level up your technical expertise",
      title: "Boost Your Knowledge",
      
      
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}