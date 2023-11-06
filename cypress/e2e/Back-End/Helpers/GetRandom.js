function GetRandomPhone(length) {

    return Math.floor(Math.random() * 10 ** length)
    .toString().padStart(length, '0');
}

export default GetRandomPhone

// By Faker : 
// import { faker } from '@faker-js/faker';
//     var random_1 = faker.datatype.number({ count : 6 });
//     var random_2 = faker.datatype.number({ count : 6 });

//    return  random_1 + "" + random_2 ;