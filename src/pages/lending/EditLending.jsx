import { useEffect, useState } from "react";
import Case from "../../components/Case";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function LendingEdit() {
    const [forms, setForms] = useState({
        user: '',
        total_stuff: '',
        note: ''
    })

    const params = useParams()
    const id = params.id

    const [error, setError] = useState([])

    const navigate = useNavigate()

    const instance = axios.create({
        baseURL: 'http://localhost:8000/',
        headers: {
            'Authorization': ' Bearer' + localStorage.getItem('access_token'),
        }
    })

    useEffect(() => {
        instance.get(`/lending/${id}`)
            .then(res => {
                setForms(res.data.data);
                console.log(res.data.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const handleEditLending = (event) => {
        event.preventDefault();

        instance.patch(`/lending/${id}`, forms)
            .then(res => {
                navigate('/lending');
            })
            .catch(errr => {
                setError(err.response.data.data)
                console.log(err.response)
            })
    }
    return (
        <Case>
            <div className="block m-auto h-screen bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="items-center m-5 pb-10 pt-10">
                    {/* <div role="alert">
                        <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2">
                            Gagal!
                        </div>
                        <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
                            <ul>
                                <li></li>
                            </ul>
                        </div>
                    </div> */}
                    <div className="flex justify-center">
                        <h5 className="mb-1 ml-5 text-3xl font-medium text-gray-900 dark:text-white">Lending</h5>
                    </div>
                    <form onSubmit={handleEditLending} Class="max-w-sm mx-auto">
                        <div Class="mb-5">
                            <label for="name" Class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                            <input type="text" id="name" Class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="User" required onChange={e => setForms({ ...forms, name: e.target.value })} />
                        </div>
                        <div Class="mb-5">
                            <label for="total_stuff" Class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Total</label>
                            <input type="number" id="total_stuff" Class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Total" required onChange={e => setForms({ ...forms, total_stuff: e.target.value })} />
                        </div>
                        <div Class="mb-5">
                            <label for="notes" Class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Note</label>
                            <input type="text" id="notes" Class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Note" required onChange={e => setForms({ ...forms, notes: e.target.value })} />
                        </div>
                        <div className="flex justify-end">
                            <button type="submit" Class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </Case>
    )
}