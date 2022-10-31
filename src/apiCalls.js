const getReservations = async () => {
    return await fetch('http://localhost:3001/api/v1/reservations')
}
export { getReservations }