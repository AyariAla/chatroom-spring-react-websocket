import { useState } from 'react';

const ChatRoom = () => {
  const [userData, setUserData] = useState({
    username: '',
    receiverName: '',
    connected: false,
    message: '',
  });
  return (
    <div className='container'>
      {userData.connected ? (
        <div className=''></div>
      ) : (
        <div className='register'>
          <input></input>
        </div>
      )}
    </div>
  );
};

export default ChatRoom;
