const GLASS_DARK = 'rgba(12, 12, 12, 0.95)';

interface FlashcardWindowProps {
  expanded: boolean;
}

export default function FlashcardWindow({ expanded }: FlashcardWindowProps) {
  if (!expanded) return null;

  return (
    <div className="interactive flex-1 overflow-y-auto backdrop-blur-2xl" style={{ background: GLASS_DARK }} />
  );
}
