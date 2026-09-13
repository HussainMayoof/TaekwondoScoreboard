import { useContext } from 'react';
import { ScoreContext } from '../context.ts';
import type { ScoreContextType } from '../types.ts';
import Button from './Button.tsx';

type Props = {
    player: 1 | 2;
};

const Penalty = ({ player }: Props) => {
    const { score, scoreActions } = useContext(
        ScoreContext
    ) as ScoreContextType;
    const playerIndex = player - 1;
    const otherPlayerIndex = player % 2;

    const handlePenaltyChange = (difference: number) => {
        if (
            score[otherPlayerIndex].score + difference >= 0 &&
            score[playerIndex].penalty + difference >= 0
        ) {
            scoreActions.changeScore(otherPlayerIndex, difference);
        }
        scoreActions.changePenalty(playerIndex, difference);
    };

    return (
        <div
            className={`flex items-stretch w-full ${player === 2 && 'flex-row-reverse'}`}
        >
            <div className="grid grid-cols-1 w-1/5">
                <Button onClick={() => handlePenaltyChange(1)}>+</Button>
                <Button onClick={() => handlePenaltyChange(-1)}>-</Button>
            </div>

            <div
                className="p-12 text-center w-4/5"
                onClick={() => handlePenaltyChange(1)}
            >
                <p>Penalty</p>
                <p className="font-[Seven_Segment] text-8xl">
                    {score[playerIndex].penalty}
                </p>
            </div>
        </div>
    );
};

export default Penalty;
