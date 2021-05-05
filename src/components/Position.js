import React from 'react'
import css from './Position.module.css'

export default function Position({children}) {
    const {position} = css
    return (
        <div className={position}>
            {children}
        </div>
    )
}
