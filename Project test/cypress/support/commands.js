
Cypress.Commands.add('login', (email,password) => {
    return cy.request({
        method: 'POST',
        url: 'https://frx-wl-one.slashash.dev/api/users/login',
        form: true,
        body: {
          email,
          password,
        },
    })
})


Cypress.Commands.add('checkAccess', (access, rule_name) => {
    let page_access;

    return cy.request({
        method: 'GET',
        url: 'https://frx-wl-one.slashash.dev/api/common/content',
    })
    .then((res) => {
        JSON.stringify(res)
        page_access =  res.body.Access[rule_name]
        expect(access.view).to.equal(page_access.view);
        expect(access.add).to.equal(page_access.add);
        expect(access.edit).to.equal(page_access.edit);
        expect(access.delete).to.equal(page_access.delete);
    })
})

