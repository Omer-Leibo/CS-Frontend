import "./styles/ComponentsStyle.css";

const MentorView = ({ blockId, block, receivedMessage}) => {
    return <div>
    {
    receivedMessage.block_id === blockId ?
        <div className="view">
            <h1>{block.title}</h1>
            <textarea readOnly={true} style={{backgroundColor: 'black', color: 'white'}} 
            defaultValue={block.code} value={receivedMessage.received_message} rows={20} cols={100}/> 
        </div>:
        <div className="view">
            <h1>{block.title}</h1>
            <textarea readOnly={true} style={{backgroundColor: 'black', color: 'white'}} 
            defaultValue={block.code} rows={20} cols={100} />
        </div>
        }
    </ div>
}

export default MentorView;

