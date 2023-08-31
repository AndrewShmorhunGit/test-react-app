import Footer from "components/footer/Footer";
import { Header } from "components/header/Header";
import { PageContainer, PageSection } from "components/lib/Emotion";
import { NavBar } from "components/navigation/NavBar";

export function HomePage() {
  return (
    <>
      <Header />
      <PageContainer>
        <NavBar />
        <PageSection>
          {/* <img src={image} alt="" /> */}
          <Footer />
        </PageSection>
      </PageContainer>
    </>
  );
}
