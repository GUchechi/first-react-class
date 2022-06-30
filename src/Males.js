const Males = ({ guys}) => {
    
    return (
        <div>
            <ul>
                {
                    guys.map((guy) =>(<li>{guy.name}</li>))
                }
            </ul>
        </div>
    );
}

export default Males;