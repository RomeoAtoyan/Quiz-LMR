import { BadgeQuestionMark, Map, RotateCw, VolumeOff, Timer } from "lucide-react";
import Button from "../ui/Button";

const Sidebar = () => {
  return (
    <div className="col-span-4 flex flex-col h-full bg-secondary rounded-3xl p-6 gap-3">
      {/* Main Content Card */}
      <div className="flex-1 flex flex-col bg-content-bg rounded-2xl overflow-hidden shadow-[inset_0_4px_10px_rgba(0,0,0,0.1)] relative">
        {/* Header Illustration Background */}
        <div className="h-44 w-full relative">
          <img
            src="/src/assets/bg_image.png"
            alt="Printery Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/10" />

          {/* Top Status Bar (Overlay) */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between bg-primary/40 backdrop-blur-sm rounded-xl px-3 py-2 text-white font-bold text-sm">
            <div className="flex items-center gap-1.5 bg-primary/60 px-3 py-1 rounded-lg">
              <Timer size={16} />
              <span>42:32</span>
            </div>
            <div className="flex-1 mx-4 h-5 bg-progress-bg rounded-full relative overflow-hidden flex items-center px-1 border border-white/10">
              <div className="w-[15%] h-3 bg-progress-fill rounded-full" />
              <div className="absolute left-1 w-3 h-3 bg-progress-fill rounded-full shadow-[0_0_8px_rgba(243,192,16,0.6)]" />
            </div>
            <div className="text-xs uppercase tracking-wider opacity-90">
              Level 2 / 8
            </div>
          </div>
        </div>

        {/* Overlapping Avatar */}
        <div className="absolute top-32 left-1/2 -translate-x-1/2">
          <div className="w-28 h-28 rounded-full border-[6px] border-content-bg bg-white overflow-hidden shadow-xl transform transition-transform hover:scale-105">
            <img
              src="/src/assets/avatar.png"
              alt="Avatar"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src =
                  "https://placehold.co/200x200/0C6AAE/FFFFFF?text=Avatar";
              }}
            />
          </div>
        </div>


        <div className="mt-14 px-8 py-6 flex flex-col items-center text-center gap-6">
          <div className="flex flex-col items-center gap-2">
            <h2 className="text-3xl font-black text-primary uppercase tracking-tight">
              Drukkerij
            </h2>
            <div className="w-16 h-1 bg-primary/30 rounded-full" />
          </div>

          <div className="space-y-4">
            <p className="text-primary font-bold text-lg leading-snug">
              Je moet je goed bewust zijn van wat jij allemaal moet doen.
            </p>
            <p className="text-primary font-bold text-base leading-relaxed opacity-90">
              Als drukafwerker heb je een heel uiteenlopend takenpakket. Sommige
              van onderstaande taken behoren echter niet tot het takenpakket, stop
              er snel mee voor je baas het ziet!
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-3 w-full">
        <Button variant="secondary" className="p-3">
          <BadgeQuestionMark size={24} />
        </Button>
        <Button variant="secondary" className="p-3">
          <RotateCw size={24} />
        </Button>
        <Button variant="secondary" className="p-3">
          <VolumeOff size={24} />
        </Button>
        <Button className="flex-1 gap-2 py-3 px-6 text-lg">
          <Map size={24} />
          Naar de kaart
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;

