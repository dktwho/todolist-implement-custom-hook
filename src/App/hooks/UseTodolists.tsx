import {useState} from "react";
import  {TodolistType} from "../App";
import {todolistId1, todolistId2} from "../id-utils";

export const useTodolists = () => {
    let [todolists, setTodolists] = useState<Array<TodolistType>>([
        {id: todolistId1, title: "What to learn", filter: "all"},
        {id: todolistId2, title: "What to buy", filter: "all"}
    ])
    return [todolists, setTodolists] as const
}