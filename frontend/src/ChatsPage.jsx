import {PrettyChatWindow} from 'react-chat-engine-pretty';
import { MultiChatSocket,MultiChatWindow,useMultiChatLogic } from 'react-chat-engine-advanced';

const ChatsPage = (props) =>{
    const chatProps = useMultiChatLogic('ce783113-558e-4f51-a849-c0172dd25278',
    props.user.username,
    props.user.secret
    );
    return (
        <div style={{height : '100vh'}}>
            <MultiChatSocket {...chatProps}/>
            <MultiChatWindow {...chatProps} style={{height : '100%'}}/>
        </div>
    )
    
}

export default ChatsPage;

