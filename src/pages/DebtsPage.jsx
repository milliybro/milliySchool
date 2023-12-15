import React, { forwardRef } from "react";
import DebtCard from "../components/card/DebtCard";
import { Button, Form, Modal } from "react-bootstrap";

const DebtsPage = forwardRef(
  (
    {
      debts,
      show,
      handleShow,
      handleClose,
      validated,
      handleSubmit,
      debt,
      handleDebt,
      editDebt,
      selected,
      deleteDebt,
      search,
      handleSearch,
    },
    ref
  ) => {
    const debtsFound = debts.filter((debt) =>
      debt.name.toLowerCase().includes(search)
    );
    return (
      <div>
        <div className="input-group mb-3">
          <input
            ref={ref}
            value={search}
            onChange={handleSearch}
            type="text"
            className="form-control"
            placeholder="Uyga vazifani qidirish..."
          />
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={handleShow}
          >
            Uyga vazifa qo'shish
          </button>
        </div>
        {debtsFound.map((debt) => (
          <DebtCard
            key={debt.id}
            editDebt={editDebt}
            deleteDebt={deleteDebt}
            {...debt}
          >
            {debt.description}
          </DebtCard>
        ))}
        <Modal show={show} onHide={handleClose}>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Modal.Header closeButton>
              <Modal.Title>Uyga vazifa</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>Fan nomi</Form.Label>
                <Form.Control
                  value={debt.name}
                  onChange={handleDebt}
                  required
                  type="text"
                />
                <Form.Control.Feedback type="invalid">
                  Iltimos kiriting !
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="theme">
                <Form.Label>Mavzu nomi</Form.Label>
                <Form.Control
                  value={debt.theme}
                  onChange={handleDebt}
                  required
                  type="text"
                />
                <Form.Control.Feedback type="invalid">
                  Iltimos kiriting !
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="deadline">
                <Form.Label>Topshirish vaqti</Form.Label>
                <Form.Control
                  value={debt.deadline}
                  onChange={handleDebt}
                  required
                  type="date"
                />
                <Form.Control.Feedback type="invalid">
                  Iltimos kiriting !
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="description">
                <Form.Label>Qo'shimcha qilish</Form.Label>
                <Form.Control
                  value={debt.description}
                  onChange={handleDebt}
                  required
                  as="textarea"
                />
                <Form.Control.Feedback type="invalid">
                  Iltimos kiriting !
                </Form.Control.Feedback>
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Chiqish
              </Button>
              <Button type="submit" variant="primary">
                Uyga vazifa {selected === null ? "qo'shish" : "saqlash"}
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>
      </div>
    );
  }
);

export default DebtsPage;
