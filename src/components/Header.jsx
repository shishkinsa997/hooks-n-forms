const Header = ({ setTask }) => {

  return (
    <header className="sticky z-1 top-0 mx-auto w-full bg-white after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-black/10 after:content-['']">
      <div className="max-w-360 mx-auto gap-4 px-8 py-4 flex items-center justify-evenly flex-wrap">
        <button onClick={() => setTask('UseContextTheme')}>UseContext</button>
        <button onClick={() => setTask('UseCallbackCounter')}>UseCallback</button>
        <button onClick={() => setTask('UseMemoArray')}>useMemo </button>
        <button onClick={() => setTask('UseRefInput')}>useRef </button>
        <button onClick={() => setTask('UseReducerTodolist')}>useReducer </button>
        <button onClick={() => setTask('ReactMemoRerender')}>React.memo</button>
        <button onClick={() => setTask('Combo')}>Combo</button>
        <button onClick={() => setTask('BadForm')}>Bad Form</button>
        <button onClick={() => setTask('GoodForm')}>Good Form</button>
      </div>
    </header>
  );
}

export default Header;