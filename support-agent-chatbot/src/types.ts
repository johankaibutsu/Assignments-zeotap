export interface Message {
  id: string;
  content: string;
  type: 'user' | 'bot';
  timestamp: Date;
}

export interface CDP {
  name: string;
  docsUrl: string;
  description: string;
}

export const CDPs: CDP[] = [
  {
    name: 'Segment',
    docsUrl: 'https://segment.com/docs/?ref=nav',
    description: 'Customer Data Platform for collecting, cleaning, and controlling customer data'
  },
  {
    name: 'mParticle',
    docsUrl: 'https://docs.mparticle.com/',
    description: 'Enterprise customer data infrastructure solution'
  },
  {
    name: 'Lytics',
    docsUrl: 'https://docs.lytics.com/',
    description: 'Customer Data Platform with ML-powered insights'
  },
  {
    name: 'Zeotap',
    docsUrl: 'https://docs.zeotap.com/home/en-us/',
    description: 'Unified customer data and identity platform'
  }
];