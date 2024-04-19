interface User {
  id: number;
  firstName: string;
  lastName: string;
  isAdmin: boolean;
}

//1. mark fields as optional
//2. type parameter as partial<User>, which does the same thing as solution 1, 
// an then check if user is not null before accessing user.id

const defaultUser = {};

//3. best solution is to pass correct data instead of an emptyobject

const getUserId = (user: Partial<User>) => {
  return user.id;
};

getUserId(defaultUser);

