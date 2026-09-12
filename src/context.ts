import { createContext } from 'react';
import type { ScoreType, ScoreContextType } from './types.ts';

export const defaultScore: ScoreType = [
    { score: 0, penalty: 0 },
    { score: 0, penalty: 0 },
];

export const ScoreContext = createContext<ScoreContextType | null>(null);
