/* eslint-disable react/prop-types */
import './App.css';

const YourArmy = ({ enlistedBots, releaseBot }) => {
    const handleRelease = (botId) => {
        releaseBot(botId);
    };

    return (
        <div className="bots">
        <h2>Your Bot Army</h2>
        {enlistedBots.map(bot => (
            <div key={bot.id} className="bot-card">
            <h3>{bot.name}</h3>
                <img className='avatar' src={bot.avatar_url} alt="bot" />
                <p>Health: {bot.health}</p>
                <p>Damage: {bot.damage}</p>
                <p>Class: {bot.bot_class}</p>
                <button className="release" onClick={() => handleRelease(bot.id)}>Release</button>
            </div>
        ))}
        </div>
    );
    }

export default YourArmy;
