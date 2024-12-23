import { PageContainer } from "../components/page-container/page-container";
import { PageTitle } from "../components/page-title/page-title";
import { ProductsList } from "../components/products-list/products-list";

export const MainPage = () => {
  return (
    <PageContainer>
      <PageTitle title="Каталог" />
      <ProductsList />
    </PageContainer>
  );
};
