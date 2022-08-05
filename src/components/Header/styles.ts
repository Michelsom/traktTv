import styled from "styled-components/native";

interface HeaderTypeProps {
  type: number;
  height?: number;
  isProfile?: boolean;
}
interface ModelColor {
  CommandsAvailable: boolean;
}
export const HeaderHome = styled.View<HeaderTypeProps>`
  width: 100%;
  padding: 0 10px 0 20px;
  background-color: ${({ theme }) => theme.colors.backGroundF4};
  flex-direction: row;
  height: 60px;
  align-items: flex-start;
  justify-content: ${(props) =>
    props.type === 1 ? "center" : "space-between"};
  elevation: 1px;
`;
export const Header = styled.View`
  height: 60px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const BoxCommandsInput = styled.View<ModelColor>`
  align-items: center;
  flex-direction: row;
  height: 40px;
  border-width: ${({ CommandsAvailable }) =>
    CommandsAvailable === true ? 1 : 0}px;
  border-color: ${({ CommandsAvailable }: ModelColor) =>
    CommandsAvailable === true ? "red" : null};
  width: 80%;
  background-color: ${({ CommandsAvailable }: ModelColor) =>
    CommandsAvailable === true ? "#fff" : "#eee"};
  border-radius: 24px;
  padding-left: 15px;
`;

export const InputSearch = styled.TextInput.attrs({
  placeholder: `Mesa ou nome do cliente`,
})`
  width: 73%;
  color: #9e9e9e;
  height: 40px;
  margin-top: 6px;
  font-size: 12px;
`;
export const BoxCloudAndMenu = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;
export const Separator = styled.View`
  width: 1px;
  background: #eeeeee;
  height: 40px;
`;
export const ButtonForAdministrative = styled.TouchableOpacity.attrs({
  activeOpacity: 0.5,
})`
  background: #eee;
  align-items: center;
  margin-left: 16px;
  border-radius: 8px;
  justify-content: center;
  width: 40px;
  height: 40px;
`;
