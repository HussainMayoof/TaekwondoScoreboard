import { useState } from 'react';
import { defaultScore, ScoreContext } from './context.ts';
import type { ScoreType } from './types.ts';
import Scoreboard from './components/Scoreboard.tsx';

const App = () => {
    const [score, setScore] = useState<ScoreType>(defaultScore);

    const scoreActions = {
        changeScore: (index: number, difference: number) => {
            setScore(
                (prevState) =>
                    prevState.toSpliced(index, 1, {
                        score: Math.max(prevState[index].score + difference, 0),
                        penalty: prevState[index].penalty,
                    }) as ScoreType
            );
        },

        changePenalty: (index: number, difference: number) => {
            setScore(
                (prevState) =>
                    prevState.toSpliced(index, 1, {
                        score: prevState[index].score,
                        penalty: Math.max(
                            prevState[index].penalty + difference,
                            0
                        ),
                    }) as ScoreType
            );
        },
    };

    return (
        <ScoreContext value={{ score, scoreActions }}>
            <div className="bg-black text-white min-h-screen">
                <Scoreboard />
            </div>
        </ScoreContext>
    );
};

export default App;
