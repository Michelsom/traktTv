import React, { useEffect } from "react";
import { ActivityIndicator, FlatList, StatusBar, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { HeaderHome } from "../../components/Header";
import { Store } from "../../models/Store";
import { getMovies } from "../../store/actions/movies.actions";
import * as S from "./style";
import * as Icons from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export const Home = () => {
  const dispatch = useDispatch();
  const { moviesItems, loadingMovies } = useSelector(
    (store: Store) => store.movies
  );
  const renderItem = ({ item }: any) => {
    return (
      <S.BoxComponentFlatlist onPress={{}}>
        <S.ImageContainer
          source={{
            uri: `https://www.themoviedb.org/t/p/w500${item.image}`,
          }}
        >
          <S.ContentFlatlist>
            <S.PeopleWatched>{item.watchers} people watching</S.PeopleWatched>
            <S.Row style={{ width: "100%" }}>
              <S.MovieNameFlatlist>{item.movie.title}</S.MovieNameFlatlist>
              <S.MovieYearFlatlist>{item.movie.year}</S.MovieYearFlatlist>
            </S.Row>
          </S.ContentFlatlist>
        </S.ImageContainer>
        <S.ContainerButton>
          <S.Row>
            <S.ButtonComponentFlatlist color={"#8e44ad"} onPress={() => {}}>
              <Icons.Entypo name="check" size={24} color="white" />
            </S.ButtonComponentFlatlist>
            <S.ButtonComponentFlatlist color={"#62e9c9"} onPress={() => {}}>
              <Icons.AntDesign name="book" size={24} color="white" />
            </S.ButtonComponentFlatlist>
            <S.ButtonComponentFlatlist color={"#74aed5"} onPress={() => {}}>
              <Icons.MaterialCommunityIcons
                name="format-list-text"
                size={24}
                color="white"
              />
            </S.ButtonComponentFlatlist>
            <S.ButtonComponentFlatlist onPress={() => {}} color={"#fb7c2a"}>
              <Icons.FontAwesome name="bolt" size={24} color="white" />
            </S.ButtonComponentFlatlist>
            <S.ButtonComponentFlatlist color={"#bcb6ac"} onPress={() => {}}>
              <Icons.Ionicons name="md-play" size={24} color="white" />
            </S.ButtonComponentFlatlist>
          </S.Row>
          <View>
            <S.ButtonHeart onPress={() => {}}>
              <Icons.Ionicons name="heart" size={22} color="#cc617a" />
              <S.Percentage>100%</S.Percentage>
            </S.ButtonHeart>
          </View>
        </S.ContainerButton>
      </S.BoxComponentFlatlist>
    );
  };

  function GetMoviesFn() {
    dispatch(getMovies());
  }
  useEffect(() => {
    GetMoviesFn();
  }, []);

  return (
    <S.Container>
      <StatusBar translucent={false} />
      <HeaderHome />
      {loadingMovies ? (
        <S.BoxLoading style={{}}>
          <ActivityIndicator size={90} color="#fff" />
          <S.Title>Carregando filmes</S.Title>
        </S.BoxLoading>
      ) : (
        <>
          <FlatList
            data={moviesItems}
            ListHeaderComponent={
              <View style={{ height: 100, width: "100%", padding: 10 }}>
                <S.Title>Movies</S.Title>
                <S.SubTitle>
                  There are 2,308 people watching 1,102 movies right now!
                </S.SubTitle>
              </View>
            }
            ListFooterComponent={<View style={{ height: 50 }} />}
            renderItem={renderItem}
          />
        </>
      )}
    </S.Container>
  );
};
