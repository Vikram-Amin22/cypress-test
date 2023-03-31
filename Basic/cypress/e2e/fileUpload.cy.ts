import 'cypress-file-upload';

describe('File Upload', (() => {
    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/upload');
    })

    it.skip('Single File Upload',()=>{
        cy.get('#file-upload').attachFile('smile.png');
        cy.get('#file-submit').click();
        cy.wait(5000);
        cy.get("div[class='example'] h3").should('have.text','File Uploaded!');
    })

    it.skip('Rename the Uploaded File', () => {
        cy.get('#file-upload').attachFile({filePath:'smile.png',fileName:'avator.png'});
        cy.get('#file-submit').click();
        cy.wait(5000);
        cy.get("div[class='example'] h3").should('have.text','File Uploaded!');
    })

    it.skip('Drag and Drop File Upload',()=>{
        cy.get('#drag-drop-upload').attachFile('smile.png',{subjectType:'drag-n-drop'});
    })

    it('Multiple File Upload', () => {
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php');
        cy.get('#filesToUpload').attachFile(['smile.png']);
        cy.wait(5000)       
    })
}))