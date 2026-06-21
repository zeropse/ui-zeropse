import { FloatingNav } from "@/components/FloatingNav";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Terms of Service - UI Directory",
  description: "Terms of Service for UI Directory",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <FloatingNav />
      <div className="flex-grow pt-40 pb-24 px-6 md:px-12 max-w-3xl mx-auto w-full prose dark:prose-invert">
        <h1 className="font-heading text-4xl md:text-5xl font-medium tracking-tight mb-8">
          Terms of Service
        </h1>
        <p className="text-muted-foreground text-sm mb-12">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <h2 className="text-2xl font-medium mt-8 mb-4">
          1. Acceptance of Terms
        </h2>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          By accessing and using this website, you accept and agree to be bound
          by the terms and provision of this agreement.
        </p>

        <h2 className="text-2xl font-medium mt-8 mb-4">
          2. Description of Service
        </h2>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          UI Directory provides a curated list of links to external design and
          development resources. We do not host or own the resources linked on
          our platform unless explicitly stated.
        </p>

        <h2 className="text-2xl font-medium mt-8 mb-4">
          3. External Links Disclaimer
        </h2>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          Our website contains links to external websites that are not provided
          or maintained by or in any way affiliated with UI Directory. Please
          note that we do not guarantee the accuracy, relevance, timeliness, or
          completeness of any information on these external websites.
        </p>

        <h2 className="text-2xl font-medium mt-8 mb-4">
          4. Intellectual Property
        </h2>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          The curated collection, site design, and original content are the
          property of UI Directory. The trademarks, logos, and service marks of
          the linked resources belong to their respective owners.
        </p>
      </div>
      <Footer />
    </main>
  );
}
