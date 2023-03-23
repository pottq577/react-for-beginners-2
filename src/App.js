import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
  };
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add to Do</button>
      </form>
      <hr />
      <ul>
        {
          // map 함수는 하나의 배열에 있는 아이템을 내가 원하는걸로 바꿔주고 새로운 배열로 바꿔줌
          // 리액트는 list에 있는 모든 아이템을 인식하기 때문에 key를 넣어 고유하게 만드러줘야 함
          // map의 첫 번째 인자는 값이고, 두 번째는 index, 즉 숫자를 의미
          toDos.map((item, index) => (
            <li key={index}>{item}</li>
          ))
        }
      </ul>
    </div>
  );
}

export default App;
