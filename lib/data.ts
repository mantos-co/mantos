import type { Topic } from './types';

export const topics: Topic[] = [
  {
    num: '01',
    title: 'Geophysics',
    body: 'Seismic, electromagnetic, gravity and magnetic data, handled with the physics that generated it. Acquisition design through interpretation.',
    tags: ['Seismic imaging', 'EM & resistivity', 'Potential fields'],
  },
  {
    num: '02',
    title: 'Inverse Problems',
    body: 'Ill-posed by nature. We formulate, regularise and solve them, and report the uncertainty instead of hiding it.',
    tags: ['Full-waveform inversion', 'Bayesian methods', 'Uncertainty'],
  },
  {
    num: '03',
    title: 'AI Solutions',
    body: 'Learned surrogates and physics-informed models that make heavy inversions fast enough to use in the field, deployed as real software.',
    tags: ['Neural operators', 'Physics-informed ML', 'Deployment'],
  },
];
