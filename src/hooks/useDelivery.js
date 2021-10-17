import { useState } from "react"

const useDelivery = () => {
    const [userInfo, setUserInfo] = useState({
        fullName: '',
        email: '',
        address: '',
        phone: '',
        save: false
    })

    return [userInfo, setUserInfo];
}

export default useDelivery;