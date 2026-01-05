import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { ProductList } from './components/ProductList';

function App() {
    const [allProducts, setAllProducts] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    const [total, setTotal] = useState(0);
    const [countProducts, setCountProducts] = useState(0);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(allProducts));
    }, [allProducts]);

    useEffect(() => {
        const newTotal = allProducts.reduce((acc, item) => acc + (item.price * item.quantity), 0);
        const newCount = allProducts.reduce((acc, item) => acc + item.quantity, 0);
        
        setTotal(newTotal);
        setCountProducts(newCount);
    }, [allProducts]);

	return (
		<>
			<Header
				allProducts={allProducts}
				setAllProducts={setAllProducts}
				total={total}
				setTotal={setTotal}
				countProducts={countProducts}
				setCountProducts={setCountProducts}
			/>
			<ProductList
				allProducts={allProducts}
				setAllProducts={setAllProducts}
				total={total}
				setTotal={setTotal}
				countProducts={countProducts}
				setCountProducts={setCountProducts}
			/>
		</>
	);
}

export default App;