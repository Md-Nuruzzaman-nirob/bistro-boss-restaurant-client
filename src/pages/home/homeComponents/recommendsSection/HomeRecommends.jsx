import { MagnifyingGlass } from "react-loader-spinner";
import Container from "../../../../components/shared/Container";
import GridContainer from "../../../../components/shared/GridContainer";
import Title from "../../../../components/shared/Title";
import useFetch from "../../../../hooks/useFetch";
import BoxCard from "../../../../components/shared/BoxCard";

const HomeRecommends = () => {
  const { data, loader } = useFetch(`/api/v1/menu`);

  const filterMenu = data?.filter((menu) => menu.category === "offered") || [];

  if (loader) {
    return (
      <p className="h-screen flex items-center justify-center">
        <MagnifyingGlass
          visible={true}
          height="80"
          width="80"
          ariaLabel="MagnifyingGlass-loading"
          wrapperStyle={{}}
          wrapperClass="MagnifyingGlass-wrapper"
          glassColor="#c0efff"
          color="#BB8506"
        />
      </p>
    );
  }
  return (
    <Container className="py-10 lg:py-20">
      <Title title="CHEF RECOMMENDS" subTitle="---Should Try---" />
      <GridContainer className={"lg:grid-cols-3"}>
        {filterMenu?.map((data) => (
          <BoxCard key={data._id} data={data}></BoxCard>
        ))}
      </GridContainer>
    </Container>
  );
};

export default HomeRecommends;
