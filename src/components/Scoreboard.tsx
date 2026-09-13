import Score from './Score.tsx';
import Penalty from './Penalty.tsx';
import Timer from './Timer.tsx';

const Scoreboard = () => {
    return (
        <div className="grid grid-cols-12 grid-rows-2 h-screen max-h-screen max-w-screen overflow-hidden">
            <div className="col-span-6">
                <Score player={1} />
            </div>

            <div className="col-span-6">
                <Score player={2} />
            </div>

            <div className="col-span-3">
                <Penalty player={1} />
            </div>

            <div className="col-span-6">
                <Timer />
            </div>

            <div className="col-span-3">
                <Penalty player={2} />
            </div>
        </div>
    );
};

export default Scoreboard;
