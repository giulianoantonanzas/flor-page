import type { NextApiRequest, NextApiResponse } from "next";
import { CourierClient } from "@trycourier/courier";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const courier = CourierClient({
      authorizationToken: "pk_prod_MT6H6Y7XQ34HBHP7ZXJJ75ZCMJA8",
    });

    const data = JSON.parse(req.body);

    const result = await courier.send({
      message: {
        content: {
          title: "Mesaje desde la pagina web",
          body: `
          Se recibio un mensaje desde el sitio web.
          Este es el mensaje:

            nombre: {{fullName}}

            email: {{email}}

            phone: {{phone}}

            message: {{message}}
        `,
        },
        data,
        to: {
          email: "licflorenciasian@gmail.com",
        },
      },
    });

    return res.status(200).json(result);
  } catch (err) {
    console.log(err);

    return res.status(400).json(err);
  }
}
