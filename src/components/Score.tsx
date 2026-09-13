import { useContext } from 'react';
import { ScoreContext } from '../context.ts';
import type { ScoreContextType } from '../types.ts';
import Button from './Button.tsx';

type Props = {
    player: 1 | 2;
};

const Score = ({ player }: Props) => {
    const { score, scoreActions } = useContext(
        ScoreContext
    ) as ScoreContextType;
    const playerIndex = player - 1;

    const handleScoreChange = (difference: number) => {
        scoreActions.changeScore(playerIndex, difference);
    };

    return (
        <div
            className={`flex items-stretch w-full ${player === 2 && 'flex-row-reverse'}`}
        >
            <div className="grid grid-cols-1 w-1/5">
                <Button onClick={() => handleScoreChange(1)}>+</Button>
                <Button onClick={() => handleScoreChange(-1)}>-</Button>
            </div>

            <div
                className={`${player === 1 ? 'bg-red-600' : 'bg-blue-600'} text-center w-4/5`}
                onClick={() => handleScoreChange(2)}
            >
                <p>Player {player}</p>
                <p className="font-[Seven_Segment] text-9xl">
                    {score[playerIndex].score}
                </p>
            </div>
        </div>
    );
};

export default Score;
