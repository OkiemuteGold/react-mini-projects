import React, { useState, useEffect } from 'react'
import Loading from "./Loading"
import JobInfo from "./JobInfo";

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'

function App() {
    const [loading, setLoading] = useState(true)
    const [jobs, setJobs] = useState([])
    const [value, setValue] = useState(0)

    const fetchJobs = async () => {
        const response = await fetch(url)
        const allJobs = await response.json()

        setJobs(allJobs)
        setLoading(false)
    }

    useEffect(() => {
        fetchJobs()
    }, [])

    if (loading) {
        return (
            <Loading />
        )
    }

    const singleJob = jobs[value];

    return (
        <section className="section">
            <div className="title">
                <h2>experience</h2>
                <div className="underline"></div>
            </div>

            <div className="jobs-center">
                {/* btn container */}
                <div className="btn-container">
                    {
                        jobs.map((item, index) => {
                            return (
                                <button
                                    key={item.id}
                                    onClick={() => setValue(index)}
                                    className={`job-btn ${index === value && 'active-btn'}`}
                                >
                                    {item.company}
                                </button>
                            )
                        })
                    }
                </div>

                {/* job info */}
                <JobInfo infos={singleJob} />
            </div>

            <button type="button" className="btn">
                more info
            </button>
        </section>
    )
}

export default App
