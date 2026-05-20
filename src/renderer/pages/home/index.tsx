import {
  CornerDownLeft,
  Settings,
  Image,
  Eye,
  LayoutGrid,
  AudioLines,
  ChevronDown
} from 'lucide-react';

export default function HomePage() {
  return (
    <main className="h-screen w-screen">
      {/* Draggable glass container - Cluely style */}
      <div className="draggable-area flex flex-col h-full">
        {/* Row 1: Search Input - Lighter */}
        <div className="flex items-center px-5 py-4 gap-3 bg-[rgba(80,70,90,0.85)] backdrop-blur-2xl">
          <input
            type="text"
            placeholder="Ask anything about your screen"
            className="flex-1 bg-transparent text-white/90 placeholder:text-white/70 text-[15px] focus:outline-none"
          />
          <button
            type="button"
            className="flex items-center justify-center rounded-lg bg-white/20 p-2.5 text-white/80 transition-colors hover:bg-white/30"
            aria-label="Submit"
          >
            <CornerDownLeft className="size-4" />
          </button>
        </div>

        {/* Row 2: Action Icons - Darker */}
        <div className="flex items-center px-5 py-4 bg-[rgba(35,30,45,0.9)] backdrop-blur-2xl">
          {/* Left: Disable - fixed width for balance */}
          <div className="w-20">
            <button
              type="button"
              className="text-white/50 transition-colors hover:text-white/80"
              aria-label="Disable"
            >
              <Settings className="size-5" />
            </button>
          </div>

          {/* Center: Tools - flex-1 and centered */}
          <div className="flex-1 flex items-center justify-center gap-6">
            <button
              type="button"
              className="text-white/50 transition-colors hover:text-white/80"
              aria-label="Screenshot"
            >
              <Image className="size-5" />
            </button>
            <button
              type="button"
              className="text-white/50 transition-colors hover:text-white/80"
              aria-label="Vision"
            >
              <Eye className="size-5" />
            </button>
            <button
              type="button"
              className="text-white/50 transition-colors hover:text-white/80"
              aria-label="Grid"
            >
              <LayoutGrid className="size-5" />
            </button>
            <button
              type="button"
              className="text-white/50 transition-colors hover:text-white/80"
              aria-label="Audio"
            >
              <AudioLines className="size-5" />
            </button>
          </div>

          {/* Right: History - fixed width for balance */}
          <div className="w-20 flex justify-end">
            <button
              type="button"
              className="flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-[13px] text-white/60 transition-colors hover:bg-white/25"
              aria-label="History"
            >
              History
              <ChevronDown className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
