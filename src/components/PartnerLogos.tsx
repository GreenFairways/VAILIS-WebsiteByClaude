'use client';

const LOGO_CDN = 'https://cdn.jsdelivr.net/npm/simple-icons@11/icons';

const partners: { name: string; slug: string }[] = [
  { name: 'OpenAI', slug: 'openai' },
  { name: 'Anthropic', slug: 'anthropic' },
  { name: 'AWS', slug: 'amazonaws' },
  { name: 'Google Cloud', slug: 'googlecloud' },
  { name: 'Microsoft Azure', slug: 'microsoftazure' },
];

export function PartnerLogos({
  className = '',
  variant = 'dark',
}: {
  className?: string;
  variant?: 'dark' | 'light';
}) {
  const isDark = variant === 'dark';
  return (
    <div
      className={`flex flex-wrap justify-center items-center gap-6 md:gap-10 ${className}`}
    >
      {partners.map(({ name, slug }) => (
        <div
          key={slug}
          className={`flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border transition-all duration-300 min-w-[110px] ${
            isDark
              ? 'border-white/25 bg-white/5 hover:bg-white/10 text-white/90'
              : 'border-gray-300 bg-white shadow-sm hover:shadow text-gray-700'
          }`}
        >
          <img
            src={`${LOGO_CDN}/${slug}.svg`}
            alt={name}
            className="h-6 w-6 object-contain shrink-0"
          />
          <span className="text-sm font-semibold tracking-tight">{name}</span>
        </div>
      ))}
    </div>
  );
}
