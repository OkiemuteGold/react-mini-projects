const JobTabs = ({ jobs, value, setCurrentValue }) => {
    return (
        <div className="btn-container">
            {
                jobs.map((item, index) => {
                    return (
                        <button
                            key={item.id}
                            onClick={() => setCurrentValue(index)}
                            className={`job-btn ${index === value && 'active-btn'}`}
                        >
                            {item.company}
                        </button>
                    )
                })
            }
        </div>
    )
}

export default JobTabs;