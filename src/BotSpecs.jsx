/* eslint-disable react/prop-types */
import { useParams } from 'react-router-dom';

const BotSpecs = ({ bots }) => {
    const { id } = useParams();
    const bot = bots.find(bot => bot.id === parseInt(id));

    return (
        <div>
        <h2>Bot Specs</h2>
        {bot && (
            <div className="bot-specs">
            <h3>{bot.name}</h3>
            <img className='avatar' src={bot.avatar_url} alt="bot" />
            <p>Health: {bot.health}</p>
            <p>Damage: {bot.damage}</p>
            <p>Class: {bot.bot_class}</p>
            </div>
        )}
        </div>
    );
    }

export default BotSpecs;
