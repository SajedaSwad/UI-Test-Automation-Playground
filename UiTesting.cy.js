// describe('UI Testing Playground -  Cypress Tests', () => {

//   it('should open the home page', () => {
//     cy.visit('/');
//     cy.title().should('include', 'UI Test Automation');
//   });

//   it('should click the button with dynamic ID', () => {
//     cy.visit('/dynamicid');
//     cy.get('button.btn-primary').click();
//   });

//   it('should click the blue button with class attribute', () => {
//     cy.visit('/classattr');
//     cy.get('.btn-primary').click();
//     cy.on('window:alert', (txt) => {
//       expect(txt).to.contain('Primary button pressed');
//     });
//   });

//   it('should click the green button (Hidden Layers)', () => {
//     cy.visit('/hiddenlayers');
//     cy.get('#greenButton').click();
//   });

//   it('should wait for AJAX data to appear', () => {
//     cy.visit('/ajax');
//     cy.get('#ajaxButton').click();
//     cy.get('#content > p', { timeout: 20000 })
//       .should('be.visible')
//       .and('contain.text', 'Data loaded with AJAX get request.');
//   });

//   it('should wait for client side delay message', () => {
//     cy.visit('/clientdelay');
//     cy.get('#ajaxButton').click();
//     cy.get('.bg-success', { timeout: 20000 })
//       .should('contain.text', 'Data calculated on the client side.');
//   });
// });

