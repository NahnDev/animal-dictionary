import { atom } from 'recoil'
import { User } from '../types/User'

const initialValue: User = {
    name: '',
    username: '',
    role: 'VIEWER',
    _id: '',
}

export const userState = atom({
    key: 'user',
    default: {
        isLogin: false,
        ...initialValue,
    },
})
