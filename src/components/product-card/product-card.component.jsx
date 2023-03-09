import {useContext} from "react";
import {CardContext} from "../../context/card.context";

import {
  ProductCardContainer,
  Footer,
  SpanName,
  SpanPrice,
} from "./product-card.styles";
import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component";

const ProductCard = ({product}) => {
  const {imageUrl, name, price} = product;
  const {addItemToCard} = useContext(CardContext);

  const addProductToCard = () => addItemToCard(product);
  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`} />

      <Footer>
        <SpanName>{name}</SpanName>
        <SpanPrice>{price} €</SpanPrice>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCard}
      >
        Add To Card
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
