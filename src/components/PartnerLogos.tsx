'use client';

const partners = [
  { name: 'OpenAI', url: 'https://logo.clearbit.com/openai.com', domain: 'openai.com' },
  { name: 'Anthropic', url: 'https://logo.clearbit.com/anthropic.com', domain: 'anthropic.com' },
  { name: 'AWS', url: 'https://logo.clearbit.com/aws.amazon.com', domain: 'aws.amazon.com' },
  { name: 'Google Cloud', url: 'https://logo.clearbit.com/cloud.google.com', domain: 'cloud.google.com' },
  { name: 'Microsoft Azure', url: 'https://logo.clearbit.com/azure.microsoft.com', domain: 'azure.microsoft.com' },
];

export function PartnerLogos({ className = '' }: { className?: string }) {
  return (
    <div className={`flex flex-wrap justify-center items-center gap-8 md:gap-12 ${className}`}>
      {partners.map((p) => (
        <img
          key={p.name}
          src={p.url}
          alt={p.name}
          title={p.name}
          width={120}
          height={28}
          className="h-7 w-auto grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300 object-contain"
          loading="lazy"
        />
      ))}
    </div>
  );
}
