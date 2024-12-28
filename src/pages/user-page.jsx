import { Account } from "../components/account/account";
import { PageContainer } from "../components/page-container/page-container";
import { PageTitle } from "../components/page-title/page-title";

export const UserPage = () => {
  return (
    <PageContainer>
      <PageTitle title="Личный кабинет" />
      <Account />
    </PageContainer>
  );
};
