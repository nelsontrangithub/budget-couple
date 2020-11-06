import { defaultCipherList } from 'constants'
import React from 'react'

interface Props {
    
}

export const Column: React.FC<Props> = ({children}) => {
    return (
        <div className="w-full lg:w-1/2 px-8 mb-8 lg:mb-0">
            {children}
        </div>
    )
}

export default Column;