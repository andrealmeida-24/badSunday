import Directory from "../../Components/Directory-Component/directory.component";

const Home = () => {
  const firstLineCategories = [
    {
      id: 1,
      title: "Mens",
      imageUrl:
        "https://images.unsplash.com/photo-1523205565295-f8e91625443b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80",
    },
    {
      id: 2,
      title: "Womens",
      imageUrl:
        "https://images.unsplash.com/photo-1487980359585-fc92bf3fb9a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
  ];

  const secondLineCategories = [
    {
      id: 3,
      title: "Hats",
      imageUrl:
        "https://images.unsplash.com/photo-1521369909029-2afed882baee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    {
      id: 4,
      title: "Jackets",
      imageUrl:
        "https://images.unsplash.com/photo-1543076447-215ad9ba6923?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    },
    {
      id: 5,
      title: "Sneakers",
      imageUrl:
        "https://images.unsplash.com/photo-1623684225794-a8f1f5037f5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
  ];

  return (
    <Directory
      firstLineCategories={firstLineCategories}
      secondLineCategories={secondLineCategories}
    />
  );
};

export default Home;
