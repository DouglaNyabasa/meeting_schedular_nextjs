import { Button } from "@/components/ui/button";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import Dashboard from "./(routes)/dashboard/page";
import CreateBusiness from "./(routes)/create-business/page";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
    </div>
  );
}
