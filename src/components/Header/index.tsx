import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import { Image, Keyboard, Text, TouchableOpacity, View } from "react-native";
import * as S from "./styles";
import * as Icons from "@expo/vector-icons";
import { Logo } from "../../assets";

export const HeaderHome = () => {
  const { navigate } = useNavigation();

  const refInput = React.useRef();
  const [focus, setFocus] = useState(false);
  return (
    <S.HeaderHome type={2}>
      <S.Header>
        <View></View>
        {/* {focus ? (
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
        ) : (
          <TouchableOpacity
            onPress={() => {
              setFocus(true);
            }}
            style={{
              width: 30,
              alignItems: "center",
              height: "100%",
              justifyContent: "center",
            }}
          >
            <Icons.EvilIcons name="search" size={34} color="white" />
          </TouchableOpacity>
        )} */}
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Image
            source={Logo}
            style={{
              backgroundColor: "white",
              width: 50,
              height: 50,

              borderRadius: 25,
            }}
          />
        </View>

        <S.BoxCloudAndMenu>
          <S.ButtonForAdministrative onPress={() => {}}>
            <Icons.Entypo name="menu" size={30} color="white" />
          </S.ButtonForAdministrative>
        </S.BoxCloudAndMenu>
      </S.Header>
    </S.HeaderHome>
  );
};
