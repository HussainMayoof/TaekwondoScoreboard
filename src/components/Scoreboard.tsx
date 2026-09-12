import Score from './Score.tsx';

const Scoreboard = () => {
    return (
        <div className="flex flex-row">
            <Score player={1} />
            <Score player={2} />
        </div>
    );
};

export default Scoreboard;
