
describe('Handle Tables', (() => {
    beforeEach('Login', () => {
        cy.visit('https://demo.opencart.com/admin/index.php');
        cy.get('#input-username').type('demo');
        cy.get('#input-password').type('demo');
        cy.get("button[type='submit']").click();
        cy.get('.btn-close').click();

        //Customers--->customers
        cy.get(".parent[href='#collapse-5']").click();
        cy.get("li[id='menu-customer'] li:nth-child(1) a:nth-child(1)").click();  
    })

    it.skip('Check Number Rows & Columns',()=>{
        cy.get('table[class="table table-bordered table-hover"]>tbody>tr').should('have.length','10');
        cy.get('table[class="table table-bordered table-hover"]>thead>tr>td').should('have.length','7')
    })

    it.skip('Check cell data from specific row & column',()=>{
        cy.get(':nth-child(5) > :nth-child(3)').contains('princytrainings4@gmail.com')
    })   

    it.skip('Read all the rows & colums data in the first page',()=>{
        cy.get('table[class="table table-bordered table-hover"]>tbody>tr')
        .each( ($row, index, $rows)=>{
             cy.wrap($row).within( ()=>{
                 cy.get('td').each( ($col, index, $cols)=>{
                  cy.log($col.text());
           })
        })
        })
     })

     it.only('Pagination',()=>{

        //find total  number of pages
        /*let totalPages;
        cy.get('.col-sm-6.text-end').then( (e)=>{
             let mytext =e.text();
             totalPages=mytext.substring( mytext.indexOf("(")+1,mytext.indexOf("Pages")-1)
             cy.log('Total number of pages in a table========>'+totalPages);

        })*/

        let totalPages=5;
        for(let p=1;p<=totalPages;p++){
            if(totalPages>1){
                cy.log('Active Page is =='+p);
                cy.get("ul[class='pagination']>li:nth-child("+p+")").click
                cy.wait(3000);

                cy.get('table[class="table table-bordered table-hover"]>tbody>tr')
                  .each( ($row, index, $rows)=>{
                     cy.wrap($row).within( ()=>{
                        cy.get('td:nth-child(3)').then((e)=>{
                        cy.log(e.text());
            })
         })
         })
         }
        }
      })

}))