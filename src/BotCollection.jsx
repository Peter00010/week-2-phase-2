// /* eslint-disable react/prop-types */
// import './App.css';

// const BotCollection = ({ bots, enlistBot, dischargeBot }) => {
//     const handleEnlistment = (bot) => {
//         enlistBot(bot);
//     };

//     const handleDischarge = (botId) => {
//         dischargeBot(botId);
//     };

//     return (
//         <div>
//         <h2>Bot Collection</h2>
//         <div className="bot-list">
//             {bots.map(bot => (
//             <div key={bot.id} className="bot-card" onClick={() => handleEnlistment(bot)}>
//                 <h3>{bot.name}</h3>
//                 <img className='avatar' src={bot.avatar_url} alt="bot" />
//                 <p>Health: {bot.health}</p>
//                 <p>Damage: {bot.damage}</p>
//                 <div className="buttons">
//                     <button className="delete" onClick={() => handleDischarge(bot.id)}>X</button>
//                 </div>
//             </div>
//             ))}
//         </div>
//         </div>
//     );
// }

// export default BotCollection;


/* eslint-disable react/prop-types */
import './App.css';

const BotCollection = ({ bots, enlistBot, dischargeBot }) => {
    const handleEnlistment = (bot) => {
        enlistBot(bot);
    };

    const handleDischarge = (botId) => {
        // Remove the bot with the specified ID from the state
        const updatedBots = bots.filter(bot => bot.id !== botId);
        // Update the state with the filtered array
        setBots(updatedBots);
        // Call the dischargeBot function passed as a prop
        dischargeBot(botId);
    };
    

    return (
        <div>
            <h2>Bot Collection</h2>
            <div className="bot-list">
                {bots.map(bot => (
                    <div key={bot.id} className="bot-card">
                        <h3>{bot.name}</h3>
                        <img className='avatar' src={bot.avatar_url} alt="bot" />
                        <p>Health: {bot.health}</p>
                        <p>Damage: {bot.damage}</p>
                        <div className="buttons">
                            <button className="enlist" onClick={() => handleEnlistment(bot)}>Enlist</button>
                            <button className="delete" onClick={() => handleDischarge(bot.id)}>X</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BotCollection;
