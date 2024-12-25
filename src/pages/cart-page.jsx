import { Cart } from "../components/cart/cart";
import { PageContainer } from "../components/page-container/page-container";
import { PageTitle } from "../components/page-title/page-title";

export const CartPage = () => {
  return (
    <PageContainer>
      <PageTitle title="Корзина" />
      <Cart />
    </PageContainer>
  );
};
