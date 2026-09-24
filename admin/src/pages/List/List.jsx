import { useEffect, useState } from 'react'
import './List.css'
import axios from "axios"
import { toast } from "react-toastify"

const List = ({ url }) => {

    const [list, setList] = useState([]);

    const removeFood = async (foodId) => {
        try {
            const response = await axios.post(`${url}/api/food/remove`, { id: foodId });
            if (response.data.success) {
                toast.success(response.data.message);
                const listResponse = await axios.get(`${url}/api/food/list`);
                if (listResponse.data.success) {
                    setList(listResponse.data.data);
                }
            } else {
                toast.error("Error removing item");
            }
        } catch (error) {
            console.error(error);
            toast.error("Server error while deleting item");
        }
    };

    useEffect(() => {
        let isMounted = true;

        const fetchList = async () => {
            try {
                const response = await axios.get(`${url}/api/food/list`);
                if (isMounted) {
                    if (response.data.success) {
                        setList(response.data.data);
                    } else {
                        toast.error("Failed to fetch food list");
                    }
                }
            } catch (error) {
                if (isMounted) {
                    console.error(error);
                    toast.error("Error fetching data from server");
                }
            }
        };

        fetchList();

        return () => {
            isMounted = false; // Cleanup function
        };
    }, [url]);

    return (
        <div className='list add flex-col'>
            <p>All Foods List</p>
            <div className="list-table">
                <div className="list-table-format title">
                    <b>Image</b>
                    <b>Name</b>
                    <b>Category</b>
                    <b>Price</b>
                    <b>Action</b>
                </div>
                {list.map((item, index) => {
                    return (
                        <div key={index} className='list-table-format'>
                            <img src={`${url}/images/` + item.image} alt={item.name} />
                            <p>{item.name}</p>
                            <p>{item.category}</p>
                            <p>${item.price}</p>
                            <p onClick={() => removeFood(item._id)} className='cursor'>X</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default List;