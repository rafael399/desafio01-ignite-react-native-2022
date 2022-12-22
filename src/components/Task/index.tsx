import { useMemo } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Checkbox from "expo-checkbox";

import { styles } from "./styles";

import trashIcon from "../../../assets/trash.png";

import { ITask } from "../../types/Task";

type Props = {
  task: ITask;
  onRemove: () => void;
  onCheckTask: () => void;
};

export function Task({ task, onRemove, onCheckTask }: Props) {
  const styleSheet = useMemo(() => {
    return styles(task.done);
  }, [task.done]);

  return (
    <View style={styleSheet.container}>
      <Checkbox
        style={styleSheet.checkbox}
        value={task.done}
        onValueChange={onCheckTask}
        color={task.done ? "#5E60CE" : "#4EA8DE"}
      />

      <Text style={styleSheet.title}>{task.title}</Text>

      <TouchableOpacity style={styleSheet.removeButton} onPress={onRemove}>
        <Image source={trashIcon} />
      </TouchableOpacity>
    </View>
  );
}
