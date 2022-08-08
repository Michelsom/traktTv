import { Dimensions } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  width: ${Dimensions.get("window").width}px;
  height: ${Dimensions.get("screen").height}px;
  background-color: #222;
`;

export const BoxComponentFlatlist = styled.TouchableOpacity`
  width: 100%;
  background-color: #222;
`;
export const Title = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
`;
export const SubTitle = styled.Text`
  color: #fff;
  padding: 10px 0px;
  font-size: 14px;
`;
export const ContentFlatlist = styled.View`
  position: absolute;
  width: 100%;
  bottom: 20px;
  left: 20px;
`;
export const MovieNameFlatlist = styled.Text.attrs({ numberOfLines: 1 })`
  font-size: 27px;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.3);
  height: 40px;
  max-width: 306px;
  font-weight: bold;
`;
export const Percentage = styled.Text`
  font-size: 22px;
  color: #fff;
  max-width: 306px;
  font-weight: bold;
`;
export const MovieYearFlatlist = styled.Text`
  font-size: 23px;
  background-color: rgba(0, 0, 0, 0.3);
  height: 40px;
  color: #fff;
  padding-left: 5px;
  padding-top: 5px;
  color: rgba(255, 255, 255, 0.7);
`;
export const ImageContainer = styled.ImageBackground.attrs({
  rezieMode: "contain",
})`
  background-color: #222;
  width: 100%;
  height: 250px;
`;
export const PeopleWatched = styled.Text`
  background-color: #b70f15;
  width: 163px;
  text-align: center;
  font-weight: bold;
  font-size: 15px;
  color: #fff;
  padding: 3px;
`;

interface IProps {
  color: string;
}
export const ButtonComponentFlatlist = styled.TouchableOpacity<IProps>`
  width: 48px;
  height: 48px;
  background-color: ${(color) => color.color};
  align-items: center;
  justify-content: center;
`;
export const ButtonHeart = styled.TouchableOpacity<IProps>`
  height: 48px;
  flex-direction: row;
  width: 90px;
  background-color: ${(color) => color.color};
  align-items: center;
  justify-content: center;
`;
export const ButtonComponViewntFlatlist = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  align-items: center;
  justify-content: center;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const ContainerButton = styled.View`
  background-color: #222;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;
export const BoxLoading = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;
