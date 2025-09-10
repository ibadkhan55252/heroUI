import { Input } from '@heroui/react'
import React from 'react'

const CustomInput = ({ ...props }) => {
    return (
        <Input
            label="text"
            labelPlacement={"outside-top"}
            type="text"
            {...props}
        />
    )
}

export default CustomInput