import { useEffect, useState } from 'react';
import Button from './Button.tsx';

const Timer = () => {
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
            </div>

            <div className="grid grid-cols-1 w-12">
                <Button onClick={() => handleTimeChange(1)}>+</Button>
                <Button onClick={() => handleTimeChange(-1)}>-</Button>
            </div>
        </div>
    );
};

export default Timer;
