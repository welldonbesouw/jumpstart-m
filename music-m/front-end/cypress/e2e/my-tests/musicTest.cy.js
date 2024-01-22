import "cypress-file-upload";

describe("Features Test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("View homepage", () => {
    cy.getDataTest("next-button").click();
    cy.wait(2000);
    cy.getDataTest("next-button").click();
    cy.wait(2000);
    cy.getDataTest("prev-button").click();
    cy.getDataTest("featured-test").contains(/featured/i);
    cy.getDataTest("new-products-test").contains(/new products/i);
  });

  it("View brands", () => {
    cy.getDataTest("brands-button-test")
      .click()
      .getDataTest("brands-list-test")
      .contains(/akai/i)
      .getDataTest("brands-list-test")
      .contains(/jbl/i)
      .getDataTest("brands-button-test")
      .click();
  });

  it("Enroll for Music School", () => {
    cy.getDataTest("music-school-test").click();
    cy.scrollTo(0, 3000);
    cy.getDataTest("enroll-now-test").within(() => {
      cy.get("a")
        .contains(/enroll now/i)
        .click();
    });
    cy.getDataTest("school-fullname").type("Welldon Besouw");
    cy.getDataTest("school-age").type("30");
    cy.getDataTest("school-phone-number").type("085718831831");
    cy.getDataTest("school-instrument").select(1); // Select piano instrument
    cy.getDataTest("school-method").select(2); // Select online delivery method
    cy.getDataTest("enroll-button-test").click();
  });

  it("Ask for Instrument Repairs", () => {
    cy.getDataTest("repairs-test").click();
    cy.getDataTest("repairs-name").type("Welldon Besouw");
    cy.getDataTest("repairs-phone-number").type("085718831831");
    cy.getDataTest("repairs-instrument").type("Saxophone");
    cy.getDataTest("repairs-problem").type(
      "My saxophone fell down and does not produce any sound. Please help."
    );
    cy.getDataTest("submit-repairs-test").click();
  });

  it("Search for Music Instruments", () => {
    cy.getDataTest("search-input-test").type("speaker");
    cy.getDataTest("search-button-test").click();
    cy.wait(2000);
    cy.getDataTest("search-input-test").clear();

    cy.getDataTest("search-input-test").type("mic");
    cy.getDataTest("search-button-test").click();
    cy.wait(2000);
    cy.getDataTest("search-input-test").clear();

    cy.getDataTest("search-input-test").type("drums");
    cy.getDataTest("search-button-test").click();
  });

  //   it("Testing picture uploading", () => {
  //     cy.fixture("the-rock.jpeg").then((fileContent) => {
  //       cy.get('input[type="file"]').attachFile({
  //         fileContent: fileContent.toString(),
  //         fileName: "the-rock.jpeg",
  //         mimeType: "image/jpeg",
  //       });
  //     });
  //   });
});

describe("My Account Test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.getDataTest("my-account-test").click();
  });

  it("Register new user", () => {
    cy.getDataTest("register-username").type("kevinsanjaya");
    cy.getDataTest("register-email").type("kevinsanjaya@gmail.com");
    cy.getDataTest("register-password").type("kevinsanjaya");
    cy.getDataTest("register-button").click();
  });

  it("Login", () => {
    cy.getDataTest("login-username").type("kevinsanjaya");
    cy.getDataTest("login-password").type("kevinsanjaya");
    cy.getDataTest("login-button").click();
  });

  it.only("Update Account Details and Add Profile Picture", () => {
    cy.getDataTest("login-username").type("kevinsanjaya");
    cy.getDataTest("login-password").type("kevinsanjaya");
    cy.getDataTest("login-button").click();
    cy.wait(2000);

    cy.getDataTest("my-account-test").click();

    cy.getDataTest("account-details").click();
    cy.getDataTest("first-name").clear().type("Kevin");
    cy.getDataTest("last-name").clear().type("Sanjaya");
    cy.getDataTest("username").clear().type("kevinsanjaya");
    cy.getDataTest("email").clear().type("kevinsanjaya@yahoo.com");
    cy.getDataTest("address").clear().type("Jalan Medan Merdeka No. 1");
    cy.wait(2000);

    cy.fixture("the-rock.png").then(() => {
      cy.get('input[type="file"]').attachFile("the-rock.png");
    });
    cy.wait(2000);
    cy.fixture("kevin-sanjaya.jpeg").then(() => {
      cy.get('input[type="file"]').attachFile("kevin-sanjaya.jpeg");
    });
  });
});
