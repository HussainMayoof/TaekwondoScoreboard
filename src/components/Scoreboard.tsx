import Score from './Score.tsx';
import Penalty from './Penalty.tsx';

const Scoreboard = () => {
    return (
        <div className="flex flex-col h-screen max-h-screen max-w-screen">
            <div className="flex h-1/2">
                <Score player={1} />
                <Score player={2} />
            </div>

            <div className="flex h-1/2">
                <Penalty player={1} />
                <Penalty player={2} />
            </div>
        </div>
    );
};

export default Scoreboard;
