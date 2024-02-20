// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

import { baseUrl } from './baseUrl'
import { admin, testUsers } from '../fixtures/headers'

beforeEach(() => {
  cy.request({
    method: 'POST',
    url: 'test/seed-users',
    body: testUsers,
  })
  // cy.enableTestUsers()
  // cy.setUpAdminTeacherView()
  // cy.setUpSecondaryTeacherView()
})

afterEach(() => {
  cy.request({
    method: 'POST',
    url: 'api/test/clear-users',
    body: testUsers,
    headers: admin,
  })
})

Cypress.on('uncaught:exception', err => {
  if (err.message.includes('THIS_IS_A_TEST_ERROR_CAUSED_BY_ADMIN_PLEASE_IGNORE')) {
    return false
  }
  return true
})

export { baseUrl }

// Alternatively you can use CommonJS syntax:
// require('./commands')
