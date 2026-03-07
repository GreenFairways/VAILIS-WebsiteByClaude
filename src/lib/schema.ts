const SITE_URL = 'https://vailis.ai';

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'VAILIS.ai',
  alternateName: 'VAILIS - AI Execution Partner',
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description:
    'AI Execution Partner. We turn AI into business results through strategy, integration, agent deployment, and change management.',
  foundingDate: '2025',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Tbilisi',
    addressCountry: 'GE',
  },
  sameAs: ['https://twitter.com/vailis_ai', 'https://linkedin.com/company/vailis-ai'],
  knowsAbout: [
    'Artificial Intelligence',
    'AI Integration',
    'Machine Learning',
    'AI Agents',
    'Digital Transformation',
    'LLM',
    'RAG',
    'MLOps',
  ],
};

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does an AI Execution Partner do?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An AI Execution Partner takes AI from strategy to production. Unlike traditional consultants, we own the full lifecycle: readiness audit, solution design, development, deployment, change management, and ongoing optimization.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does AI integration typically take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our phased approach delivers first results in 8–16 weeks. Phase 1 Discovery takes 2–4 weeks, Phase 2 Design takes 2–6 weeks, and Phase 3 Deploy takes 4–12 weeks depending on complexity.',
      },
    },
    {
      '@type': 'Question',
      name: 'What ROI can we expect from AI integration?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ROI varies by use case. Industry data shows 74% of executives achieve ROI within the first year. Common results: 25–70% cost reduction in automated processes, 20–50% productivity gains, 82% faster resolution times.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you work with specific AI models or platforms?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We are model-agnostic. We work with OpenAI, Anthropic, open-source models, and cloud platforms (AWS, Azure, Google Cloud). We select the optimal architecture for each use case to avoid vendor lock-in.',
      },
    },
  ],
};

export const serviceSchemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'AI Strategy & Audit',
    provider: { '@type': 'Organization', name: 'VAILIS.ai' },
    description:
      'Assessment of AI readiness, opportunity mapping, ROI projections, technology stack evaluation.',
    areaServed: 'Worldwide',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'AI Integration & Development',
    provider: { '@type': 'Organization', name: 'VAILIS.ai' },
    description:
      'Custom LLM solutions, API integration, workflow automation, RAG systems.',
    areaServed: 'Worldwide',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'AI Agent Deployment',
    provider: { '@type': 'Organization', name: 'VAILIS.ai' },
    description:
      'Autonomous agents for customer service, operations, marketing. Human-in-the-loop design.',
    areaServed: 'Worldwide',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Training & Change Management',
    provider: { '@type': 'Organization', name: 'VAILIS.ai' },
    description:
      'Team upskilling, process redesign, adoption support, AI literacy.',
    areaServed: 'Worldwide',
  },
];
