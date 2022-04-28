import React, { useState, useEffect } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import pizza from '../../assets/images/pizza.png'
import guarana from '../../assets/images/guarana.png'
import { PizzaList, DrinkContainer, DrinkContainerDiv } from './styles'

import { formatPrice } from '../../util/format';
import { useCart } from '../../hooks/useCart';

const mockProducts = [
  {
    id: 1,
    category: 'pizza',
    title: 'Calabresa',
    description: 'calabresa, cebola, mussarela',
    price: 20,
    discount: false
  },
  {
    id: 2,
    category: 'pizza',
    title: 'Bauru',
    description: 'calabresa, cebola, mussarela',
    price: 20,
    discount: true
  },
  {
    id: 3,
    category: 'pizza',
    title: 'Mussarela',
    description: 'calabresa, cebola, mussarela',
    price: 20,
    discount: false
  },
  {
    id: 4,
    category: 'pizza',
    title: 'Lombo',
    description: 'calabresa, cebola, mussarela',
    price: 20,
    discount: false
  },
  {
    id: 5,
    category: 'pizza',
    title: 'Três queijos',
    description: 'calabresa, cebola, mussarela',
    price: 20,
    discount: false
  },
  {
    id: 6,
    category: 'pizza',
    title: 'Três queijos',
    description: 'calabresa, cebola, mussarela',
    price: 20,
    discount: false
  },
  {
    id: 7,
    category: 'pizza',
    title: 'Três queijos',
    description: 'calabresa, cebola, mussarela',
    price: 20,
    discount: false
  },
  {
    id: 8,
    category: 'bebida',
    title: 'Coca Cola 2L',
    description: '',
    price: 10,
    discount: false
  },
  {
    id: 9,
    category: 'bebida',
    title: 'Guaraná 2L',
    description: '',
    price: 9,
    discount: false
  },
]

interface Product {
  id: number;
  category: string;
  title: string;
  description: string;
  price: number;
  discount: boolean;
}

interface ProductFormatted extends Product {
  priceFormatted: string;
}

interface CartItemsAmount {
  [key: number]: number;
}

const Home = (): JSX.Element => {
  const [products, setProducts] = useState<ProductFormatted[]>([]);
  const { addProduct, cart } = useCart();

  const cartItemsAmount = cart.reduce((sumAmount, product) => {
    const newSumAmount = { ...sumAmount };
    newSumAmount[product.id] = product.amount;

    return newSumAmount
  }, {} as CartItemsAmount)

  useEffect(() => {
    function loadProducts() {
      const data = mockProducts.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price)
      }))

      setProducts(data)
    }

    loadProducts()
  }, [])

  function handleAddProduct(id: number) {
    addProduct(id)
  }

  return (
    <>
      <PizzaList>
        {products.map(product => {
          if (product.category === 'pizza') {
            return (
              <li key={product.id}>
                <img src={pizza} alt={product.title} width="100" height="100" />
                <strong>{product.title}</strong>
                <strong>{product.description}</strong>
                <span>R$ {product.discount ? product.price * 0.8 : product.price}</span>
                <button
                  type="button"
                  data-testid="add-product-button"
                  onClick={() => handleAddProduct(product.id)}
                >
                  <div data-testid="cart-product-quantity">
                    <MdAddShoppingCart size={16} color="#FFF" />
                    {cartItemsAmount[product.id] || 0}
                  </div>

                  <span>ADICIONAR AO CARRINHO</span>
                </button>

                {product.discount && (
                  <div style={{
                    position: 'absolute',
                    color: '#68D391',
                    top: '10px',
                    right: '10px',
                    borderStyle: 'solid',
                    borderWidth: '1',
                    borderColor: '#68D391',
                    height: 80,
                    width: 80,
                    borderRadius: 70,
                    verticalAlign: 'middle',
                    textAlign: 'center',
                    alignItems: 'center',
                    display: 'flex',
                    justifyContent: 'center'
                  }}>
                    Promoção do dia!
                  </div>
                )}
              </li>
            )
          }
        })}
      </PizzaList>
      <DrinkContainer>
        <p style={{ padding: '10px', fontSize: 18 }}>{'Destilados & Drinks'}</p>

        <div style={{ display: 'flex' }}>
          {products.map(product => {
            if (product.category === 'bebida') {
              return (
                <DrinkContainerDiv>
                  <img src={guarana} alt={product.title} width="80" height="80" />
                  <strong>{product.title}</strong>
                  <span>{product.priceFormatted}</span>
                  <button
                    type="button"
                    data-testid="add-product-button"
                    onClick={() => handleAddProduct(product.id)}
                  >
                    <div data-testid="cart-product-quantity">
                      <MdAddShoppingCart size={16} color="#242424" />
                      {cartItemsAmount[product.id] || 0}
                    </div>

                    <span>ADICIONAR</span>
                  </button>
                </DrinkContainerDiv>
              )
            }
          })}

        </div>
      </DrinkContainer>
    </>
  )
}

export default Home;