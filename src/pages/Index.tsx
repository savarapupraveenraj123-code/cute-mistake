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
        <div className="text-5xl md:text-7xl mb-4 animate-bounce-slow">🥺</div>
        <h1 className="animate-fade-up text-4xl md:text-6xl font-bold text-primary leading-tight max-w-3xl">
          I'm Sorry, My Dearest Akka ❤️
        </h1>
        <p className="animate-fade-up delay-1 mt-6 text-lg md:text-xl text-muted-foreground max-w-xl italic">
          For hurting the most important person in my life.
        </p>
        <div className="mt-4 flex gap-2 text-2xl animate-fade-up delay-2">
          <span className="animate-wiggle">💐</span>
          <span className="animate-wiggle" style={{ animationDelay: "0.2s" }}>🌸</span>
          <span className="animate-wiggle" style={{ animationDelay: "0.4s" }}>💐</span>
        </div>
      </section>

      {/* Apology */}
      <section className="relative z-10 max-w-2xl mx-auto px-6 pb-16">
        <div className="animate-fade-up delay-2 gradient-card rounded-3xl p-8 md:p-10 shadow-xl border-2 border-primary/20 relative overflow-hidden">
          <div className="absolute top-3 right-4 text-2xl opacity-40">🌷</div>
          <div className="absolute bottom-3 left-4 text-2xl opacity-40">💕</div>
          <p className="text-foreground leading-8 text-base md:text-lg whitespace-pre-line relative z-10">
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
          {[
            { text: "My First Best Friend", emoji: "👯‍♀️" },
            { text: "My Biggest Support", emoji: "🤗" },
          ].map((item, i) => (
            <div
              key={item.text}
              className={`animate-fade-up delay-${i + 3} gradient-card rounded-3xl p-8 shadow-lg border-2 border-primary/15 hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-default group`}
            >
              <div className="text-4xl mb-3 group-hover:animate-bounce-slow">{item.emoji}</div>
              <p className="text-lg font-semibold text-accent-foreground">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Forgive Button */}
      <section className="relative z-10 flex flex-col items-center pb-20 gap-3">
        <div className="text-3xl animate-bounce-slow">👇</div>
        <button
          onClick={() => setShowPopup(true)}
          className="btn-forgive bg-primary text-primary-foreground px-12 py-5 rounded-full text-xl font-bold hover:scale-110 transition-all duration-300 cursor-pointer shadow-xl"
        >
          Forgive Me Akka 💕
        </button>
      </section>

      {/* Footer */}
      <footer className="relative z-10 text-center pb-10 text-muted-foreground text-sm italic">
        Made with Love & Regret by Your Brother 💌
      </footer>

      {/* Popup */}
      <Dialog open={showPopup} onOpenChange={setShowPopup}>
        <DialogContent className="gradient-card text-center max-w-md rounded-3xl border-2 border-primary/20">
          <DialogHeader>
            <DialogTitle className="text-2xl text-primary">
              Thank You Akka 🥹❤️
            </DialogTitle>
          </DialogHeader>
          <div className="text-5xl my-3 animate-bounce-slow">🤗</div>
          <p className="text-foreground leading-7">
            Thank you for being my strength. I love you forever,{" "}
            <span className="font-bold text-primary">JASWITHA INDUMATHI</span> ❤️
          </p>
          <div className="flex justify-center gap-2 mt-2 text-2xl">
            <span>💖</span><span>🌸</span><span>💖</span>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
