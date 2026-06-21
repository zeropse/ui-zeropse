import { FloatingNav } from "@/components/FloatingNav";
import { Footer } from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata = {
  title: "FAQ - UI Directory",
  description: "Frequently Asked Questions",
};

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <FloatingNav />
      <div className="flex-grow pt-40 pb-24 px-6 md:px-12 max-w-3xl mx-auto w-full">
        <h1 className="font-heading text-4xl md:text-5xl font-medium tracking-tight mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-muted-foreground mb-12 text-lg">
          Everything you need to know about the directory and how it works.
        </p>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-left font-medium text-lg">
              How do I submit a new site to the directory?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              You can submit a new site by clicking the "Add a Site" link in the
              footer. It will redirect you to our GitHub repository where you
              can open an issue with the required details.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="text-left font-medium text-lg">
              Is it free to be listed?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              Yes! We believe in keeping this resource completely free and open
              for the community.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="text-left font-medium text-lg">
              How do you choose which sites get listed?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              We look for high-quality, modern design resources that provide
              significant value to developers and designers. We prioritize
              active projects with good documentation and clean aesthetics.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className="text-left font-medium text-lg">
              How often is the directory updated?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              The directory is updated regularly as new submissions come in
              through our GitHub issues pipeline. We try to review and merge new
              additions weekly.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <Footer />
    </main>
  );
}
