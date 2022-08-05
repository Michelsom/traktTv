import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import { Keyboard, Text, TouchableOpacity } from "react-native";
import * as S from "./styles";
import * as Icons from "@expo/vector-icons";

export const HeaderHome = () => {
  const { navigate } = useNavigation();

  const refInput = React.useRef();
  const [focus, setFocus] = useState(false);
  return (
    <S.HeaderHome type={2}>
      <S.Header>
        {/* <Icon.PigzPayPrimaryColor width={88} height={88} /> */}
        <S.BoxCommandsInput CommandsAvailable={focus}>
          <TouchableOpacity
            onPress={() => {
              refInput.current.focus();
            }}
            style={{ width: 30, alignItems: "center" }}
          >
            <Icons.EvilIcons name="search" size={24} color="black" />
          </TouchableOpacity>
          <S.InputSearch
            onFocus={() => {
              setFocus(true);
            }}
            keyboardType="ascii-capable"
            ref={refInput}
            onBlur={() => {
              setFocus(false);
            }}
            onChangeText={() => {}}
          />
          {focus && (
            <TouchableOpacity
              onPress={() => {
                Keyboard.dismiss();
                setFocus(false);
              }}
              style={{ width: 22, height: 22, alignItems: "center" }}
            >
              <Text
                style={{
                  fontSize: 14,
                  color: "#9E9E9E",
                }}
              >
                ✕
              </Text>
            </TouchableOpacity>
          )}
        </S.BoxCommandsInput>
        <S.BoxCloudAndMenu>
          <S.Separator />
          <S.ButtonForAdministrative onPress={() => {}}>
            <Icons.Entypo name="menu" size={24} color="black" />
          </S.ButtonForAdministrative>
        </S.BoxCloudAndMenu>
      </S.Header>
    </S.HeaderHome>
  );
};
