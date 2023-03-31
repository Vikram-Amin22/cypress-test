import './commands';


    Cypress.on("uncaught:exception", (error) => {
        if (
            error.message.includes(
                "Timed out after waiting `5000ms` for your remote page to load.",
            )
        ) {
            return false;
        }
    });
    
    Cypress.on("fail", (error) => {
        if (
            error.message.includes(
                "Timed out after waiting `5000ms` for your remote page to load.",
            )
        ) {
            return false;
        }
        throw error;
    });

    Cypress.config("pageLoadTimeout", 5000);


