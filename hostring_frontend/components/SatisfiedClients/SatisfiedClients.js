import React from 'react'
import './satisfiedclients.sass'


export default () => {
    const clients = [
        'apple',
        'disney',
        'microsoft',
        'mountain',
        'sony',
        'time'
    ];

    return (
        <section className="mt-5 satisfied-clients">
            <p className="text-center">Some of our satisfied clients include...</p>
            <div className="d-flex justify-content-center mb-5 clients">
                {clients.map((v,i)=> <img key={v} src={`/static/imgs/${v}.png`}/>)}
            </div>
        </section>
    )
}