import "./styles/ComponentsStyle.css";

const StudentView = ({block, codeValue, setCodeChange}) => {
    return (
    <div className="view">
        <h1>{block.title}</h1>
            <textarea style={{backgroundColor: 'black', color: 'white'}} defaultValue={block.code} onChange={setCodeChange} rows={20} cols={100}/> 
    </div>
    );
}

export default StudentView;