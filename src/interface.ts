interface User {
    id: number;
    name: string;
    email: string;
    age?: number; // Optional property
  }

// it uses USER interface
  const user: User = {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    age: 30
  };
  