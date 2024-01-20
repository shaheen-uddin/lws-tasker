import { useState } from "react";
import SearchTask from "./SearchTask";
import TaskActions from "./TaskActions";
import TaskList from "./TaskList";
import AddTaskModal from "./AddTaskModal";
import { saveToLocalStorage, readFromLocalStorage } from "./../../utils/utils";

const storedData = readFromLocalStorage("tasks");
// storedData.length > 0 ? [storedData] : [defaultTask]
export default function TaskBoard() {
  console.log("********");
  console.log(storedData);
  console.log("********");
  const defaultTask = {
    id: crypto.randomUUID(),
    title: "Learn React",
    description:
      "I want to learn React such that I can treat it like my slave and make it do whatever I want to do",
    tags: ["web", "react", "js"],
    priority: "High",
    isFavorite: true,
  };
  const [tasks, setTasks] = useState([defaultTask]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState(null);

  const handleAddTask = (mewTask, isAdd) => {
    console.log(mewTask);
    if (isAdd) {
      setTasks([...tasks, mewTask]);
    } else {
      const updatedTasked = tasks.map((task) =>
        task.id === mewTask.id ? mewTask : task
      );
      setTasks(updatedTasked);
      setTaskToUpdate(null);
    }

    saveToLocalStorage("tasks", tasks);
    //console.log(tasks);
    setShowAddModal(false);
  };

  const handleEdit = (editTask) => {
    setShowAddModal(true);
    setTaskToUpdate(editTask);
    console.log(editTask);
  };
  console.log(tasks.length);
  return (
    <section className="mb-20" id="tasks">
      {showAddModal && (
        <AddTaskModal onSave={handleAddTask} taskToUpdate={taskToUpdate} />
      )}
      <div className="container mx-auto">
        <SearchTask />
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskActions
            onAddTask={() => {
              setShowAddModal(true);
            }}
          />
          <TaskList tasks={tasks} onEdit={handleEdit} />
        </div>
      </div>
    </section>
  );
}
