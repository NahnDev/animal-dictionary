import { SetMetadata } from '@nestjs/common';
import { PUBLIC_API_KEY } from 'src/constants/PUBLIC_API_KEY';

export const PublicApi = () => SetMetadata(PUBLIC_API_KEY, true);
