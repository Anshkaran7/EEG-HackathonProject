import Link from 'next/link'
import React from 'react'

function LinkItem({ children, activeTab, currentTab, redirectUrl }) {
    return (
        <Link href={redirectUrl ? redirectUrl : ""} className={`flex items-center gap-4 px-4 py-2 duration-200 rounded-full active:scale-100 hover:scale-105 hover:bg-gray-200 font-medium ${activeTab === currentTab ? 'text-theme-purple' : 'text-theme-gray'}`}>
            {children}
        </Link>
    )
}

export default LinkItem