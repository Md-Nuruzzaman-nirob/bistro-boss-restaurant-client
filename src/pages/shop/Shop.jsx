import Container from "../../components/shared/Container";
import Cover from "../../components/shared/Cover";
import bg from "../../assets/menu/banner3.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./shop.css";
import useFetch from "../../hooks/useFetch";
import { MagnifyingGlass } from "react-loader-spinner";
import GridContainer from "../../components/shared/GridContainer";
import BoxCard from "../../components/shared/BoxCard";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const Shop = () => {
  const categories = ["Salad", "Pizza", "Soup", "Dessert", "Drink"];
  const categoryLocation = useLocation();
  const initialIndex = categories.indexOf(
    categoryLocation.state ? categoryLocation.state : "Salad"
  );
  const [tabIndex, setTabIndex] = useState(initialIndex);

  const { data, loader } = useFetch(`/api/v1/menu`);

  const saladMenu = data?.filter((menu) => menu.category === "salad") || [];
  const pizzaMenu = data?.filter((menu) => menu.category === "pizza") || [];
  const soupMenu = data?.filter((menu) => menu.category === "soup") || [];
  const dessertMenu = data?.filter((menu) => menu.category === "dessert") || [];
  const drinksMenu = data?.filter((menu) => menu.category === "drinks") || [];

  return (
    <Container className={""}>
      <Cover
        className={"mt-10 lg:mt-0"}
        bg={bg}
        title={"OUR SHOP"}
        subTitle={"Would you like to try a dish?"}
      />
      <Tabs
        defaultIndex={tabIndex}
        onSelect={(index) => setTabIndex(index)}
        className={"py-20"}
      >
        <TabList
          className={
            "flex items-center justify-center gap-6 uppercase font-semibold tracking-widest mb-10"
          }
        >
          <Tab className={"outline-none border-none"}>Salad</Tab>
          <Tab className={"outline-none border-none"}>Pizza</Tab>
          <Tab className={"outline-none border-none"}>Soup</Tab>
          <Tab className={"outline-none border-none"}>Dessert</Tab>
          <Tab className={"outline-none border-none"}>Drink</Tab>
        </TabList>

        <TabPanel>
          {" "}
          <GridContainer className={"lg:grid-cols-3"}>
            {loader ? (
              <p className="h-[60vh] flex items-center justify-center col-span-3">
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
              saladMenu?.map((data) => (
                <BoxCard key={data._id} data={data}></BoxCard>
              ))
            )}
          </GridContainer>
        </TabPanel>
        <TabPanel>
          {" "}
          <GridContainer className={"lg:grid-cols-3"}>
            {loader ? (
              <p className="h-[60vh] flex items-center justify-center col-span-3">
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
              pizzaMenu?.map((data) => (
                <BoxCard key={data._id} data={data}></BoxCard>
              ))
            )}
          </GridContainer>
        </TabPanel>
        <TabPanel>
          {" "}
          <GridContainer className={"lg:grid-cols-3"}>
            {loader ? (
              <p className="h-[60vh] flex items-center justify-center col-span-3">
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
              soupMenu?.map((data) => (
                <BoxCard key={data._id} data={data}></BoxCard>
              ))
            )}
          </GridContainer>
        </TabPanel>
        <TabPanel>
          {" "}
          <GridContainer className={"lg:grid-cols-3"}>
            {loader ? (
              <p className="h-[60vh] flex items-center justify-center col-span-3">
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
              dessertMenu?.map((data) => (
                <BoxCard key={data._id} data={data}></BoxCard>
              ))
            )}
          </GridContainer>
        </TabPanel>
        <TabPanel>
          {" "}
          <GridContainer className={"lg:grid-cols-3"}>
            {loader ? (
              <p className="h-[60vh] flex items-center justify-center col-span-3">
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
              drinksMenu?.map((data) => (
                <BoxCard key={data._id} data={data}></BoxCard>
              ))
            )}
          </GridContainer>
        </TabPanel>
      </Tabs>
    </Container>
  );
};

export default Shop;
