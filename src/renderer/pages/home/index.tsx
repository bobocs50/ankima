import {
  Headphones,
  Mic,
  Send,
  Paperclip,
  Sparkles,
  MoreVertical
} from 'lucide-react';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#14161c] px-6 py-10 text-white">
      <div className="mx-auto w-full max-w-[740px]">
        <div className="flex h-[62px] w-full items-center gap-[10px] rounded-[18px] border border-black/10 bg-[linear-gradient(180deg,rgba(112,98,79,0.92)_0%,rgba(96,84,67,0.92)_100%)] px-[10px] shadow-[0_14px_30px_rgba(46,31,16,0.24),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl">
          <div className="flex shrink-0 items-center gap-[8px]">
            <button
              type="button"
              className="inline-flex size-[42px] shrink-0 items-center justify-center rounded-[14px] border border-black/5 bg-[#ece9e4] text-[#49423b] shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] transition-colors hover:bg-[#f3f0eb]"
              aria-label="Audio output"
            >
              <Headphones className="size-[18px]" />
            </button>
            <button
              type="button"
              className="inline-flex size-[42px] shrink-0 items-center justify-center rounded-[14px] border border-black/5 bg-[#ece9e4] text-[#49423b] shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] transition-colors hover:bg-[#f3f0eb]"
              aria-label="Voice input"
            >
              <Mic className="size-[18px]" />
            </button>
          </div>

          <label className="flex min-w-0 flex-1 items-center rounded-[15px] border border-white/10 bg-[rgba(88,78,64,0.34)] px-[16px] py-[10px] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
            <input
              type="text"
              placeholder="Ask me anything..."
              className="w-full bg-transparent text-[16px] font-medium text-[#d2cbc2] placeholder:text-[#c3bbb1]/70 focus:outline-none"
            />
          </label>

          <div className="flex shrink-0 items-center gap-[8px]">
            <button
              type="button"
              className="inline-flex size-[42px] shrink-0 items-center justify-center rounded-[14px] border border-black/5 bg-[#ece9e4] text-[#49423b] shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] transition-colors hover:bg-[#f3f0eb]"
              aria-label="Send"
            >
              <Send className="size-[18px]" />
            </button>
            <button
              type="button"
              className="inline-flex size-[42px] shrink-0 items-center justify-center rounded-[14px] border border-black/5 bg-[#ece9e4] text-[#49423b] shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] transition-colors hover:bg-[#f3f0eb]"
              aria-label="Attach file"
            >
              <Paperclip className="size-[18px]" />
            </button>
            <button
              type="button"
              className="inline-flex size-[42px] shrink-0 items-center justify-center rounded-[14px] border border-black/5 bg-[#ece9e4] text-[#49423b] shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] transition-colors hover:bg-[#f3f0eb]"
              aria-label="Tools"
            >
              <Sparkles className="size-[18px]" />
            </button>
            <button
              type="button"
              className="inline-flex size-[42px] shrink-0 items-center justify-center rounded-[14px] border border-black/5 bg-[#ece9e4] text-[#49423b] shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] transition-colors hover:bg-[#f3f0eb]"
              aria-label="More"
            >
              <MoreVertical className="size-[18px]" />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
