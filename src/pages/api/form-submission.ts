import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const formData = req.body

    console.log('Form Submission:')
    console.log(formData)

    res.status(200).json({ message: 'Form submitted successfully' })
  } else {
    res.status(405).json({ message: 'Method Not Allowed' })
  }
}
