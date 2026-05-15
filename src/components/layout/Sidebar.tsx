import { BadgeQuestionMark, Map, RotateCw, VolumeOff, Timer } from "lucide-react";
import Button from "../ui/Button";
import Badge from "../ui/Badge";

const Sidebar = () => {
  return (
    <div className="w-full lg:col-span-4 flex flex-col h-auto lg:h-full bg-secondary rounded-2xl p-4 lg:p-6 gap-3">
      <div className="flex-1 flex flex-col bg-content-bg rounded-lg overflow-hidden shadow-[inset_0_4px_10px_rgba(0,0,0,0.1)] relative">
        <div className="h-44 w-full relative">
          <img
            src="/src/assets/bg_image.png"
            alt="Printery Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/10" />

          <div className="absolute top-4 left-4 right-4 flex flex-col xl:flex-row items-stretch xl:items-center gap-2">
            <Badge
              variant="secondary"
              shape="xl"
              className="px-3 py-1.5 xl:px-4 xl:py-2 gap-2 justify-center"
            >
              <Timer size={18} className="xl:w-5 xl:h-5" />
              <span className="text-lg xl:text-2xl font-black">42:32</span>
            </Badge>

            <Badge
              variant="secondary"
              shape="xl"
              className="flex-1 px-3 py-1.5 xl:px-4 xl:py-2 gap-2 xl:gap-4"
            >
              <div className="flex-1 h-6 xl:h-8 bg-[#002D4F] rounded-lg overflow-hidden flex items-center p-1 shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]">
                <div className="w-[15%] h-full bg-progress-fill rounded-md shadow-[0_0_10px_rgba(243,192,16,0.4)]" />
              </div>
              <div className="text-lg xl:text-2xl font-black whitespace-nowrap">
                Level 2 / 8
              </div>
            </Badge>
          </div>
        </div>

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

      <div className="flex flex-wrap items-center justify-center gap-2 xl:gap-3 w-full">
        <Button variant="secondary" className="p-2 xl:p-3">
          <BadgeQuestionMark size={20} className="xl:w-6 xl:h-6" />
        </Button>
        <Button variant="secondary" className="p-2 xl:p-3">
          <RotateCw size={20} className="xl:w-6 xl:h-6" />
        </Button>
        <Button variant="secondary" className="p-2 xl:p-3">
          <VolumeOff size={20} className="xl:w-6 xl:h-6" />
        </Button>
        <Button className="flex-1 gap-1 xl:gap-2 py-2 px-4 xl:py-3 xl:px-6 text-base xl:text-lg min-w-[140px] justify-center whitespace-nowrap">
          <Map size={20} className="xl:w-6 xl:h-6" />
          Naar de kaart
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;

