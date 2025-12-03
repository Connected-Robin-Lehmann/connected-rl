import { useState, useEffect } from "react";
import { Sparkles, Play, Pause } from "lucide-react";

const MobileComparisonAnimated = () => {
  const [showAfter, setShowAfter] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setShowAfter((prev) => !prev);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <div className="mb-12">
      <div className="text-center mb-4">
        <div className="inline-flex items-center gap-2 bg-primary/10 px-3 py-1.5 rounded-full text-xs font-medium text-primary mb-2">
          <Sparkles className="w-3 h-3" />
          <span>Idee 4: Auto-Animation</span>
        </div>
      </div>

      {/* Play/Pause Control */}
      <div className="flex justify-center mb-4">
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="flex items-center gap-2 px-4 py-2 bg-muted rounded-lg text-sm font-medium hover:bg-muted/80 transition-colors"
        >
          {isPlaying ? (
            <>
              <Pause className="w-4 h-4" />
              <span>Pause</span>
            </>
          ) : (
            <>
              <Play className="w-4 h-4" />
              <span>Abspielen</span>
            </>
          )}
        </button>
      </div>

      {/* Status Indicator */}
      <div className="flex justify-center mb-4">
        <div className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-500 ${
          showAfter 
            ? "bg-accent text-accent-foreground" 
            : "bg-destructive/80 text-destructive-foreground"
        }`}>
          {showAfter ? "✓ Nachher (Modern)" : "✗ Vorher (Alt)"}
        </div>
      </div>

      {/* Content Container */}
      <div className="mx-auto px-2">
        <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl border-2 border-accent/20">
          {/* Before Content */}
          <div
            className={`absolute inset-0 transition-all duration-700 ease-in-out ${
              showAfter 
                ? "opacity-0 scale-95 rotate-y-12" 
                : "opacity-100 scale-100 rotate-y-0"
            }`}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className="h-full bg-slate-100 overflow-y-auto">
              {/* Browser Header */}
              <div className="bg-gray-400 p-2 flex items-center gap-1.5 sticky top-0 z-10">
                <div className="w-2.5 h-2.5 bg-red-500 rounded-full"></div>
                <div className="w-2.5 h-2.5 bg-yellow-500 rounded-full"></div>
                <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
                <div className="ml-3 text-xs text-gray-700 font-mono truncate">
                  müller-law-office.com
                </div>
              </div>

              {/* Old Website Content */}
              <div className="bg-white min-h-[600px]">
                <div className="bg-gradient-to-r from-red-500 via-yellow-400 to-red-500 p-1.5 text-center">
                  <div className="text-xs font-bold">
                    🔥 WILLKOMMEN! Besucher Nr. 000347 🔥
                  </div>
                </div>
                <div className="bg-[#000080] p-3">
                  <div className="text-yellow-300 font-bold text-lg" style={{ fontFamily: 'Times New Roman' }}>
                    Dr. Müller
                  </div>
                  <div className="text-white text-xs">Rechtsanwalt • Seit 1995</div>
                </div>
                <div className="bg-[#c0c0c0] p-2 border-b-2 border-black">
                  <div className="flex gap-3 text-xs text-blue-600 underline">
                    <span>Home</span>
                    <span>Über uns</span>
                    <span>Kontakt</span>
                  </div>
                </div>
                <div className="p-3 bg-[#ffffcc] border-2 border-dashed border-red-500 m-2">
                  <div className="text-center text-red-700 font-bold text-lg" style={{ fontFamily: 'Arial Black' }}>
                    Herzlich Willkommen!
                  </div>
                  <div className="text-center text-[#000080] text-sm mt-1" style={{ fontFamily: 'Comic Sans MS' }}>
                    🎓 Ihre Anwaltskanzlei 🎓
                  </div>
                </div>
                <div className="p-3" style={{ fontFamily: 'Times New Roman' }}>
                  <p className="text-sm underline font-bold mb-2">Professionelle Rechtsberatung seit 25 Jahren</p>
                  <p className="text-xs text-justify">
                    Seit über 25 Jahren vertreten wir erfolgreich die Interessen unserer Mandanten.
                  </p>
                </div>
                <div className="m-2 p-2 bg-[#ff99cc] border-4 text-center" style={{ borderStyle: 'ridge', borderColor: '#cc00cc' }}>
                  <span className="text-white font-bold text-sm" style={{ textShadow: '1px 1px black' }}>
                    ✨ KOSTENLOSE ERSTBERATUNG ✨
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* After Content */}
          <div
            className={`absolute inset-0 transition-all duration-700 ease-in-out ${
              showAfter 
                ? "opacity-100 scale-100 rotate-y-0" 
                : "opacity-0 scale-95 -rotate-y-12"
            }`}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className="h-full bg-slate-50 overflow-y-auto">
              {/* Browser Header */}
              <div className="bg-slate-800 p-2 flex items-center gap-1.5 sticky top-0 z-10">
                <div className="w-2.5 h-2.5 bg-red-500 rounded-full"></div>
                <div className="w-2.5 h-2.5 bg-yellow-500 rounded-full"></div>
                <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
                <div className="ml-3 text-xs text-slate-400 font-mono truncate">
                  mueller-kanzlei.de
                </div>
              </div>

              {/* Modern Website Content */}
              <div className="bg-gradient-to-b from-slate-900 to-slate-800 min-h-[600px]">
                {/* Modern Nav */}
                <div className="p-4 flex items-center justify-between border-b border-slate-700/50">
                  <div className="text-white font-semibold text-sm">Dr. Müller</div>
                  <div className="flex gap-3 text-xs text-slate-400">
                    <span className="text-white">Start</span>
                    <span>Leistungen</span>
                    <span>Kontakt</span>
                  </div>
                </div>

                {/* Hero Section */}
                <div className="p-6 text-center">
                  <div className="inline-block px-3 py-1 bg-amber-500/20 text-amber-400 rounded-full text-xs mb-4">
                    25+ Jahre Erfahrung
                  </div>
                  <h1 className="text-2xl font-bold text-white mb-2">
                    Ihr Recht in besten Händen
                  </h1>
                  <p className="text-slate-400 text-sm mb-4">
                    Kompetente Rechtsberatung in Mannheim
                  </p>
                  <button className="bg-amber-500 text-slate-900 px-4 py-2 rounded-lg text-sm font-medium">
                    Termin vereinbaren
                  </button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-2 p-4 mx-4 bg-slate-800/50 rounded-xl">
                  <div className="text-center">
                    <div className="text-amber-400 font-bold text-lg">1000+</div>
                    <div className="text-slate-500 text-xs">Mandanten</div>
                  </div>
                  <div className="text-center">
                    <div className="text-amber-400 font-bold text-lg">95%</div>
                    <div className="text-slate-500 text-xs">Erfolgsquote</div>
                  </div>
                  <div className="text-center">
                    <div className="text-amber-400 font-bold text-lg">25</div>
                    <div className="text-slate-500 text-xs">Jahre</div>
                  </div>
                </div>

                {/* Services Preview */}
                <div className="p-4 mt-4">
                  <div className="bg-slate-800/50 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 bg-amber-500/20 rounded-lg flex items-center justify-center text-amber-400">⚖️</div>
                      <span className="text-white font-medium text-sm">Familienrecht</span>
                    </div>
                    <p className="text-slate-400 text-xs">
                      Scheidung, Sorgerecht, Unterhalt
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="flex justify-center mt-4 gap-2">
        <div className={`w-2 h-2 rounded-full transition-colors duration-300 ${!showAfter ? 'bg-accent' : 'bg-muted'}`}></div>
        <div className={`w-2 h-2 rounded-full transition-colors duration-300 ${showAfter ? 'bg-accent' : 'bg-muted'}`}></div>
      </div>

      {/* Labels */}
      <div className="flex justify-center mt-3 text-xs text-muted-foreground">
        Automatischer Wechsel alle 3 Sekunden
      </div>
    </div>
  );
};

export default MobileComparisonAnimated;
