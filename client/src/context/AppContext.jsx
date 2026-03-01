import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";


axios.defaults.withCredentials = true
axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;

export const AppContext = createContext();

export const AppContextProvider = ({children}) => {

    const currency = import.meta.env.VITE_CURRENCY
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [isseler, setIsseler] = useState(false);
    const [showUserLogin, setShowUserLogin] = useState(false);
    const [opportunities, setOpportunities] = useState([]);
    const [cartitems, setCartItems] = useState({});
    const [searchQuery, setSearchQuery] = useState({});

// fetch seller status
    const fetchSeller = async () => {
        try {
            const {data} = await axios.get('/api/seller/is-auth')
            if (data.success) {
                setIsseler(true)
            }else {
                setIsseler(false)
            }
        } catch (error) {
            setIsseler(false)
        }
    }


    // fetch seller auth status: user data and cart items
    const fetchUser = async () => {
        try {
            const {data} = await axios.get('/api/user/is-auth')
            if (data.success) {
            setUser(data.user)
            setCartItems(data.user.cartItems)
        }
        }
         catch (error) {
            setUser(null)
        }        
    }


    // fetch all products
    const fetchOpportunities = async () => {
        try {
           const {data} = await axios.get('/api/opportunities/get-all')
           if (data.success) {
            setOpportunities(data.opportunities);
           } else {
            toast.error(data.message);
           }
        } catch (error) {
            toast.error(error.message);
        }
    }

    // add product to cart
    const addToCart = (itemId) => {
        let cartData = structuredClone(cartitems)

        if (cartData[itemId]) {
            cartData[itemId] += 1
        } else {
            cartData[itemId] = 1
        }
        setCartItems(cartData)
        toast.success("added to cart")
    }

    // update cart items quantity
    const updateCartItems = (itemId, quantity) => {
        let cartData = structuredClone(cartitems)
         cartData[itemId] = quantity
         setCartItems(cartData)
         toast.success("cart updated")
    }

    // remove product from cart
    const removeFromCart = (itemId) => {
        let cartData = structuredClone(cartitems)

        if (cartData[itemId]) {
            cartData[itemId] -= 1
            if (cartData[itemId] === 0) {
                delete cartData[itemId]
            }
        }
        toast.success("removed from cart")
        setCartItems(cartData)  
    }
   // get cart item count ---------
    const getCartCount = () => {
        let totalCount = 0
        for (const item in cartitems) {
            totalCount += cartitems[item]
        }
        return totalCount
    }

    // get total cart amount ---------
    const getCartAmount = () => {
        let totalAmount = 0
        for (const items in cartitems) {
            let itemInfo = products.find((product) => product._id === items)
            if (cartitems[items] > 0) {
                totalAmount += itemInfo.offerPrice * cartitems[items]
            }
        }
        return Math.floor(totalAmount * 100) / 100
    }
 

    useEffect(() => {
        fetchUser()
        fetchSeller()
        fetchProducts()
    }, [])

    useEffect(() => {
        const updateCart = async () => {
            try {
                const {data} = await axios.post('/api/cart/update', {cartItems: cartitems})
                if (!data.success) {
                    toast.error(data.message)
                }
            } catch (error) {
                toast.error(error.message)
            }
        }

        if (user) {
            updateCart()
        }
    }, [cartitems])
    
       const value = {navigate, user, setUser, isseler, setIsseler, showUserLogin, setShowUserLogin, 
        opportunities, setOpportunities, currency, addToCart, updateCartItems, removeFromCart, cartitems, setCartItems, searchQuery, setSearchQuery
        , getCartCount, getCartAmount, axios, fetchOpportunities};

       return <AppContext.Provider value={value}>
        {children}
       </AppContext.Provider> 
}

export const useAppContext = () => {
    return useContext(AppContext);
}