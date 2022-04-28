import { createContext, ReactNode, useContext, useState } from 'react';
import { Product } from '../types';

interface CartProviderProps {
  children: ReactNode;
}

interface UpdateProductAmount {
  productId: number;
  amount: number;
}

interface CartContextData {
  cart: Product[];
  addProduct: (productId: number) => Promise<void>;
  removeProduct: (productId: number) => void;
  updateProductAmount: ({ productId, amount }: UpdateProductAmount) => void;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

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

export function CartProvider({ children }: CartProviderProps): JSX.Element {
  const [cart, setCart] = useState<Product[]>(() => {
    const storagedCart = localStorage.getItem('@IaraPizza:cart')

    if (storagedCart) {
      return JSON.parse(storagedCart);
    }

    return [];
  });

  const addProduct = async (productId: number) => {
    try {
      const updatedCart = [...cart]

      const productExists = updatedCart.find(product => product.id === productId)

      const currentAmount = productExists ? productExists.amount : 0
      const amount = currentAmount + 1;

      if (productExists) {
        productExists.amount = amount
      } else {
        const product = mockProducts.find(product => product.id === productId)

        const newProduct: any = {
          ...product,
          amount: 1
        }

        updatedCart.push(newProduct)
      }
      setCart(updatedCart)
      localStorage.setItem('@IaraPizza:cart', JSON.stringify(updatedCart))
    } catch {
      console.log('erro')
    }
  };

  const removeProduct = (productId: number) => {
    try {
      const updatedCart = [...cart]
      const productIndex = updatedCart.findIndex(product => product.id === productId);

      if (productIndex >= 0) {
        updatedCart.splice(productIndex, 1)
        setCart(updatedCart)
        localStorage.setItem('@IaraPizza:cart', JSON.stringify(updatedCart))
      } else {
        throw Error();
      }
    } catch {
      console.log('error')
    }
  };

  const updateProductAmount = async ({
    productId,
    amount,
  }: UpdateProductAmount) => {
    try {
      if (amount <= 0) {
        return;
      }

      const updatedCart = [...cart];
      const productExists = updatedCart.find(product => product.id === productId);

      if (productExists) {
        productExists.amount = amount
        setCart(updatedCart)
        localStorage.setItem('@IaraPizza:cart', JSON.stringify(updatedCart))
      } else {
        throw Error()
      }
    } catch {
      console.log('error')
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, addProduct, removeProduct, updateProductAmount }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextData {
  const context = useContext(CartContext);

  return context;
}
