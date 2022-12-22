import { useMemo, useState } from "react";
import {
  Alert,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { v4 as uuidv4 } from "uuid";

import { Task } from "../../components/Task";
import { styles } from "./styles";

import logo from "../../../assets/logo.png";
import plusIcon from "../../../assets/plus.png";
import clipboardIcon from "../../../assets/Clipboard.png";

import { ITask } from "../../types/Task";

export function Home() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [newTask, setNewTask] = useState("");

  const styleSheet = useMemo(() => {
    const taskListIsEmpty = tasks.length === 0;

    return styles(taskListIsEmpty);
  }, [tasks]);

  const finishedTasks = useMemo(() => {
    return tasks.filter((task) => task.done).length;
  }, [tasks]);

  function handleAddTask() {
    const task = {
      uuid: uuidv4(),
      title: newTask,
      done: false,
    };

    setTasks((oldState) => [...oldState, task]);
    setNewTask("");
  }

  function handleRemoveTaskClick(task: ITask) {
    Alert.alert("Remover", "Você tem certeza que deseja remover esta tarefa?", [
      {
        text: "Sim",
        onPress: () => removeTask(task),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  function removeTask(task: ITask) {
    const newTaskList = tasks.filter((t) => t.uuid !== task.uuid);

    setTasks(newTaskList);
    Alert.alert("Tarefa removida!");
  }

  function toggleDone(task: ITask) {
    const newTaskList = tasks.map((t) => {
      if (t.uuid === task.uuid) {
        t.done = !t.done;
      }

      return t;
    });

    setTasks(newTaskList);
  }

  return (
    <View style={styleSheet.container}>
      <View style={styleSheet.logoContainer}>
        <Image source={logo} style={styleSheet.logoImage} />
      </View>

      <View style={styleSheet.contentContainer}>
        <View style={styleSheet.inputContainer}>
          <TextInput
            style={styleSheet.input}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor="#808080"
            value={newTask}
            onChangeText={setNewTask}
          />

          <TouchableOpacity style={styleSheet.button} onPress={handleAddTask}>
            <Image source={plusIcon} />
          </TouchableOpacity>
        </View>

        <View style={styleSheet.progressContainer}>
          <View style={styleSheet.countContainer}>
            <Text style={styleSheet.countTitle}>Criadas</Text>
            <View style={styleSheet.countNumberContainer}>
              <Text style={styleSheet.countNumberText}>{tasks.length}</Text>
            </View>
          </View>

          <View style={styleSheet.countContainer}>
            <Text style={{ ...styleSheet.countTitle, color: "#8284FA" }}>
              Concluídas
            </Text>
            <View style={styleSheet.countNumberContainer}>
              <Text style={styleSheet.countNumberText}>{finishedTasks}</Text>
            </View>
          </View>
        </View>

        <FlatList
          data={tasks.sort((a, b) =>
            // Move tasks marked as done to the end of the list
            a.done && !b.done ? 1 : b.done && !a.done ? -1 : 0
          )}
          keyExtractor={(item, index) => String(index)}
          renderItem={({ item }) => (
            <Task
              key={item.uuid}
              task={item}
              onRemove={() => handleRemoveTaskClick(item)}
              onCheckTask={() => toggleDone(item)}
            />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <View style={styleSheet.emptyListContainer}>
              <Image source={clipboardIcon} />

              <Text style={styleSheet.emptyListTitle}>
                Você ainda não tem tarefas cadastradas
              </Text>
              <Text style={styleSheet.emptyListText}>
                Crie tarefas e organize seus itens a fazer
              </Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}
