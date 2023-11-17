import { MagnifyingGlass } from "react-loader-spinner";
import Container from "../../../../components/shared/Container";
import GridContainer from "../../../../components/shared/GridContainer";
import Title from "../../../../components/shared/Title";
import useFetch from "../../../../hooks/useFetch";
import Button from "../../../../components/shared/Button";
import Card from "../../../../components/shared/Card";

const HomeMenu = () => {
  const { data, loader } = useFetch(`/api/v1/menu`);

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

  const filterMenu = data?.filter((menu) => menu.category === "popular") || [];
  return (
    <Container className="py-10 lg:py-20">
      <Title title="FROM OUR MENU" subTitle="---Check it out---" />
      <GridContainer>
        {filterMenu?.map((data) => (
          <Card key={data._id} data={data}></Card>
        ))}
      </GridContainer>
      <div className="flex items-center justify-center mt-10">
        <Button>View Full Menu</Button>
      </div>
    </Container>
  );
};

export default HomeMenu;
