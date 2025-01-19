import React, { useState } from "react";

function Team() {
  const [members, setMembers] = useState([
    {
      name: "Alice",
      tasks: {
        "할 일": ["작업 1", "작업 2"],
        "진행 중": [],
        "완료": [],
      },
    },
    {
      name: "Bob",
      tasks: {
        "할 일": ["작업 3"],
        "진행 중": ["작업 4"],
        "완료": [],
      },
    },
    {
      name: "Charlie",
      tasks: {
        "할 일": [],
        "진행 중": ["작업 5"],
        "완료": ["작업 6"],
      },
    },
  ]);

  const [taskInputs, setTaskInputs] = useState(
    members.map(() => ({
      "할 일": "",
      "진행 중": "",
      "완료": "",
    }))
  );

  const [selectedTask, setSelectedTask] = useState(null);

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

  const handleTaskClick = (memberIndex, status, taskIndex) => {
    setSelectedTask({ memberIndex, status, taskIndex });
  };

  const updateTaskStatus = (newStatus) => {
    if (!selectedTask) return;

    const { memberIndex, status, taskIndex } = selectedTask;
    const updatedMembers = [...members];

    const task = updatedMembers[memberIndex].tasks[status].splice(taskIndex, 1)[0];
    updatedMembers[memberIndex].tasks[newStatus].push(task);

    setMembers(updatedMembers);
    setSelectedTask(null);
  };

  const deleteTask = () => {
    if (!selectedTask) return;

    const { memberIndex, status, taskIndex } = selectedTask;
    const updatedMembers = [...members];

    updatedMembers[memberIndex].tasks[status].splice(taskIndex, 1);

    setMembers(updatedMembers);
    setSelectedTask(null);
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
                          onClick={() => handleTaskClick(memberIndex, status, index)}
                          className="p-2 bg-white border rounded-md shadow cursor-pointer hover:bg-gray-200"
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
                        placeholder="작업 추가"
                        className="p-2 border rounded-md w-3/4"
                      />
                      <button
                        onClick={() => addTask(memberIndex, status)}
                        className="w-8 h-8 flex items-center justify-center bg-blue-500 text-white rounded-full hover:bg-blue-600 text-sm"
                        title="작업 추가"
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

      {/* Modal */}
      {selectedTask && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-md shadow-lg w-96">
            <h3 className="text-lg font-semibold mb-4">작업 관리</h3>
            <div className="space-y-2">
              <button
                onClick={() => updateTaskStatus("할 일")}
                className="w-full py-2 px-4 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
              >
                "할 일"로 이동
              </button>
              <button
                onClick={() => updateTaskStatus("진행 중")}
                className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                "진행 중"으로 이동
              </button>
              <button
                onClick={() => updateTaskStatus("완료")}
                className="w-full py-2 px-4 bg-green-500 text-white rounded-md hover:bg-green-600"
              >
                "완료"로 이동
              </button>
              <button
                onClick={deleteTask}
                className="w-full py-2 px-4 bg-red-500 text-white rounded-md hover:bg-red-600"
              >
                작업 삭제
              </button>
            </div>
            <button
              onClick={() => setSelectedTask(null)}
              className="mt-4 w-full py-2 px-4 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400"
            >
              취소
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Team;
