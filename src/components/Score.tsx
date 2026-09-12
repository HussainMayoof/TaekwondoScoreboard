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
    const otherPlayerIndex = player % 2;

    const handleScoreChange = (difference: number) => {
        scoreActions.changeScore(playerIndex, difference);
    };

    const handlePenaltyChange = (difference: number) => {
        scoreActions.changePenalty(playerIndex, difference);
        scoreActions.changeScore(otherPlayerIndex, difference);
    };

    return (
        <div className="w-full">
            <div
                className={`flex items-stretch ${player === 2 && 'flex-row-reverse'}`}
            >
                <div className="flex flex-col">
                    <Button onClick={() => handleScoreChange(1)}>+</Button>
                    <Button onClick={() => handleScoreChange(-1)}>-</Button>
                </div>

                <div
                    className={`${player === 1 ? 'bg-red-600' : 'bg-blue-600'} text-center w-full`}
                    onClick={() => handleScoreChange(2)}
                >
                    <p>Player {player}</p>
                    <p className="font-[Seven_Segment] text-9xl">
                        {score[playerIndex].score}
                    </p>
                </div>
            </div>

            <div
                className={`flex items-stretch ${player === 2 && 'flex-row-reverse'}`}
            >
                <div className="flex flex-col">
                    <Button onClick={() => handlePenaltyChange(1)}>+</Button>
                    <Button onClick={() => handlePenaltyChange(-1)}>-</Button>
                </div>

                <div className="p-8 text-center">
                    <p>Penalty</p>
                    <p className="font-[Seven_Segment] text-8xl">
                        {score[playerIndex].penalty}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Score;
