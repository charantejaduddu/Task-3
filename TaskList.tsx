import React, { useEffect, useState } from "react";
import { Table, Button, message } from "antd";
import { fetchTasks, deleteTask, executeTask } from "../api";

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    try {
      const response = await fetchTasks();
      setTasks(response.data);
    } catch (error) {
      message.error("Failed to fetch tasks");
    }
  };

  const handleDelete = async (id: string) => {
    await deleteTask(id);
    message.success("Task deleted");
    loadTasks();
  };

  const handleExecute = async (id: string) => {
    const response = await executeTask(id);
    message.info(`Output: ${response.data.output}`);
  };

  return (
    <Table dataSource={tasks} rowKey="id">
      <Table.Column title="ID" dataIndex="id" />
      <Table.Column title="Name" dataIndex="name" />
      <Table.Column title="Owner" dataIndex="owner" />
      <Table.Column title="Command" dataIndex="command" />
      <Table.Column
        title="Actions"
        render={(task: any) => (
          <>
            <Button onClick={() => handleExecute(task.id)}>Execute</Button>
            <Button danger onClick={() => handleDelete(task.id)}>Delete</Button>
          </>
        )}
      />
    </Table>
  );
};

export default TaskList;
