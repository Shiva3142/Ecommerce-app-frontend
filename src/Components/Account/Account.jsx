import React, { useState } from 'react'
import Header from '../Templates/Header'
import '../../Styles/Account/Account.scss'
import { Container } from '@mui/material'
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import Profile from './Profile';
import Orders from './Orders';
import WishList from './WishList';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
function Account() {
    let [togglePage, updatetogglePage] = useState(0)
    return (
        <div className='AccountPageContainer'>
            <Header />
            <hr />
            <Container>
                <div className="accountContainer">
                    <div className="accountOptions">
                        <div className="option" onClick={() => {
                            updatetogglePage(0)
                        }}>
                            <AccountBoxIcon />
                            <span>
                                Profile
                            </span>
                        </div>
                        <div className="option" onClick={() => {
                            updatetogglePage(1)
                        }}>
                            <LocalMallOutlinedIcon />
                            <span>
                                Orders
                            </span>
                        </div>
                        <div className="option" onClick={() => {
                            updatetogglePage(2)
                        }}>
                            <BookmarksIcon />
                            <span>
                                Wishlist
                            </span>
                        </div>
                    </div>
                    {
                        togglePage === 0 ? (<>
                            <Profile />
                        </>) : (
                            <>
                                {
                                    togglePage === 1 ? (<>
                                        <Orders />
                                    </>) : (
                                        <>
                                            <WishList />
                                        </>
                                    )
                                }
                            </>
                        )
                    }
                </div>
            </Container>
        </div>
    )
}

export default Account
