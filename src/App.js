import { useRef, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { toast } from "react-toastify";
import { v4 } from "uuid";

import LoginPage from "./pages/LoginPage";
import DebtsPage from "./pages/DebtsPage";
import TransactionPage from "./pages/TransactionPage";
import HomePage from "./pages/HomePage";
import Layout from "./components/layout";

import { DEBTS } from "./constants";
import Homework from "./pages/homework/Homework";

function App() {
  const [show, setShow] = useState(false);
  const [validated, setValidated] = useState(false);
  const [debt, setDebt] = useState({
    name: "",
    phone: "",
    theme: "",
    deadline: "",
    description: "",
  });
  const [debts, setDebts] = useState(
    JSON.parse(localStorage.getItem(DEBTS)) || [
      {
        id: "1",
        name: "Matematika",
        deadline: "2023-12-21",
        theme: "a ga b qo'shish",
        description: "Tochna! qilib kelinglar",
      },
      {
        id: "2",
        name: "Ingliz tili",
        deadline: "2023-12-25",
        theme: "can you speak english",
        description: "important lesson",
      },
    ]
  );
  const [selected, setSelected] = useState(null);
  const [search, setSearch] = useState("");
  const searchRef = useRef();

  const handleClose = () => {
    searchRef.current.focus();
    console.log(searchRef);
    setShow(false);
  };

  const handleShow = () => {
    setShow(true);
    setDebt({
      name: "",
      phone: "",
      theme: "",
      deadline: "",
      description: "",
    });
    setSelected(null);
  };

  const handleDebt = (e) => {
    setDebt({ ...debt, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    if (form.checkValidity()) {
      let newDebts;
      let newDebt = { ...debt,  id: v4() };
      if (selected === null) {
        newDebts = [...debts, newDebt];
        toast.success("Added successfully");
      } else {
        newDebts = debts.map((debt) => {
          if (debt.id === selected) {
            return newDebt;
          } else {
            return debt;
          }
        });
        toast.success("Edited successfully");
      }
      localStorage.setItem(DEBTS, JSON.stringify(newDebts));
      setDebts(newDebts);
      handleClose();
    } else {
      setValidated(true);
    }
  };

  const editDebt = (id) => {
    let debt = debts.find((debt) => debt.id === id);
    setSelected(id);
    setDebt(debt);
    setShow(true);
  };

  const deleteDebt = (id) => {
    let checkDelete = window.confirm("Do you want delete this debt ?");
    if (checkDelete) {
      let newDebts = debts.filter((debt) => debt.id !== id);
      localStorage.setItem(DEBTS, JSON.stringify(newDebts));
      setDebts(newDebts);
      toast.success("Deleted successfully");
    }
  };

  const handleSearch = (e) => {
    setSearch(e.target.value.trim().toLowerCase());
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="login" element={<LoginPage />} />
        <Route element={<Layout />}>
          <Route path="home" element={<HomePage debts={debts} />} />
          <Route
            path="homework"
            element={
              <DebtsPage
                debt={debt}
                debts={debts}
                show={show}
                validated={validated}
                selected={selected}
                search={search}
                handleClose={handleClose}
                handleShow={handleShow}
                handleSubmit={handleSubmit}
                handleDebt={handleDebt}
                editDebt={editDebt}
                deleteDebt={deleteDebt}
                handleSearch={handleSearch}
                ref={searchRef}
              />
            }
          />
          <Route path="schelude" element={<TransactionPage debts={debts} />} />
          <Route path="homework" element={<Homework />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
