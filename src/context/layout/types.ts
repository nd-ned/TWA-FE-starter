import { LanguageCode } from "../../languages"

export type LayoutState = {
  language: LanguageCode
}

export type LayoutAction = {
  type: "SET_LANGUAGE"
  payload: { language: LanguageCode }
}
