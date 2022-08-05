import React, { useEffect } from "react";
import { ActivityIndicator, FlatList, StatusBar, View } from "react-native";
import { useSelector } from "react-redux";
import { HeaderHome } from "../../components/Header";
import { Store } from "../../models/Store";
import * as S from "./style";

export const Home = () => {
  const { moviesItems } = useSelector((store: Store) => store.movies);
  const renderItem = ({ item }: any) => {
    return <View>{/* <Text>{item.title}</Text> */}</View>;
  };
  console.log(moviesItems);
  return (
    <S.Container>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#fff"
        translucent={false}
        hidden={false}
      />
      {/* <HeaderHome /> */}
      {moviesItems?.length === 0 ? (
        <ActivityIndicator size="large" color="#005" />
      ) : (
        <FlatList data={moviesItems} renderItem={renderItem} />
      )}
    </S.Container>
  );
};
