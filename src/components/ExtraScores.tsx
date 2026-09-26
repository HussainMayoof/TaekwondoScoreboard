import { useContext } from 'react';
import { ScoreContext } from '../context.ts';
import type { ScoreContextType } from '../types.ts';

const ExtraScores = () => {
    const { scoreActions } = useContext(ScoreContext) as ScoreContextType;

    const handleScoreChange = (playerIndex: number, difference: number) => {
        scoreActions.changeScore(playerIndex, difference);
    };

    return (
        <div className="flex items-stretch text-center">
            <div
                className="border-2 flex-1 "
                onClick={() => handleScoreChange(0, 5)}
            >
                +5
            </div>

            <div
                className="border-2 flex-1"
                onClick={() => handleScoreChange(0, 3)}
            >
                +3
            </div>
            <div
                className="border-2 flex-1"
                onClick={() => handleScoreChange(1, 3)}
            >
                +3
            </div>
            <div
                className="border-2 flex-1"
                onClick={() => handleScoreChange(1, 3)}
            >
                +5
            </div>
        </div>
    );
};

export default ExtraScores;
