import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { timer } from '../app/user/userSlice'


function Header() {
    const dispatch = useDispatch()
    const userTimeElapsed = useSelector((state) => state.user.userTimeElapsed)


    return (
        <div className='header'>
            <button onClick={() => dispatch(timer())}>Giriş Yap</button>
            <br /><br />
            <span>{userTimeElapsed} </span>
        </div>
    )
}

export default Header