import React, { useState } from "react";

function Team() {
  const [members, setMembers] = useState([
    {
      name: "Alice",
      tasks: {
        "To Do": ["Task 1", "Task 2"],
        "In Progress": [],
        "Done": [],
      },
    },
    {
      name: "Bob",
      tasks: {
        "To Do": ["Task 3"],
        "In Progress": ["Task 4"],
        "Done": [],
      },
    },
    {
      name: "Charlie",
      tasks: {
        "To Do": [],
        "In Progress": ["Task 5"],
        "Done": ["Task 6"],
      },
    },
  ]);

  const [taskInputs, setTaskInputs] = useState(
    members.map(() => ({
      "To Do": "",
      "In Progress": "",
      "Done": "",
    }))
  );

  const handleInputChange = (memberIndex, status, value) => {
    const updatedInputs = [...taskInputs];
    updatedInputs[memberIndex][status] = value;
    setTaskInputs(updatedInputs);
  };

  const addTask = (memberIndex, status) => {
    const taskName = taskInputs[memberIndex][status].trim();
    if (!taskName) return;

    const updatedMembers = [...members];
    updatedMembers[memberIndex].tasks[status].push(taskName);

    const updatedInputs = [...taskInputs];
    updatedInputs[memberIndex][status] = ""; // 입력 필드 초기화
    setTaskInputs(updatedInputs);

    setMembers(updatedMembers);
  };

  return (
    <div className="p-4">
      <div className="space-y-6">
        {members.map((member, memberIndex) => (
          <div key={member.name} className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
                <span className="text-lg font-bold text-gray-700">
                  {member.name[0]}
                </span>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <div className="grid grid-cols-3 gap-4 mt-4">
                {Object.entries(member.tasks).map(([status, tasks]) => (
                  <div
                    key={status}
                    className="p-4 bg-gray-100 border rounded-md shadow-sm"
                  >
                    <h4 className="font-medium text-gray-700">{status}</h4>
                    <ul className="mt-2 space-y-2">
                      {tasks.map((task, index) => (
                        <li
                          key={index}
                          className="p-2 bg-white border rounded-md shadow"
                        >
                          {task}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-2 flex items-center gap-2">
                      <input
                        type="text"
                        value={taskInputs[memberIndex][status]}
                        onChange={(e) =>
                          handleInputChange(memberIndex, status, e.target.value)
                        }
                        placeholder="Add task"
                        className="p-2 border rounded-md w-3/4"
                      />
                      <button
                        onClick={() => addTask(memberIndex, status)}
                        className="w-8 h-8 flex items-center justify-center bg-blue-500 text-white rounded-full hover:bg-blue-600 text-sm"
                        title="Add Task"
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
