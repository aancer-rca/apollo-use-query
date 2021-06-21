
import { InMemoryCache, ReactiveVar, makeVar } from "@apollo/client";
import { IUser } from "./models/User.model";

export const cache: InMemoryCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        activeUser: {
          read () {
            return userVar();
          }
        }
      }
    }
  }
});

export const userInitialValue: IUser = 
  {
    id: 1,
    name: 'James',
    age: 27
  }


export const userVar: ReactiveVar<IUser> = makeVar<IUser>(
  userInitialValue
);
