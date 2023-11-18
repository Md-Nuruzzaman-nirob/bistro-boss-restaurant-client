import Container from "../../components/shared/Container";
import Cover from "../../components/shared/Cover";
import bg from "../../assets/menu/banner3.jpg";
import bg2 from "../../assets/menu/dessert-bg.jpeg";
import bg3 from "../../assets/menu/pizza-bg.jpg";
import bg4 from "../../assets/menu/salad-bg.jpg";
import bg5 from "../../assets/menu/soup-bg.jpg";
import bg6 from "../../assets/menu/banner3.jpg";
import Title from "../../components/shared/Title";
import useFetch from "../../hooks/useFetch";
import { MagnifyingGlass } from "react-loader-spinner";
import GridContainer from "../../components/shared/GridContainer";
import Card from "../../components/shared/Card";
import { Link } from "react-router-dom";
import Button from "../../components/shared/Button";

const Menu = () => {
  const { data, loader } = useFetch(`/api/v1/menu`);

  const filterMenu = data?.filter((menu) => menu.category === "offered") || [];
  const dessertMenu = data?.filter((menu) => menu.category === "dessert") || [];
  const pizzaMenu = data?.filter((menu) => menu.category === "pizza") || [];
  const saladMenu = data?.filter((menu) => menu.category === "salad") || [];
  const soupMenu = data?.filter((menu) => menu.category === "soup") || [];
  const drinksMenu = data?.filter((menu) => menu.category === "drinks") || [];
  return (
    <Container className={"mb-10 lg:mb-20"}>
      <Cover
        className={"mt-12 lg:mt-0"}
        bg={bg}
        title={"OUR MENU"}
        subTitle={"Would you like to try a dish?"}
      />

      <div className="pt-8 lg:pt-12 pb-20">
        <Title title={"TODAY'S OFFER"} subTitle={"---Don't miss---"} />
        <GridContainer>
          {loader ? (
            <p className="h-[50vh] flex items-center justify-center col-span-2">
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
          ) : (
            filterMenu?.map((data) => <Card key={data._id} data={data}></Card>)
          )}
        </GridContainer>
        <Link to={"/shop"} className="flex items-center justify-center mt-10">
          <Button>ORDER YOUR FAVORITE FOOD</Button>
        </Link>
      </div>

      <Cover
        bg={bg2}
        title={"DESSERTS"}
        subTitle={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      />

      <div className="pt-8 lg:pt-12 pb-20">
        <GridContainer>
          {loader ? (
            <p className="h-[50vh] flex items-center justify-center col-span-2">
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
          ) : (
            dessertMenu?.map((data) => <Card key={data._id} data={data}></Card>)
          )}
        </GridContainer>
        <Link
          to={"/shop"}
          state={"Dessert"}
          className="flex items-center justify-center mt-10"
        >
          <Button>ORDER YOUR FAVORITE DESSERTS</Button>
        </Link>
      </div>

      <Cover
        bg={bg3}
        title={"PIZZA"}
        subTitle={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      />

      <div className="pt-8 lg:pt-12 pb-20">
        <GridContainer>
          {loader ? (
            <p className="h-[50vh] flex items-center justify-center col-span-2">
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
          ) : (
            pizzaMenu?.map((data) => <Card key={data._id} data={data}></Card>)
          )}
        </GridContainer>
        <Link
          to={"/shop"}
          state={"Pizza"}
          className="flex items-center justify-center mt-10"
        >
          <Button>ORDER YOUR FAVORITE PIZZAS</Button>
        </Link>
      </div>

      <Cover
        bg={bg4}
        title={"SALADS"}
        subTitle={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      />

      <div className="pt-8 lg:pt-12 pb-20">
        <GridContainer>
          {loader ? (
            <p className="h-[50vh] flex items-center justify-center col-span-2">
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
          ) : (
            saladMenu?.map((data) => <Card key={data._id} data={data}></Card>)
          )}
        </GridContainer>
        <Link
          to={"/shop"}
          state={"Salad"}
          className="flex items-center justify-center mt-10"
        >
          <Button>ORDER YOUR FAVORITE SALADS</Button>
        </Link>
      </div>

      <Cover
        bg={bg5}
        title={"SOUPS"}
        subTitle={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      />

      <div className="pt-8 lg:pt-12 pb-20">
        <GridContainer>
          {loader ? (
            <p className="h-[50vh] flex items-center justify-center col-span-2">
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
          ) : (
            soupMenu?.map((data) => <Card key={data._id} data={data}></Card>)
          )}
        </GridContainer>
        <Link
          to={"/shop"}
          state={"Soup"}
          className="flex items-center justify-center mt-10"
        >
          <Button>ORDER YOUR FAVORITE SOUPS</Button>
        </Link>
      </div>

      <Cover
        bg={bg6}
        title={"DRINKS"}
        subTitle={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      />

      <div className="pt-8 lg:pt-12 pb-20">
        <GridContainer>
          {loader ? (
            <p className="h-[50vh] flex items-center justify-center col-span-2">
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
          ) : (
            drinksMenu?.map((data) => <Card key={data._id} data={data}></Card>)
          )}
        </GridContainer>
        <Link
          to={"/shop"}
          state={"Drink"}
          className="flex items-center justify-center mt-10"
        >
          <Button>ORDER YOUR FAVORITE DRINKS</Button>
        </Link>
      </div>
    </Container>
  );
};

export default Menu;
