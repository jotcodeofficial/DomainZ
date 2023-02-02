// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { mailOptions, transporter } from 'config/nodemailer';
import type { NextApiRequest, NextApiResponse } from 'next'
import { ResponseData } from 'types/responseData';


const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) => {
  if (req.method === "POST") {
    const data = req.body;
    if (!data.name || !data.email || !data.offer || !data.message) {
      return res.status(400).json({ message: 'bad request' });
    }

    try {
      await transporter.sendMail({
        ...mailOptions,
        subject: `${data.email} made on offer on your domain`,
        text: 'An offer was made',
        html: `<h1>An offer was made</h1><p>${data.email} made on offer of ${data.offer} on your domain!</p><p>message: ${data.message} - ${data.name}</p>`
      });
      return res.status(200).json({ success: true});
    } catch (error: any) {
      
      console.log(error);
      return res.status(400).json({ message: error.message });
    }
  }
  console.log(req.body);
  return res.status(400).json({ message: 'bad request' });
}

export default handler;