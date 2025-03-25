import React from "react";
import { Button } from "antd";

interface Props {
  onExecute: () => void;
  onDelete: () => void;
}

const TaskActions: React.FC<Props> = ({ onExecute, onDelete }) => {
  return (
    <>
      <Button onClick={onExecute}>Execute</Button>
      <Button danger onClick={onDelete}>Delete</Button>
    </>
  );
};

export default TaskActions;
