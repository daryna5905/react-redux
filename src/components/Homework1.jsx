import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewProduct } from '../redux/Homework1/slices/productSlice';

function Homework1() {
  const [inputValue, setInputValue] = useState('');
  const productNameRef = useRef(null);
  const dispatch = useDispatch();

  const filteredProducts = useSelector((state) =>
    state.product.products.filter((product) =>
      product.name.toLowerCase().includes(inputValue.trim().toLowerCase()),
    ),
  );
  return (
    <div className='homework-card'>
      <div className='homework-heading'>
        <p className='eyebrow'>Redux practice</p>
        <h1>Список товарів</h1>
        <p>Шукайте наявні товари або додайте новий до списку.</p>
      </div>

      <div className='product-controls'>
        <input
          type='text'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder='Пошук товару'
        />
        <div className='add-product'>
          <input type='text' placeholder='Новий товар' ref={productNameRef} />
          <button
            onClick={() => {
              dispatch(addNewProduct(productNameRef.current.value));
              return (productNameRef.current.value = '');
            }}
          >
            Додати
          </button>
        </div>
      </div>

      <ul className='product-list'>
        {filteredProducts.length !== 0 &&
          filteredProducts.map((product) => (
            <li key={product.id}>{product.name}</li>
          ))}
      </ul>
    </div>
  );
}

export default Homework1;
