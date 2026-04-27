import { ShoppingCart, User } from 'lucide-react';
import { UseContextTheme } from '@tasks/UseContextTheme';
import { UseCallbackCounter } from '@tasks/UseCallbackCounter';
import { UseMemoArray } from '@tasks/UseMemoArray';
import { UseRefInput } from '@tasks/UseRefInput';
import { UseReducerTodolist } from '@tasks/UseReducerTodolist';
import { ReactMemoRerender } from '@tasks/ReactMemoRerender';
import { Combo } from '@tasks/Combo';
import { BadForm } from '@tasks/BadForm';
import { GoodForm } from '@tasks/GoodForm';

const Content = ({ task }) => {
  return (
    <main className="flex items-center justify-center">
      <div className="max-w-360 mx-auto px-8 py-4 flex flex-col items-center justify-center">
        {task === 'UseContextTheme' && <UseContextTheme/>}
        {task === 'UseCallbackCounter' && <UseCallbackCounter/>}
        {task === 'UseMemoArray' && <UseMemoArray/>}
        {task === 'UseRefInput' && <UseRefInput/>}
        {task === 'UseReducerTodolist' && <UseReducerTodolist/>}
        {task === 'ReactMemoRerender' && <ReactMemoRerender/>}
        {task === 'Combo' && <Combo/>}
        {task === 'BadForm' && <BadForm/>}
        {task === 'GoodForm' && <GoodForm/>}
      </div>
    </main>
  );
}

export default Content;