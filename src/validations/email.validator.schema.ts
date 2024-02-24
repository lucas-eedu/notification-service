import { NextFunction, Request, Response } from 'express';
import * as Yup from 'yup';

export default async function emailValidation(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  try {
    const schema = Yup.object().shape({
      to: Yup.string().email().required(),
      subject: Yup.string().required(),
      html: Yup.string().required(),
      product: Yup.string().required(),
      status: Yup.string()
        .required()
        .oneOf(['pending', 'delivered', 'bounce', 'blocked']),
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
