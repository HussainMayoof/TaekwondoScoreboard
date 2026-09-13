import { useContext, useEffect, useState } from 'react';
import Button from './Button.tsx';
import { ScoreContext } from '../context.ts';
import type { ScoreContextType } from '../types.ts';

const Timer = () => {
    const { scoreActions } = useContext(ScoreContext) as ScoreContextType;
    const [time, setTime] = useState(120);
    const [running, setRunning] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            if (running) {
                if (time > 0) {
                    setTime(time - 1);
                }
            }
        }, 1000);
        return () => clearInterval(interval);
    }, [time, running]);

    useEffect(() => {
        if (time === 0 && running) {
            const resetTimer = () => {
                setRunning(false);
                setTime(120);
            };
            resetTimer();
        }
    }, [running, time]);

    const handleTimeChange = (difference: number) => {
        if (!running) {
            setTime(Math.max(time + difference, 0));
        }
    };

    const handleReset = () => {
        setRunning(false);
        setTime(120);
        scoreActions.reset();
    };

    return (
        <div className="flex h-full text-center justify-center">
            <div className="grid grid-cols-1 w-12">
                <Button onClick={() => handleTimeChange(60)}>+</Button>
                <Button onClick={() => handleTimeChange(-60)}>-</Button>
            </div>

            <div>
                <p>Round 1</p>

                <p
                    className={`font-[Seven_Segment] text-8xl flex-1 ${!running && 'text-yellow-400'}`}
                    onClick={() => setRunning(!running)}
                >
                    {new Date(time * 1000)
                        .getUTCMinutes()
                        .toString()
                        .padStart(2, '0') +
                        ':' +
                        new Date(time * 1000)
                            .getUTCSeconds()
                            .toString()
                            .toString()
                            .padStart(2, '0')}
                </p>

                <div>
                    <svg
                        height="32"
                        width="32"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        className="fill-white mx-auto mt-3 cursor-pointer"
                        onClick={handleReset}
                    >
                        <path d="M22.719 12A10.719 10.719 0 0 1 1.28 12h.838a9.916 9.916 0 1 0 1.373-5H8v1H2V2h1v4.2A10.71 10.71 0 0 1 22.719 12z" />
                        <path fill="none" d="M0 0h24v24H0z" />
                    </svg>
                </div>
            </div>

            <div className="grid grid-cols-1 w-12">
                <Button onClick={() => handleTimeChange(1)}>+</Button>
                <Button onClick={() => handleTimeChange(-1)}>-</Button>
            </div>
        </div>
    );
};

export default Timer;
