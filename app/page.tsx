import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Spacing } from "./components/Spacing";
import { Status } from "./components/Status";
import { Skills } from "./components/Skills";
import { ContactUs } from "./components/ContactForm";

export default function Home() {
  return (
    <main>
      <Header />
      <Spacing  size="md" />
      <Hero />
      <Spacing  size="md" />
      <Status/>
      <Spacing  size="md" />
      <Skills/>
      <Spacing  size="md" />
      <ContactUs/>
      <Spacing  size="md" />
    </main>
  );
}
