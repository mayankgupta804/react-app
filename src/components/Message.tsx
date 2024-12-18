let count = 0;

const Message = () => {
  console.log("Message called: ", count);
  count++;
  return <p>Message {count}</p>;
};

export default Message;
