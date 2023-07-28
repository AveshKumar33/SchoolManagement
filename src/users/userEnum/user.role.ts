import { registerEnumType } from '@nestjs/graphql';

export enum UserRole {
  ADMIN = 'ADMIN',
  USER = 'USER',
}

// Register the enum with GraphQL
registerEnumType(UserRole, {
  name: 'UserRole', // Make sure the name matches the enum name used in the @Field decorator
});
