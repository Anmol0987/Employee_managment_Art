import React from 'react'

const DataCard = () => {
    return (
        <>
            <div className='h-72 w-[95vw] rounded-lg bg-white flex flex-col items-center justify-center'>
                <img className='h-48 w-48 ' src="https://static.zohocdn.com/zp5/people5/images/nodata/no_data_found.5d034c55f50a90857eac7e424b646d1a.svg" alt="" />
                <p>No time logs added currently. To add new time logs, click Log Time</p>
            </div>
        </>
    )
}

export default DataCard