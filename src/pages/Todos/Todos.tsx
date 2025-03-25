import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../features/store/store";
import { searchTodos } from "../../features/slices/todosSlice";
import { ITodoSeachOptions } from "../../types/Auth/sliceTypes/todos.types";
import Input from "../../components/Input";
import Form from "./Form";

const Todos = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [addBtn, setAddBtn] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "",
    priority: "",
  });
  const { todos } = useSelector((state: RootState) => state.todos);
  const [searchOption, setSearchOption] = useState<ITodoSeachOptions>({
    searchTerm: "",
    page: 1,
    limit: 10,
  });

  useEffect(() => {
    dispatch(searchTodos(searchOption));
  }, [searchOption]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <main className="bg-gradient-to-br from-red-600 to-green-500 min-h-[90vh] py-4 flex justify-center mt-16 ">
      <div className="w-1/2 min-h-1/2 bg-white p-5 rounded-2xl mt-8">
        <div className="flex  items-center justify-between ">
          <input
            type="text"
            onChange={(e) =>
              setSearchOption((prev) => ({
                ...prev,
                searchTerm: e.target.value,
              }))
            }
            className="border basis-3/4 px-2 py-2 rounded-lg outline-none text-sm"
          />
          <button
            type="button"
            onClick={() => setAddBtn(true)}
            className="bg-blue-600 text-white w-28 rounded-xl py-1.5  whitespace-nowrap"
          >
            Add New
          </button>
        </div>
        <section className="flex flex-col gap-y-5 my-5 text-white">
          {todos?.map((todo) => (
            <div className="flex items-center  bg-gray-900/30  rounded-lg p-5">
              <p className="basis-1/5">{todo.title}</p>
              <p className="basis-1/5">{todo.priority}</p>
              <p className="basis-1/5">{todo.status}</p>
            </div>
          ))}
        </section>
      </div>
      {addBtn && (
        <section
          onClick={() => setAddBtn(false)}
          className="absolute w-full top-0 h-screen bg-gray-600/50 flex justify-center items-center"
        >
          <form
            onClick={(e) => e.stopPropagation()}
            className="bg-white w-1/3 flex flex-col gap-y-2 p-5 rounded-md "
          >
            <h2 className="poppins-semibold text-xl">Add Todo</h2>
            <Input
              type="text"
              LabelFor="title"
              id="title"
              name="title"
              label="title"
              value={formData.title}
              handleChange={handleChange}
            />
          </form>
        </section>
      )}
    </main>
  );
};

export default Todos;
