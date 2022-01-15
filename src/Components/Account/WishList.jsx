import wishListDEtails from '../../Assets/Account/Data/wishListDEtails.json'
import WishlistProduct from './WishlistProduct'

function WishList() {
    return (
        <div className='ordersContainer WishlistContainer'>
            <h4>Your Wishlist</h4>
            <div className="orderContainer">
                {
                    wishListDEtails.map((value, index) => {
                        return (
                            <WishlistProduct key={index} data={value}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default WishList