describe('UI Testing Playground - Full Cypress Practice Suite', () => {

  // ✅ Test 1: Home Page
  it('should open the home page', () => {
    cy.visit('/');
    cy.title().should('include', 'UI Test Automation');
  });

  // ✅ Test 2: Dynamic ID
  it('should click the button with a dynamic ID', () => {
    cy.visit('/dynamicid');
    cy.get('button.btn-primary').click();
  });

  // ✅ Test 3: Class Attribute
  it('should click the button with class attribute', () => {
    cy.visit('/classattr');
    cy.get('.btn-primary').click();
    cy.on('window:alert', (txt) => {
      expect(txt).to.contain('Primary button pressed');
    });
  });

  // ✅ Test 4: Hidden Layers
  it('should click the green button (Hidden Layers)', () => {
    cy.visit('/hiddenlayers');
    cy.get('#greenButton').click();
  });

  // ✅ Test 5: AJAX Data
  it('should wait for AJAX data to appear', () => {
    cy.visit('/ajax');
    cy.get('#ajaxButton').click();
    cy.get('#content > p', { timeout: 20000 })
      .should('be.visible')
      .and('contain.text', 'Data loaded with AJAX get request.');
  });

  // ✅ Test 6: Client Side Delay
  it('should wait for client side delay message', () => {
    cy.visit('/clientdelay');
    cy.get('#ajaxButton').click();
    cy.get('.bg-success', { timeout: 20000 })
      .should('contain.text', 'Data calculated on the client side.');
  });

  // ✅ Test 7: Sample App (Login simulation)
  it('should log in with correct credentials', () => {
    cy.visit('/sampleapp');
    cy.get('input[name="UserName"]').type('testuser');
    cy.get('input[name="Password"]').type('pwd');
    cy.get('#login').click();
    cy.get('#loginstatus').should('contain.text', 'Welcome');
  });

  // ✅ Test 8: Scrollbars
  it('should scroll to the hidden button and click it', () => {
    cy.visit('/scrollbars');
    cy.get('#hidingButton').scrollIntoView().click();
  });

  // ✅ Test 9: Overlapped Element
  it('should type in a field that might be overlapped', () => {
    cy.visit('/overlapped');
    cy.get('#id').scrollIntoView().type('12345');
  });

  // ✅ Test 10: Shadow DOM
  it('should find text inside Shadow DOM', () => {
    cy.visit('/shadowdom');
    cy.get('guid-generator').shadow().find('#buttonGenerate').click();
    cy.get('guid-generator').shadow().find('#editField').should('not.have.value', '');
  });

  // ✅ Test 11: Text Input
  it('should type into the text input and verify the button label changes', () => {
    cy.visit('/textinput');
    cy.get('#newButtonName').type('Cypress Rocks!');
    cy.get('#updatingButton').click().should('have.text', 'Cypress Rocks!');
  });

  // ✅ Test 12: Load Delay
  it('should wait for the delayed button to appear', () => {
    cy.visit('/loaddelay');
    cy.get('.btn-primary', { timeout: 20000 }).should('be.visible').click();
  });

  // ✅ Test 13: Verify Text
  it('should verify the text on the page', () => {
    cy.visit('/verifytext');
    cy.contains('Welcome UserName!').should('be.visible');
  });

  // ✅ Test 14: Progress Bar
  it('should stop the progress bar around 75%', () => {
    cy.visit('/progressbar');
    cy.get('#startButton').click();

    // Poll until it reaches 75%
    cy.get('#progressBar', { timeout: 15000 }).should(($bar) => {
      const value = parseInt($bar.text());
      expect(value).to.be.greaterThan(0);
    });

    // Stop the bar (just as a demo)
    cy.get('#stopButton').click();
  });

  // ✅ Test 15: Mouse Over
  it('should trigger mouse over and increment count', () => {
    cy.visit('/mouseover');
    cy.contains('Click me').trigger('mouseover').click();
    cy.get('#clickCount').should('contain.text', '1');
  });

    // ✅ Test 16: Visibility
  it('should verify hidden and visible elements', () => {
    cy.visit('/visibility');
    cy.get('#hideButton').click();
    cy.get('#removedButton').should('not.exist');
    cy.get('#zeroWidthButton').should('not.be.visible');
    cy.get('#invisibleButton').should('not.be.visible');
    cy.get('#overlappedButton').should('not.be.visible');
    cy.get('#notdisplayedButton').should('not.be.visible');
    cy.get('#offscreenButton').should('not.be.visible');
  });

  // ✅ Test 17: Dynamic Table
  it('should verify Chrome CPU load in Dynamic Table', () => {
    cy.visit('/dynamictable');
    cy.contains('Chrome').parent().within(() => {
      cy.get('span').eq(2).then(($cpu) => {
        const cpuText = $cpu.text();
        cy.get('.bg-warning').should('contain.text', cpuText);
      });
    });
  });

  // ✅ Test 18: Hidden Elements with Text
  it('should detect text even if it is hidden', () => {
    cy.visit('/hiddenlayers');
    cy.get('body').should('contain.text', 'Green Button');
  });

  // ✅ Test 19: Load Delay with timeout
  it('should wait for the page to load after a delay', () => {
    cy.visit('/loaddelay', { timeout: 15000 });
    cy.get('.btn-primary').should('be.visible');
  });

  // ✅ Test 20: Alerts
  it('should handle a simple JavaScript alert', () => {
    cy.visit('/classattr');
    cy.get('.btn-primary').click();
    cy.on('window:alert', (alertText) => {
      expect(alertText).to.contain('Primary button pressed');
    });
  });

  // ✅ Test 21: Sample App logout test
  it('should log in and log out successfully', () => {
    cy.visit('/sampleapp');
    cy.get('input[name="UserName"]').type('sajeda');
    cy.get('input[name="Password"]').type('pwd');
    cy.get('#login').click();
    cy.get('#loginstatus').should('contain.text', 'Welcome');
    cy.get('#login').click(); // clicking again logs out
    cy.get('#loginstatus').should('contain.text', 'User logged out.');
  });

  // ✅ Test 22: Non-breaking Space
  it('should click the button with non-breaking space in its text', () => {
    cy.visit('/nbsp');
    cy.contains('Button with non-breaking text').click();
  });

  // ✅ Test 23: Overlapped Element (scroll fix)
  it('should scroll to and type into overlapped input', () => {
    cy.visit('/overlapped');
    cy.get('#id').scrollIntoView().clear().type('Cypress test');
    cy.get('#name').type('UI Playground');
  });

  // ✅ Test 24: Shadow DOM Button Click
  it('should click the generate button inside Shadow DOM and verify GUID generated', () => {
    cy.visit('/shadowdom');
    cy.get('guid-generator').shadow().find('#buttonGenerate').click();
    cy.get('guid-generator').shadow().find('#editField')
      .invoke('val')
      .should('match', /^[0-9a-f-]+$/);
  });

  // ✅ Test 25: Text Input multiple names
  it('should change button text multiple times', () => {
    cy.visit('/textinput');
    const names = ['Cypress', 'Automation', 'Playground'];
    names.forEach((name) => {
      cy.get('#newButtonName').clear().type(name);
      cy.get('#updatingButton').click().should('have.text', name);
    });
  });


});
