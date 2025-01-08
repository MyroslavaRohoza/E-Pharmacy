import Header from "../Header/Header.tsx";
import Sidebar from "../Sidebar/Sidebar.tsx";

export type SharedProps = {
  children: React.ReactElement;
};

function SharedLayout({ children }: SharedProps) {
  return (
    <div>
      <Header />
      <Sidebar />
      <main>{children}</main>
    </div>
  );
}

export default SharedLayout;
