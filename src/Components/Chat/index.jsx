import VideoChatContainer from './VideoChatContainer';
import './chat.css'

function Chat () {
    console.log('Chat')
    
    return (
        <div className="chat">
            <h1>Kiosko Video Show</h1>
            <h2>Ingresar a la Visita</h2>
            <VideoChatContainer/>
        </div>
        
    )
}

export default Chat;