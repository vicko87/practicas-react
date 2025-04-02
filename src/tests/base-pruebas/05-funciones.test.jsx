import { getUser, getUsarioActivo } from "../../base-pruebas/05-funciones"


describe('Pruebas en 05-funciones', () => {

    test('getUser debe de retornar un objeto', () => {

        const testUser = {
            uid: "ABC123",
            username: "El_Papi1502"
        }

        const user = getUser();
        console.log(user)

        expect(testUser).toEqual(user)
    });

    test('getUsarioActivo debe de retornar un objeto', () => {
        const name = 'Fernando';
        const user = getUsarioActivo(name);

        expect(user).toStrictEqual({
            uid: 'ABC567',
            username: name
        });
    });
});