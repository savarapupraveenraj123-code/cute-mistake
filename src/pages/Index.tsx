import { useState } from "react";
import FloatingHearts from "@/components/FloatingHearts";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const Index = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="relative min-h-screen gradient-hero overflow-x-hidden">
      <FloatingHearts />

      {/* Hero */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-[70vh] px-6 text-center">
        <h1 className="animate-fade-up text-4xl md:text-6xl font-bold text-primary leading-tight max-w-3xl">
          I'm Sorry, My Dearest Akka ❤️
        </h1>
        <p className="animate-fade-up delay-1 mt-6 text-lg md:text-xl text-muted-foreground max-w-xl italic">
          For hurting the most important person in my life.
        </p>
      </section>

      {/* Apology */}
      <section className="relative z-10 max-w-2xl mx-auto px-6 pb-16">
        <div className="animate-fade-up delay-2 gradient-card rounded-2xl p-8 md:p-10 shadow-lg border border-border/60">
          <p className="text-foreground leading-8 text-base md:text-lg whitespace-pre-line">
            Fest roju nenu neeku serious ayya. Aa moment lo na emotions control
            chesukolekapoyanu. Ninnu ala matladadam naa biggest mistake. Nuvvu naa
            life lo chala important person. Nuvvu naa support system, naa guide,
            naa best friend. I truly regret my behavior and I am deeply sorry for
            shouting at you. Ninnu hurt chesina prati word ki naaku chala badhaga
            undhi. I promise I will never repeat that mistake again. Please forgive
            me akka. Malla natho matladali ani korukuntunna. Naa life lo nee place
            evaru replace cheyyaleru.
          </p>
        </div>
      </section>

      {/* Memory Cards */}
      <section className="relative z-10 max-w-2xl mx-auto px-6 pb-16 text-center">
        <h2 className="animate-fade-up delay-3 text-2xl md:text-3xl font-bold text-primary mb-8">
          You Mean the World to Me 🌸
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {["My First Best Friend", "My Biggest Support"].map((text, i) => (
            <div
              key={text}
              className={`animate-fade-up delay-${i + 3} gradient-card rounded-2xl p-8 shadow-md border border-border/60 flex items-center justify-center`}
            >
              <p className="text-lg font-semibold text-accent-foreground">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Forgive Button */}
      <section className="relative z-10 flex justify-center pb-20">
        <button
          onClick={() => setShowPopup(true)}
          className="animate-fade-up delay-5 btn-forgive bg-primary text-primary-foreground px-10 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-transform duration-300 cursor-pointer"
        >
          Forgive Me Akka 💕
        </button>
      </section>

      {/* Footer */}
      <footer className="relative z-10 text-center pb-10 text-muted-foreground text-sm italic">
        Made with Love & Regret by Your Brother
      </footer>

      {/* Popup */}
      <Dialog open={showPopup} onOpenChange={setShowPopup}>
        <DialogContent className="gradient-card text-center max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl text-primary">
              Thank You Akka ❤️
            </DialogTitle>
          </DialogHeader>
          <p className="text-foreground leading-7 mt-2">
            Thank you for being my strength. I love you forever,{" "}
            <span className="font-bold text-primary">JASWITHA INDUMATHI</span> ❤️
          </p>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
