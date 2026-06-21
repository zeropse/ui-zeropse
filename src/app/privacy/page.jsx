import { FloatingNav } from "@/components/FloatingNav";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy - UI Directory",
  description: "Privacy Policy for UI Directory",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <FloatingNav />
      <div className="flex-grow pt-40 pb-24 px-6 md:px-12 max-w-3xl mx-auto w-full prose dark:prose-invert">
        <h1 className="font-heading text-4xl md:text-5xl font-medium tracking-tight mb-8">
          Privacy Policy
        </h1>
        <p className="text-muted-foreground text-sm mb-12">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <h2 className="text-2xl font-medium mt-8 mb-4">1. Introduction</h2>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          Welcome to UI Directory. We respect your privacy and are committed to
          protecting your personal data. This privacy policy will inform you as
          to how we look after your personal data when you visit our website.
        </p>

        <h2 className="text-2xl font-medium mt-8 mb-4">
          2. The data we collect
        </h2>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          We do not track, collect, or store any personally identifiable
          information from our visitors. We use simple privacy-respecting
          analytics to understand overall website traffic and usage patterns.
        </p>

        <h2 className="text-2xl font-medium mt-8 mb-4">3. Third-party links</h2>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          This website includes links to third-party websites, plug-ins, and
          applications. Clicking on those links or enabling those connections
          may allow third parties to collect or share data about you. We do not
          control these third-party websites and are not responsible for their
          privacy statements.
        </p>

        <h2 className="text-2xl font-medium mt-8 mb-4">
          4. Changes to the privacy policy
        </h2>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          We keep our privacy policy under regular review. We will place any
          updates on this webpage.
        </p>
      </div>
      <Footer />
    </main>
  );
}
