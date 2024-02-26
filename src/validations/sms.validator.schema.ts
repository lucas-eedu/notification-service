import { NextFunction, Request, Response } from 'express';
import * as Yup from 'yup';

export default async function smsValidation(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  try {
    const schema = Yup.object().shape({
      to: Yup.string().required(),
      body: Yup.string().required(),
      product: Yup.string().required(),
    });

    await schema.validate(req.body, { abortEarly: false });

    return next();
  } catch (err: any) {
    res.status(400).json({
      message: 'Data validation failed!',
      errors: err.inner,
    });
  }
}
