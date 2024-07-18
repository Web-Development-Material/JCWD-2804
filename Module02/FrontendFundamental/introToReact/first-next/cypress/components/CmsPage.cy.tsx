import React from 'react';
import { mount } from 'cypress/react';
import CmsPage from '@/app/cms-page/page';

describe('<CmsPage />', () => {
  beforeEach(() => {
    cy.intercept('GET', '/api/cms', {
      fixture: 'entries.json'
    }).as('fetchEntries');
  });

  it('renders contentful entries', () => {
    mount(<CmsPage />);
    cy.wait('@fetchEntries');
    cy.get('h1').contains('Contentful Entries');
    cy.get('h2').should('have.length', 2);
    cy.get('h2').first().contains('Test Page 1');
    cy.get('h2').last().contains('Test Page 2');
    cy.get('p').contains('Slug: test-page-1');
    cy.get('p').contains('Slug: test-page-2');
    cy.get('p').contains('Internal Name: Test Name 1');
    cy.get('p').contains('Internal Name: Test Name 2');
  });
});
