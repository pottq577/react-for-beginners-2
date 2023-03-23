import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    // form은 submit 이벤트를 갖고있기 때문에 기본 동작을 막음
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    // state는 직접 수정하지 않고 함수를 사용해야만 함. state는 항상 새로운 것이어야만 함
    // ... 을 사용하여 currentArray 배열에 toDo를 앞에서 추가시킴
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
    </div>
  );
}

export default App;
