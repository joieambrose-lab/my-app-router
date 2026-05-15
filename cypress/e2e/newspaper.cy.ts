describe('Homepage', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('loads successfully', () => {
    cy.get('main').should('exist')
  })

  it('renders 10 articles', () => {
    cy.get('main > div').should('have.length', 10)
  })

  it('has a title and published date for each article', () => {
    cy.get('main > div').each(($article) => {
      cy.wrap($article).find('a').should('exist')
      cy.wrap($article).find('p').should('exist')
    })
  })

  it('navigates to article page when title is clicked', () => {
    cy.get('main > div').first().find('a').click()
    cy.url().should('include', '/articles/')
    cy.get('main').should('exist')
  })

  it('article page displays correct content based on slug', () => {
    cy.get('main > div').first().find('a').click()
    cy.url().should('include', '/articles/')
    cy.get('main').within(() => {
      cy.get('h1').should(
        'contain.text',
        'Breaking News: Tech Innovations in 2025'
      )
      cy.get('p').should('contain.text', 'Jane Doe')
      cy.get('p').should('contain.text', '2025-01-14')
      cy.get('p').should(
        'contain.text',
        'Discover the latest technological advancements'
      )
    })
  })
})

describe('Navigation', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('contains expected category links', () => {
    cy.get('nav').should('exist')
    cy.get('nav').contains('Technology')
    cy.get('nav').contains('Finance')
    cy.get('nav').contains('Wellness')
    cy.get('nav').contains('Travel')
    cy.get('nav').contains('Education')
  })
})
