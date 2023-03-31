import Login from '../PageObjects/Login';
import users from "../fixtures/PlanCostBenchmark.json"

describe('Plan Cost Benchmark', () => {
    for (let user in users) {
    let email = users[user].email;
    let password = users[user].password;
    let access = users[user].access;
    let rule_name = users[user].rule_name;
    let page_name = users[user].page_name;
    let visible = users[user].visible;
    let filters = users[user].filters;
    let add_plan_cost_benchmark = users[user].add_plan_cost_benchmark;
    let delete_plan_cost_benchmark = users[user].delete_plan_cost_benchmark;

    beforeEach(() => {
        cy.login(email, password)
        cy.visit('/fee-rx/plan-cost-benchmark/all')
    })

    it.skip('Check Access', () => {
       cy.checkAccess(access, rule_name)
    })
    
    it.skip('check CRUD visible', () => {
        cy.get('.mb-0.me-auto').should('have.text', page_name);     
        cy.get('.table.table-striped.table-hover').should(visible.view);
        cy.get(".btn.btn-primary[data-bs-toggle='modal']").should(visible.add);
        cy.get('[title="Download Report"]').should(visible.export);
        cy.get('[data-bs-target="#modalDelete"]').should(visible.delete);
    })

    it('Check Fillter', () => {
        filters.plan_sponsor.forEach((item) => {
            cy.get('#btnFilterToggle').click();
            cy.wait(1000)
            cy.get('#fSelPlanSponsor').select(item.name).should('have.value',item.value)
            cy.get('.flex-column > .btn-secondary').click()
            cy.wait(1000)

        //     cy.get('table').then(($el) => {
        //         if ($el.length) {
        //         cy.log('el1')
        //         } else {
        //             cy.log('el2')
        //         }
        //         });


        //         cy.contains('No reports have been generated yet!').should('exist').then(($el) => {
        //             cy.log($el.length)
        //             if ($el.length) {
        //                 cy.log('el3')
        //             } else {
        //              cy.log('el4')
        //             }
        //             });


            cy.get('table>tbody>tr>td:nth-child(2)').each(($el, $index, $list) => {
                cy.get($el).should(item.contain, item.name)
            })

            // cy.get('#repeatReports').then(($data) => {
            //     cy.log($data.find('tbody'))
            // })

     
            cy.get('.flex-column > .d-flex > .btn').click();
        })
    })

    if(access.view == true && access.add == true){
        it.skip('Add Plan Cost Benchmark', () => {
            cy.get(".btn.btn-primary[data-bs-toggle='modal']").click({force : true})
            cy.intercept('POST', '**/api/reports/fee-rx/generate-plan-cost-benchmark').as('generate_report');
            cy.get('#selPlanSponsor').should('be.visible');
            cy.get('#txtReportDate').should('be.visible');
            cy.get('.modal-footer > .btn-primary').click();

            // validation check
            cy.get('#dmxValidatorErrorformGenerateReportplan_sponsor_id').should('have.text', 'This field is required.');
            cy.get('#dmxValidatorErrorformGenerateReportreport_date').should('have.text', 'This field is required.');

            cy.get('#selPlanSponsor').select('Indian Oil Corporation');
            cy.wait(1000);
            cy.get('#txtReportDate').type('2023-03-30');
            cy.get('[type="checkbox"][name="show_charts[]"]').check({force: true})
            cy.get('.modal-footer > .btn-primary').click();
            cy.wait('@generate_report', { requestTimeout: 10000 });
            cy.get('@generate_report').then((xhr) => {
            expect(xhr.response.statusCode).to.eq(add_plan_cost_benchmark.success);
         })
        })
    }
    } 
})


