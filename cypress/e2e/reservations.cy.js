describe('reservations', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.intercept('GET', 'http://localhost:3001/api/v1/reservations', { fixture: '../fixtures/allReservations'}).as('reservations')
  })

  it('should load a reservations page with a title', () => {
    cy.get('h1').contains('Turing Cafe Reservations')
  })

  it('should see a form for a name, date, time and number of guests with a make reservation button', () => {
    cy.get('[placeholder="Name"]')
    .get('[placeholder="Date (mm/dd)"]')
    .get('[placeholder="Time"]')
    .get('[type="number"]')
    .get('.make-reservation')
  })

  it('should see all existing reservation cards', () => {
    cy.get('.reservation-card-container')
  })

  // it('should see the name, date, time, number of guests and cancel button on the cards', () => {
  //   cy.get('.card')
  // is a test like this necessary?
  // })

  it('should check that the data is matching the form input', () => {
    cy.get('[placeholder="Name"]').type('Christie')
      .get('[placeholder="Date (mm/dd)"]').type('12/29')
      .get('[placeholder="Time"]').type('7:00')
      .get('[type="number"]').type('12')
  })


})