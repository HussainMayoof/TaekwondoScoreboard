export type PlayerScore = { score: number; penalty: number };

export type ScoreType = [PlayerScore, PlayerScore];

export type ScoreContextType = {
    score: ScoreType;
    scoreActions: {
        changeScore: (index: number, difference: number) => void;
        changePenalty: (index: number, difference: number) => void;
        reset: () => void;
    };
};
