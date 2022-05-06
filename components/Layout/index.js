import Header from "../Header";
import { StyledLayout } from "./styled";

export default function Layout({ children }) {
  return (
    <StyledLayout>
      <Header />
      <main>{children}</main>
    </StyledLayout>
  );
}
