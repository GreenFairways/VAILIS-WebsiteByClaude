export type CaseStudy = {
  slug: string;
  industry: string;
  company: string;
  challenge: string;
  solution: string;
  results: string[];
  keyLesson: string;
  metrics: { label: string; value: string }[];
  techStack: string[];
  ceoRelevance?: string;
  cfoRelevance?: string;
  ctoRelevance?: string;
  cooRelevance?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: 'klarna-ai-customer-service',
    industry: 'Fintech / E-commerce',
    company: 'Klarna',
    challenge:
      'Scaling customer support while maintaining quality and controlling costs',
    solution:
      'AI-powered customer service assistant handling majority of chat interactions with human escalation for complex cases',
    results: [
      '$60M annual savings in customer service',
      '2/3 of all customer service chats handled by AI',
      'Resolution time: 2 min (AI) vs 11 min (human)',
      'Improved customer satisfaction scores',
    ],
    keyLesson:
      'AI + Human hybrid delivers optimal results. Automation for scale, humans for complexity.',
    metrics: [
      { label: 'Annual savings', value: '$60M' },
      { label: 'Chats handled by AI', value: '2/3' },
      { label: 'Resolution time reduction', value: '82%' },
    ],
    techStack: ['LLMs', 'NLP', 'Conversational AI', 'Human-in-the-loop'],
    ceoRelevance: 'Massive cost reduction while improving customer experience',
    cfoRelevance: '$60M clear ROI, predictable cost structure',
    ctoRelevance: 'Human-AI handoff architecture, LLM integration',
    cooRelevance: 'Scalable support without proportional headcount growth',
  },
  {
    slug: 'duolingo-ai-content',
    industry: 'EdTech',
    company: 'Duolingo',
    challenge:
      'Scaling content production and personalization to support rapid global growth',
    solution:
      'AI-first approach: AI-generated courses, personalized learning paths, Max subscription with AI tutor',
    results: [
      '51% user growth year-over-year',
      '$1B revenue forecast',
      '4–5x content production per employee',
      '148 new courses in 1 year (vs 12 years for first 100)',
    ],
    keyLesson:
      "AI amplifies human capability. They didn't replace people—they multiplied their output.",
    metrics: [
      { label: 'User growth', value: '51%' },
      { label: 'Content productivity', value: '4-5x' },
      { label: 'New courses (1 year)', value: '148' },
    ],
    techStack: ['GPT-4', 'LLMs', 'Generative AI', 'Personalization engines'],
    ceoRelevance: '$1B revenue trajectory, category leadership',
    cfoRelevance: 'Revenue growth outpacing cost growth',
    ctoRelevance: 'Generative AI at scale, AI-first product strategy',
    cooRelevance: 'Content operations transformed by AI',
  },
  {
    slug: 'unilever-supply-chain',
    industry: 'Consumer Goods / Manufacturing',
    company: 'Unilever',
    challenge:
      'Optimizing global supply chain, reducing waste, improving demand forecasting',
    solution:
      '500+ AI projects across value chain: digital twins, IoT, demand forecasting, smart freezers, factory optimization',
    results: [
      '$400M+ in annual savings',
      '98% product availability',
      '30% sales increase from AI-enabled freezers (Mexico pilot)',
      '10% forecast accuracy improvement',
      '3% OEE improvement, 5% labor productivity rise',
    ],
    keyLesson:
      'End-to-end AI integration across the value chain delivers more than isolated point solutions.',
    metrics: [
      { label: 'Annual savings', value: '$400M+' },
      { label: 'Product availability', value: '98%' },
      { label: 'Sales lift (smart freezers)', value: '30%' },
    ],
    techStack: ['Digital twins', 'IoT', 'ML forecasting', 'Computer vision'],
    ceoRelevance: '$400M savings demonstrates enterprise-scale AI value',
    cfoRelevance: 'Quantifiable savings across multiple dimensions',
    ctoRelevance: 'Digital twins, IoT, 13B daily computations at scale',
    cooRelevance: 'End-to-end supply chain optimization with measurable KPIs',
  },
  {
    slug: 'american-express-customer-intelligence',
    industry: 'Financial Services',
    company: 'American Express',
    challenge:
      'Handling massive volume of customer inquiries while maintaining premium service quality',
    solution:
      'AI-powered chatbot for customer service automation + predictive fraud detection algorithms',
    results: [
      '25% reduction in customer service costs',
      '70% of customer queries resolved autonomously',
      '25% increase in conversion rates during chatbot interactions',
      '3x faster response and resolution time',
      'Improved fraud detection accuracy',
    ],
    keyLesson:
      'In financial services, AI must balance automation with trust and security—rigorous compliance integration is essential.',
    metrics: [
      { label: 'Cost reduction', value: '25%' },
      { label: 'Autonomous resolution', value: '70%' },
      { label: 'Conversion increase', value: '25%' },
    ],
    techStack: ['NLP', 'Fraud detection ML', 'Compliance frameworks'],
    ceoRelevance: 'Dual bottom-line impact: cost + revenue',
    cfoRelevance: 'Clear financial impact on both cost and revenue',
    ctoRelevance: 'Enterprise-grade AI with financial compliance',
    cooRelevance: '70% autonomous resolution reduces operational burden',
  },
  {
    slug: 'siemens-predictive-maintenance',
    industry: 'Manufacturing / Industrial',
    company: 'Siemens',
    challenge:
      'Unplanned machinery failures causing costly downtime and disrupted production',
    solution:
      'AI-powered predictive maintenance system analyzing real-time sensor data to forecast and prevent equipment malfunctions',
    results: [
      'Significant reduction in unplanned downtime',
      'Improved asset utilization and production reliability',
      'Minimized workflow interruptions',
      'Predictive alerts enabling proactive maintenance scheduling',
      'Reduced maintenance costs through optimized scheduling',
    ],
    keyLesson:
      'Predictive AI transforms maintenance from reactive cost center to proactive value driver. ROI comes from avoiding catastrophic failures.',
    metrics: [
      { label: 'Unplanned downtime', value: 'Reduced' },
      { label: 'Asset utilization', value: 'Improved' },
      { label: 'Maintenance costs', value: 'Optimized' },
    ],
    techStack: ['IoT sensors', 'Time-series ML', 'Digital twins'],
    ceoRelevance: 'Operational resilience and competitive advantage',
    cooRelevance: 'Elimination of unplanned downtime',
    ctoRelevance: 'IoT + ML integration, real-time data at scale',
    cfoRelevance: 'Predictable maintenance vs emergency repairs',
  },
  {
    slug: 'coca-cola-digital-transformation',
    industry: 'Consumer Goods / Beverages',
    company: 'Coca-Cola',
    challenge:
      'Modernizing legacy operations, improving demand forecasting, and enabling data-driven decision making',
    solution:
      'End-to-end AI integration: demand forecasting, digital twins for factories, AI-enabled cooler optimization, supply chain digitization',
    results: [
      '12% sales growth in <1 year (Mexico pilot)',
      'Up to 30% sales increase from AI-enabled freezers',
      '3% OEE improvement, 5% labor productivity rise, 8% cost reduction',
      '10% forecast accuracy improvement for seasonal products',
    ],
    keyLesson:
      'AI delivers maximum value when integrated end-to-end across the value chain, not as isolated point solutions.',
    metrics: [
      { label: 'Sales growth (Mexico)', value: '12%' },
      { label: 'Sales lift (smart freezers)', value: '30%' },
      { label: 'Cost reduction', value: '8%' },
    ],
    techStack: ['Digital twins', 'Demand forecasting', 'IoT', 'Computer vision'],
    ceoRelevance: 'Enterprise-scale AI value across value chain',
    cooRelevance: 'End-to-end supply chain optimization',
    cfoRelevance: 'Quantifiable savings across operations',
    ctoRelevance: 'Digital twins, IoT integration at scale',
  },
];
