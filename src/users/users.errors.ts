import { HttpException, HttpStatus } from '@nestjs/common';

export class IdNotMatch extends HttpException {
  constructor(id) {
    const formatted = {
      'errors': [
        {
          'error': `id ${id} not match`,
          'path': 'id',
        },
      ],
      'message': 'srn:error:not_found',
    };
    super(formatted, HttpStatus.NOT_FOUND);
    Error.captureStackTrace(this, IdNotMatch);
  }
}