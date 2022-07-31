import { supabase } from "../api/supaConnect";
import { useState } from 'react';

export default function Form() {
    let [todo, setTodo] = useState('');
    let [desc, useDesc] = useState('');
    let [time, useTime] = useState('');
    let [status, useStatus] = useState('');

    async function getTodo() {
        let { data, err } = await supabase
            .from('todos')
            .select();

        if (err) {
            console.log(err);
        } else {
            return (
                setTodo = data.todo,
                useDesc = data.desc,
                useTime = data.time,
                useStatus = data.status
            );
        }
    }

    getTodo();

    return (
        <>
            <h1 className="text-5xl font-bold">Current Todoas</h1>

            <div className="form-control w-full">
                <div className="input-group">
                    <input type="text" placeholder="New Todos!" className="input input-bordered w-11/12 md:w-full" />
                    <button className="btn btn-square">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                    </button>
                </div>
            </div>

            <div className="overflow-x-auto w-11/12 md:w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>ToDos</th>
                            <th>Time</th>
                            <th>Desc</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>1</th>
                            <td>{todo}</td>
                            <td>{time}</td>
                            <td>{desc}</td>
                            <td>
                                <button className="btn btn-circle btn-ghost">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}