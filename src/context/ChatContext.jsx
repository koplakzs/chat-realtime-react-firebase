/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react";
import { AuthContext } from "./AuthContext";

export const ChatContext = createContext();

export const ChatContextProvider = ({ children }) => {
  const INNITIAL_STATE = {
    chatId: "null",
    user: {},
  };
  const { currentUser } = useContext(AuthContext);

  const chatsReducer = (state, action) => {
    switch (action.type) {
      case "CHANGE_USER":
        return {
          user: action.payload,
          chatId:
            currentUser.uid > action.payload.id
              ? currentUser.uid + action.payload.id
              : action.payload.id + currentUser.uid,
        };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(chatsReducer, INNITIAL_STATE);
  return (
    <ChatContext.Provider value={{ data: state, dispatch }}>
      {children}
    </ChatContext.Provider>
  );
};
