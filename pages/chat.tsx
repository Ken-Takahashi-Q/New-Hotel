import { useEffect, useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import 'firebase/compat/firestore';
import { collection, addDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDON7Nv3EoLPDIQanVTN5YeXq8Q13PoQ2U",
    authDomain: "alto-hotel.firebaseapp.com",
    databaseURL: "https://alto-hotel-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "alto-hotel",
    storageBucket: "alto-hotel.appspot.com",
    messagingSenderId: "291022622615",
    appId: "1:291022622615:web:2b39bf8ea2dbc6526cbed2",
    measurementId: "G-6Z9CPTPZ66"
};

if (!firebase.apps.length) {
  	firebase.initializeApp(firebaseConfig);
}

const database = firebase.database();
const firestore = firebase.firestore();

const Chat = () => {
	const [message, setMessage] = useState("");
	const [messageList, setMessageList] = useState([]);
	const [reply, setReply] = useState("");
	const [clientID, setClientID] = useState('');

	const repliesCollection = collection(firestore, 'replies');

	const handleMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setMessage(event.target.value);
	};

	const handleMessageSend = () => {
		const messagesRef = database.ref("messages");
		messagesRef.push({
			message: message.trim(),
			isUser: true,
		});
		setMessage("");
	};

	const handleReplyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setReply(event.target.value);
	};

	// const handleReplySend = (messageId: string, replyMessage: string) => {
	// const repliesRef = database.ref("messages/{messageId}/replies");
	// 	repliesRef.push({
	// 		replies: reply.trim()
	// 	});
	// };

	// const handleReplySend = () => {
	// 	if (reply.trim() !== '') {
	// 		const replyData = {
	// 			replies: reply.trim(),
	// 			sender: 'admin',
	// 			replyTo: clientID
	// 		};
	// 		firestore.collection('messages').add(replyData);
	// 	  	setReply("");
	// 	}
	// };

	const handleReplySend = () => {
		if (reply.trim() === '') {
			return;
		  }
		
		  const replyObj = {
			message: reply,
		  };
	  
		const messageRef = database.ref("messages"); //`messages/${clientID}/replies`);
		messageRef.push(replyObj);
		setReply('');
	  };

	useEffect(() => {
		const messagesRef = database.ref("messages");
	  
		messagesRef.on("value", (snapshot) => {
		  const messages = [];
		  snapshot.forEach((childSnapshot) => {
			const message = childSnapshot.val();
			const replies = message.replies ? Object.values(message.replies) : [];
			messages.push({
			  key: childSnapshot.key,
			  message: message.message,
			  replies: replies,
			});
		  });
	  
		  setMessageList(messages);
		});
	  
		const latestMessageRef = firestore
		  .collection("messages")
		  .orderBy("timestamp", "desc")
		  .limit(1);
	  
		const unsubscribeLatestMessage = latestMessageRef.onSnapshot(
		  (snapshot) => {
			const messages = snapshot.docs.map((doc) => ({
			  id: doc.id,
			  ...doc.data(),
			}));
			const latestMessage = messages[0];
			if (latestMessage) {
			  setClientID(latestMessage.id);
			}
		  }
		);
	  
		return () => {
		  messagesRef.off();
		  unsubscribeLatestMessage();
		};
	  }, []);
	  

	// useEffect(() => {
	// const messagesRef = database.ref("messages");
	// messagesRef.on("value", (snapshot) => {
	// 	const messages = [];
	// 	snapshot.forEach((childSnapshot) => {
	// 		const message = childSnapshot.val();
	// 		const replies = message.replies ? Object.values(message.replies) : [];
	// 		messages.push({
	// 			key: childSnapshot.key,
	// 			message: message.message,
	// 			replies: replies
	// 		});
	// 		});
	// 		setMessageList(messages);
	// 	});
		
	// const repliesRef = firebase.database().ref(`messages/${message.key}`);
	// repliesRef.on("child_added", (snapshot) => {
	// 	const newReply = {
	// 	key: snapshot.key,
	// 	...snapshot.val()
	// 	};
	// 	setReplies((prevState) => [...prevState, newReply]);
	// });
	// }, []);

	const userMessages = messageList.filter(message => message.message.isUser);
	const nonUserMessages = messageList.filter(message => !message.messageisUser);

	return (
		<div className="flex absolute justify-between top-0 bg-gray-700 h-screen w-full">
			{/* Message list */}
			{/* <div className="flex flex-col justify-start h-[90%] w-full p-4 overflow-y-scroll">
				<div className="mt-12"></div>

				{messageList.map((message, index) => (
					<div
						key={message.key}
						className="flex flex-col justify-center ml-4 mb-3 px-4 py-2 text-white bg-[#326BFF] border border-solid border-[#979FA7] rounded-xl"
						style={{ maxWidth: "max-content" }}
					>
						<div className="whitespace-pre-wrap break-words">
							{message.message}
						</div>
					</div>
				))}
			</div> */}

			<div className="flex flex-col justify-start h-[90%] w-full p-4 overflow-y-scroll">
				<div className="mt-12"></div>
				{/* {messageList.map((message, index) => (
					<div
					key={message.key}
					className={`flex flex-col justify-center ${message.isUser === true ? 'ml-4' : 'mr-4'} mb-3 px-4 py-2 text-white bg-${message.isUser === true ? '[#326BFF]' : '[#FFFFFF]'} border border-solid border-[#979FA7] rounded-xl`}
					style={{ maxWidth: "max-content" }}
					>
						<div className="whitespace-pre-wrap break-words">
							{message.message}
						</div>
					</div>
				))} */}

				{userMessages.map((message, index) => (
					<div
						key={message.key}
						className="flex flex-col justify-center ml-4 mb-3 px-4 py-2 text-white bg-[#326BFF] border border-solid border-[#979FA7] rounded-xl"
						style={{ maxWidth: "max-content" }}
					>
						<div className="whitespace-pre-wrap break-words">{message.message}</div>
					</div>
					))}
					
				{nonUserMessages.map((message, index) => (
					<div
						key={message.key}
						className="flex flex-col justify-center mr-4 mb-3 px-4 py-2 bg-[#FFFFFF] border border-solid border-[#979FA7] rounded-xl"
						style={{ maxWidth: "max-content" }}
					>
						<div className="whitespace-pre-wrap break-words">{message.message}</div>
					</div>
				))}
			</div>


			{/* <div className='flex flex-col absolute top-16 left-0 justify-center h-12 ml-4 p-4 text-white bg-[#326BFF] border border-solid border-[#979FA7] rounded-lg'>
				Message
			</div>
			<div className='flex flex-col absolute top-32 left-0 justify-center h-12 ml-4 p-4 text-white bg-[#326BFF] border border-solid border-[#979FA7] rounded-lg'>
				Messageaaaaaaaaaaa
			</div> */}
		
			{/* Message box */}
			<div className='flex absolute justify-between bottom-0 h-[10%] w-full p-2 border-t border-solid border-[#979FA7]'>
				<input
					className='h-full mx-4 px-4 w-full border border-solid border-[#979FA7] rounded-lg text-base'
					placeholder='Text a message'
					type="text" id="message-input" value={message} onChange={handleMessageChange}
				/>
				
				<button
					className='h-full w-[100px] ml-2 mr-4 rounded-lg text-base text-white bg-[#326BFF]'
					onClick={handleMessageSend}>Send
				</button>

			</div>

			{/* For test reply message */}
			<div className='flex flex-col absolute top-2 right-4 max-w-[60%] p-2 border-t border-solid border-[#979FA7] bg-gray-500 rounded-xl'>
				<div className="flex justify-between">
					<input
						className='h-full px-4 w-full border border-solid border-[#979FA7] rounded-lg text-base'
						placeholder='Reply to client'
						type="text" id="message-input" value={reply} onChange={handleReplyChange}
					/>
					
					<button
						className='h-full w-[100px] ml-2 mr-4 rounded-lg text-base text-white bg-[#326BFF]'
						onClick={handleReplySend}>Send
					</button>
				</div>

				<p className="text-center text-white" >For testing</p>

			</div>
			
		</div>
	);
};

export default Chat;