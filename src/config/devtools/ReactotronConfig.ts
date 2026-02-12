import AsyncStorage from "@react-native-async-storage/async-storage"
import { Platform } from "react-native"
import { Reactotron } from "./ReactotronClient"

const reactotron = Reactotron.configure({
  name: require("../../../package.json").name,
  onConnect: () => {
    Reactotron.clear()
  },
})

if (Platform.OS !== "web") {
  reactotron.setAsyncStorageHandler?.(AsyncStorage)
  reactotron.useReactNative({
    networking: {
      ignoreUrls: /symbolicate/,
    },
  })
}


reactotron.connect()