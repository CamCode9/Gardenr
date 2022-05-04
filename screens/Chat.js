import { View, Text } from 'react-native';
import React, {
  useState,
  useCallback,
  useLayoutEffect,
  useEffect,
} from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import { auth } from '../firebase2';
import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
} from 'firebase/firestore';
import { db } from '../firebase2';

const Chat = ({ route }) => {
  return <View></View>;
  //   const [messages, setMessages] = useState([]);
  //   const [chatRef, setChatRef] = useState(null);
  //   const { currentUserData } = route.params;
  //   const { currentUserId } = route.params;
  //   const { gardenerEmail } = route.params;
  //   useLayoutEffect(() => {
  //     const q = query(collection(db, 'chats'), orderBy('createdAt', 'desc'));
  //     const unsubscribe = onSnapshot(q, (snapshot) =>
  //       setMessages(
  //         snapshot.docs.map((doc) => ({
  //           _id: doc.data()._id,
  //           createdAt: doc.data().createdAt.toDate(),
  //           text: doc.data().text,
  //           user: doc.data().user,
  //         }))
  //       )
  //     );
  //     return () => {
  //       unsubscribe();
  //     };
  //   }, []);
  //   const onSend = useCallback((messages = []) => {
  //     setMessages((previousMessages) =>
  //       GiftedChat.append(previousMessages, messages)
  //     );
  //     const { _id, createdAt, text, user } = messages[0];
  //     addDoc(collection(db, 'chatrooms'), { _id, createdAt, text, user });
  //   }, []);
  //   return (
  //     <GiftedChat
  //       messages={messages}
  //       onSend={(messages) => onSend(messages)}
  //       user={{
  //         _id: auth?.currentUser?.email,
  //         name: auth?.currentUser?.email,
  //       }}
  //     />
  //   );
};

export default Chat;
