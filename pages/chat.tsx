import { useEffect, useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/database";

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

const MessageSender = () => {
	const [message, setMessage] = useState("");
	const [error, setError] = useState("");
	const [messageList, setMessageList] = useState([]);

	const handleMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setMessage(event.target.value);
		setError("");
	};

	const handleMessageSend = () => {
		const messagesRef = database.ref("messages");
		messagesRef.push({
			message: message.trim()
		});
		setMessage("");
	};

	useEffect(() => {
		const messagesRef = database.ref("messages");
		
		messagesRef.on("value", (snapshot) => {
			const messages = snapshot.val();
			const messageArray = [];
			for (let id in messages) {
				messageArray.push({ id, ...messages[id] });
			}
			setMessageList(messageArray);
		});
	}, [database]);

	return (
		<div className="flex absolute justify-between top-0 bg-gray-700 h-screen w-full">
			{/* Message list */}
			<div className="flex flex-col justify-start h-[90%] w-full p-4 overflow-y-scroll">
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
			</div>

			{/* <div className='flex flex-col absolute top-16 left-0 justify-center h-12 ml-4 p-4 text-white bg-[#326BFF] border border-solid border-[#979FA7] rounded-lg'>
				Message
			</div>
			<div className='flex flex-col absolute top-32 left-0 justify-center h-12 ml-4 p-4 text-white bg-[#326BFF] border border-solid border-[#979FA7] rounded-lg'>
				Messageaaaaaaaaaaa
			</div> */}
		
			{/* Message box */}
			<div className='flex absolute justify-between bottom-0 h-[10%]  w-full p-2 border-t border-solid border-[#979FA7]'>
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
		</div>
	);
};

export default MessageSender;
