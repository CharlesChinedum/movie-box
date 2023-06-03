import Link from 'next/link'
import React from 'react'

const BackButton = () => {
    return (
        <div className="text-center border-[1px] border-[#BE123C] rounded-md w-[5rem]">
            <Link href="/">
                <span>Back</span>
            </Link>
        </div>
    )
}

export default BackButton