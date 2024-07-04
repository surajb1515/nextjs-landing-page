import { Main, Section, Container } from "@/components/craft";
import FeatureLeft from "@/components/home-page/feature-left";
import FeatureRight from "@/components/home-page/feature-right";
import FeatureSet from "@/components/home-page/feature-set";
import Hero from "@/components/home-page/hero";

export default function Page() {
  return (
    <Main>
      <Section>
        <Container>
          <Hero />
          <FeatureLeft />
          <FeatureRight />
          <FeatureSet />
        </Container>
      </Section>
    </Main>
  );
}