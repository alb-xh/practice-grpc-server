import { Product } from '@proto/product';

import './ProductListItem.css';

export default function ProductListItem (props: Product) {
  return (
    <li className="product_list_item">
      <img src={props.imageSrc} alt="product" />
      <span>Name: {props.name}</span>
      { props.description && <span>Description: {props.description}</span> }
      <span>Price: {props.price}</span>
      <span>Availability: {props.quantity}</span>
    </li>
  );
}