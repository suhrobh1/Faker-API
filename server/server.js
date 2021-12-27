const express = require("express");
const faker = require("faker");
const app = express();


const createUser = () => {
    const newUser = {
        idUser: faker.datatype.uuid(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        phoneNumber: faker.phone.phoneNumber(),
        email: faker.internet.email(),
        password: faker.internet.password(),
    };
    return newUser;
};
    
const createCompany = () =>{

    const newCompany = {
        idCompany: faker.datatype.uuid(),
        companyName: faker.company.companyName(),
        streetAddress: faker.address.streetAddress(),
        city: faker.address.city(),
        state: faker.address.state(),
        zipCode: faker.address.zipCode(),
        country: faker.address.country()
    };
        return newCompany;
}

app.get("/api/users/new", (request, responce) =>{
    const newFakeUser= createUser();
    responce.json(
        newFakeUser,
    )
})


app.get("/api/companies/new", (request, responce) =>{
    const newFakeCompany = createCompany();
    responce.json(
        newFakeCompany
    )
})

app.get("/api/user/company", (request, responce) =>{
    const newFakeUser= createUser();
    const newFakeCompany = createCompany();
    responce.json({
        user: newFakeUser,
        company: newFakeCompany
    })
})

app.listen(8000, ()=> console.log("you have connected to the port 8000"));