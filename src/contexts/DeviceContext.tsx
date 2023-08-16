import React, { useState } from 'react'

type DeviceContextProps = {
    ios?: boolean
    setIos?: (push: boolean) => void
}

export const DeviceContext = React.createContext<DeviceContextProps>({
    ios: undefined,
    setIos: () => null
})

type Props = {
    children: React.ReactNode
}

const DeviceProvider = ({children}: Props) => {

    const [ios, setIos] = useState<boolean>(true)

    return (
        <DeviceContext.Provider value={{ios,setIos}}>
            {children}
        </DeviceContext.Provider>
    )
}

const useDevice = () => { 
    return React.useContext(DeviceContext)
}

export {DeviceProvider, useDevice}

