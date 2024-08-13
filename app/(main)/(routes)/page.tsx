import { ModeToggle } from "@/components/mode-toggle";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <ModeToggle  />
      <p>Hello Ciscorder! You're in a protected route</p>
    </div>
      );
}
