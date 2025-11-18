import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Mail, Twitter } from "lucide-react";

export default function ContactUs() {
  return (
    <>
      <Header />
      <Container className="mt-16 sm:mt-32">
        <header className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Contact Us
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            We are here to help and answer any question you might have. We look forward to hearing from you.
          </p>
        </header>
        <div className="mt-10 max-w-3xl space-y-8 text-zinc-600 dark:text-zinc-400">
          <section>
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
              Get in Touch
            </h2>
            <ul className="mt-4 space-y-4">
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-teal-500" />
                <a href="mailto:calebjosephwrigley@gmail.com" className="hover:text-teal-500 transition">
                  calebjosephwrigley@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Twitter className="h-5 w-5 text-teal-500" />
                <a href="https://x.com/Justaperson0002" target="_blank" rel="noopener noreferrer" className="hover:text-teal-500 transition">
                  @Justaperson0002 (X/Twitter)
                </a>
              </li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
              General Inquiries
            </h2>
            <p className="mt-4">
              For general questions, feedback, or support, please use the email address provided above. We aim to respond to all inquiries within 48 hours.
            </p>
          </section>
        </div>
      </Container>
      <Footer />
    </>
  );
}
