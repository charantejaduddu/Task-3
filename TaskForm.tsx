import React, { useState } from "react";
import { Form, Input, Button, message } from "antd";
import { createTask } from "../api"

const TaskForm: React.FC = () => {
  const [loading, setLoading] = useState(false);    

  const handleSubmit = async (values: any) => {
    setLoading(true);
    try {
      await createTask(values);
      message.success("Task created successfully");
    } catch (error) {
      message.error("Failed to create task");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form onFinish={handleSubmit} layout="vertical">
      <Form.Item name="id" label="ID" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="name" label="Name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="owner" label="Owner">
        <Input />
      </Form.Item>
      <Form.Item name="command" label="Command" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Button type="primary" htmlType="submit" loading={loading}>
        Create Task
      </Button>
    </Form>
  );
};

export default TaskForm;
