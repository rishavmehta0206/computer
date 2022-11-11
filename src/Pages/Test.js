import React, { useEffect, useState } from "react";

const Test = () => {
  let _url = "https://jsonplaceholder.typicode.com/";
  let [posts, setPosts] = useState([]);
  let [todos, setTodos] = useState([]);
  let [users, setUsers] = useState([]);

  const [form, setForm] = useState({});
  const [slide,setSlide] = useState(false);

  const fetchData = async (type) => {
    let response;
    try {
      response = await fetch(_url + type).then((res) => res.json());
    } catch (error) {
      console.log(error.message);
    }
    return response;
  };

  const handleInitialFetch = () => {
    const requests = ["posts", "todos", "users"];
    const response = requests.map((request) => {
      return new Promise(async (resolve, reject) => {
        const result = await fetchData(request);
        resolve(result);
      });
    });
    Promise.all(response).then((response) => {
      let newPosts = response[0].splice(0, 10).map((result) => {
        let dataToBePutInOption = result.id + "-" + result.title.substr(0, 6);
        return dataToBePutInOption;
      });
      let newTodos = response[1].splice(0, 10).map((result) => {
        let dataToBePutInOption = result.id + "-" + result.title.substr(0, 6);
        return dataToBePutInOption;
      });
      let newUsers = response[2].splice(0, 10).map((result) => {
        let dataToBePutInOption = result.id + "-" + result.name;
        return dataToBePutInOption;
      });
      setPosts(newPosts);
      setTodos(newTodos);
      setUsers(newUsers);
    });
  };

  useEffect(() => {
    handleInitialFetch();
  }, []);

  const formSubmission = (e) => {
    e.preventDefault();
    if (form.role === "Admin") {
      form["access"] = "Granted";
    } else {
      form["access"] = "Denied";
    }
    console.log(form);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="max-w-[1280px] mx-auto p-4 bg-gray-300 h-auto min-h-[600px] mt-24">
      <div className="flex gap-4 flex-row">
        <div className="min-w-[180px]">
          <select className="w-full">
            <option selected disabled>
              Posts
            </option>
            {posts?.map((post) => {
              return <option>{post}</option>;
            })}
          </select>
        </div>
        <div className="min-w-[180px]">
          <select className="w-full">
            <option selected disabled>
              Todos
            </option>
            {todos?.map((todo) => {
              return <option>{todo}</option>;
            })}
          </select>
        </div>
        <div className="min-w-[180px]">
          <select className="w-full">
            <option selected disabled>
              Users
            </option>
            {users?.map((user) => {
              return <option>{user}</option>;
            })}
          </select>
        </div>
      </div>
      <div className="mt-10 w-1/2 grid grid-cols-6 gap-4">
        <input
          onChange={handleChange}
          name="name"
          className="col-span-6 p-2 text-black border-none outline-none rounded-lg"
          placeholder="enter name"
        />
        <input
          onChange={handleChange}
          name="email"
          className="col-span-6 p-2 text-black border-none outline-none rounded-lg"
          placeholder="enter email"
        />
        <select
          onChange={handleChange}
          name="role"
          className=" p-2 col-span-6 text-black border-none outline-none rounded-lg"
        >
          <option selected disabled>
            select role
          </option>
          <option>Admin</option>
          <option>User</option>
          <option>Reviewer</option>
        </select>
        <button
          onClick={formSubmission}
          className="cursor-pointer col-span-2 w-auto bg-cyan-700 text-white font-bold p-2 shadow-lg rounded"
        >
          Submit.
        </button>
      </div>
      {/* <div onClick={()=>setSlide(!slide)} className="w-[80px] bg-white h-[30px] mt-8 cursor-pointer truncate">
            <div className={`h-full w-[30%] bg-red-400 relative left-0 ${!slide ?'left-0' : 'left-[70%]' }   duration-200 ease-linear`}></div>
      </div> */}
    </div>
  );
};

export default Test;