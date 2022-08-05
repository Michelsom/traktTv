import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import { Provider } from "react-redux";
import configureStore from "./store";
import { ThemeProvider } from "styled-components";
import theme from "./global/styles/theme";
import { PersistGate } from "redux-persist/integration/react";
import { Routes } from "./routes";

export function App() {
  const [store] = useState(configureStore());
  return (
    <Provider store={store.store}>
      <NavigationContainer>
        <ThemeProvider theme={theme}>
          <PersistGate persistor={store.persistor}>
            <Routes />
          </PersistGate>
        </ThemeProvider>
      </NavigationContainer>
    </Provider>
  );
}
