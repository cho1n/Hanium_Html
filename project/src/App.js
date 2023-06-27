import logo from "./logo.svg";
import "./App.css";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					å
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer">
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;

// let : 변하는 변수
// const : 변하지 않는 변수
// 컴포넌트는 유저 인터페이스를 갖추기 위한 Html, css, 그리고 로직 구현을 위한 자바 스크립트의 집합체
// 리액트는 컴포넌트다.