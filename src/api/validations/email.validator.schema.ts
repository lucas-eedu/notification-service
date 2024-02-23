import { NextFunction, Request, Response } from 'express';
import * as Yup from 'yup';

export default async function emailValidation(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  try {
    const schema = Yup.object().shape({
      from: Yup.string().email().required(),
      to: Yup.array().of(Yup.string().email()).required(),
      product: Yup.string().required(),
      status: Yup.string().required().oneOf(['pending', 'sent', 'failed']),
    });

    await schema.validate(req.body, { abortEarly: false });

    return next();
  } catch (err: any) {
    res.status(400).json({
      message: 'Falha na validação dos dados!',
      errors: err.inner,
    });
  }
}
