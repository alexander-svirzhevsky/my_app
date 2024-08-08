import { CounterSchema } from '@/entities/Counter';
import { UserSchema } from '@/entities/User';
import { AuthSchema } from '@/features/AuthByUsername';

export type StateSchema = {
    counter: CounterSchema;
    user: UserSchema;
    auth: AuthSchema;
};
