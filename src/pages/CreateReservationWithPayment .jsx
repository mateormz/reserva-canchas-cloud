import React, { useState } from 'react';
import { reservationPost } from '../services/api';
import { Container, Form, Button, Alert } from 'react-bootstrap';

const CreateReservationWithPayment = () => {
  const [userId, setUserId] = useState('');
  const [fieldId, setFieldId] = useState('');
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('');
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const reservationRequest = {
      user: userId,
      field: fieldId,
      zonedatetime: date,
      timeslot_id: timeSlot,
    };

    try {
      const response = await createReservationWithPayment(reservationRequest); // Llama a la API para crear la reserva con pago
      setSuccessMessage('Reserva y pago creados exitosamente');
    } catch (error) {
      setError('Error al crear la reserva o el pago');
    }
  };

  return (
    <Container
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
      }}
    >
      <Form onSubmit={handleSubmit} style={{ maxWidth: '600px', width: '100%' }}>
        <h2 style={{ textAlign: 'center', color: '#33fff0', marginBottom: '1.5rem' }}>
          Crear Reserva con Pago
        </h2>

        {error && (
          <Alert variant="danger" style={{ textAlign: 'center' }}>
            {error}
          </Alert>
        )}
        {successMessage && (
          <Alert variant="success" style={{ textAlign: 'center' }}>
            {successMessage}
          </Alert>
        )}

        <Form.Group controlId="userId">
          <Form.Label>Usuario ID</Form.Label>
          <Form.Control
            type="text"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="fieldId">
          <Form.Label>Campo ID</Form.Label>
          <Form.Control
            type="text"
            value={fieldId}
            onChange={(e) => setFieldId(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="date">
          <Form.Label>Fecha</Form.Label>
          <Form.Control
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="timeSlot">
          <Form.Label>TimeSlot ID</Form.Label>
          <Form.Control
            type="text"
            value={timeSlot}
            onChange={(e) => setTimeSlot(e.target.value)}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit" style={{ marginTop: '1rem', width: '100%' }}>
          Crear Reserva con Pago
        </Button>
      </Form>
    </Container>
  );
};

export default CreateReservationWithPayment;